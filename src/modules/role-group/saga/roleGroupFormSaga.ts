import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { createUpdateRoleGroup, getOneRoleGroup } from 'core/http/apis/role-group';
import { ResultResponse } from 'core/models/ResultResponse';
import { RoleGroupItem } from 'core/models/RoleGroup';
import { toast } from 'react-toastify';
import {
  getOneRoleGroupFailed,
  getOneRoleGroupStart,
  getOneRoleGroupSuccess,
  submitRoleGroupStart,
  updateRoleGroupFailed,
  updateRoleGroupSuccess,
} from '../redux/roleGroupForm';

function* fetchOneRoleGroupSaga(action: ReturnType<typeof getOneRoleGroupStart>) {
  try {
    const res: ResultResponse<RoleGroupItem> = yield call(getOneRoleGroup, action.payload.id);
    if (res.isOk) {
      const roles: { [key: string]: any } = {};
      res.Object.ListRole.forEach(data => {
        if (!roles[data.TabID]) {
          roles[data.TabID] = {
            TabID: data.TabID,
            TabName: data.TabName,
            Roles: [
              {
                RoleValue: data.RoleValue,
                RoleName: data.RoleName,
                IsRole: data.IsRole,
                TabID: data.TabID,
              },
            ],
          };
        } else {
          roles[data.TabID].Roles.push({
            TabID: data.TabID,
            IsRole: data.IsRole,
            RoleValue: data.RoleValue,
            RoleName: data.RoleName,
          });
        }
      });
      yield put({
        type: getOneRoleGroupSuccess.type,
        payload: {
          roleGroupDataList: Object.values(roles),
          RoleGroupID: res.Object.RoleGroupID,
          RoleGroupName: res.Object.RoleGroupName,
        },
      });
    } else {
      toast.error(res.Object);
      yield put({ type: getOneRoleGroupFailed.type, payload: res.Object });
    }
  } catch (error) {
    yield put({ type: getOneRoleGroupFailed.type, payload: error });
  }
}

function* fetchUpdateRoleGroup(action: ReturnType<typeof submitRoleGroupStart>) {
  try {
    const res: ResultResponse<any> = yield call(createUpdateRoleGroup, action.payload);
    if (res.isOk) {
      yield put({ type: updateRoleGroupSuccess.type, payload: res.Object });
    } else {
      toast.error(res.Object);
      yield put({ type: updateRoleGroupFailed.type, payload: res.Object });
    }
  } catch (error) {
    yield put({ type: updateRoleGroupFailed.type, payload: error });
  }
}

function* watchgetOneRoleGroup() {
  yield takeLatest(getOneRoleGroupStart.type, fetchOneRoleGroupSaga);
}

function* watchUpdateRoleGroup() {
  yield takeLatest(submitRoleGroupStart.type, fetchUpdateRoleGroup);
}

export default function* roleGroupFormSaga() {
  yield all([watchgetOneRoleGroup(), watchUpdateRoleGroup()]);
}
