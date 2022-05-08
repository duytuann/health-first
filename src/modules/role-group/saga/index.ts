import { all, call, put, takeLatest, select } from '@redux-saga/core/effects';
import { deleteRoleGroup, getListRoleGroup } from 'core/http/apis/role-group';
import { ResultResponse } from 'core/models/ResultResponse';
import { RoleGroupResponse } from 'core/models/RoleGroup';
import { toast } from 'react-toastify';
import { RootState } from 'redux/store';
import roleGroupFormSaga from './roleGroupFormSaga';
import {
  getRoleGroupStart,
  getRoleGroupSuccess,
  getRoleGroupFailed,
  deleteRoleGroupStart,
  ConditionSearch,
} from '../redux';

function* listRoleGroupSaga(action: ReturnType<typeof getRoleGroupStart>) {
  try {
    const res: ResultResponse<RoleGroupResponse> = yield call(getListRoleGroup, action.payload);
    if (res.isOk) {
      yield put({ type: getRoleGroupSuccess.type, payload: res.Object });
    } else {
      toast.error(res.Object);
      yield put({ type: getRoleGroupFailed.type, payload: res.Object });
    }
  } catch (error) {
    yield put({ type: getRoleGroupFailed.type, payload: error });
  }
}

function* fetchDeleteRoleGroup(action: ReturnType<typeof deleteRoleGroupStart>) {
  try {
    const res: ResultResponse<RoleGroupResponse> = yield call(deleteRoleGroup, action.payload);
    if (res.isOk) {
      toast.success('Xóa nhóm quyền thành công');
      const conditionSearch: ConditionSearch = yield select(
        (state: RootState) => state.roleGroup.roleGroupList.data.conditionSearch
      );
      yield put({ type: getRoleGroupStart.type, payload: conditionSearch });
    } else {
      toast.error(res.Object);
      const conditionSearch: ConditionSearch = yield select(
        (state: RootState) => state.roleGroup.roleGroupList.data.conditionSearch
      );
      yield put({ type: getRoleGroupStart.type, payload: conditionSearch });
    }
  } catch (error) {
    toast.error('Có lỗi xảy ra vui lòng thử lại sau');
    const conditionSearch: ConditionSearch = yield select(
      (state: RootState) => state.roleGroup.roleGroupList.data.conditionSearch
    );
    yield put({ type: getRoleGroupStart.type, payload: conditionSearch });
  }
}

function* watchListRoleGroup() {
  yield takeLatest(getRoleGroupStart.type, listRoleGroupSaga);
}
function* watchDeleteRoleGroup() {
  yield takeLatest(deleteRoleGroupStart.type, fetchDeleteRoleGroup);
}

export default function* roleGroupSaga() {
  yield all([watchListRoleGroup(), watchDeleteRoleGroup(), roleGroupFormSaga()]);
}
