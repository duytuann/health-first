import { Checkbox, Form, Input, Radio, RadioChangeEvent, Space, Spin } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { RoleGroupParams } from 'core/http/apis/role-group/types';
import { Role, TabRole } from 'core/models/RoleGroup';
import {
  getOneRoleGroupStart,
  getOneRoleGroupSuccess,
  resetForm,
  submitRoleGroupStart,
} from 'modules/role-group/redux/roleGroupForm';
import { getRoleGroupStart } from 'modules/role-group/redux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ReduxStateType } from 'redux/types';
import { toast } from 'react-toastify';
import { FormDetailWrapper, TabRoleWrapper } from './styles';
interface IModalRoleGroupFormProps {
  visible?: boolean | undefined;
  onCancel: () => void;
  onOk: () => void;
}

const ModalRoleGroupForm: React.FC<IModalRoleGroupFormProps> = ({ visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [roleGroupTypes, setRoleGroupTypes] = useState<TabRole>();
  const {
    status,
    data: { roleGroupDataList, RoleGroupID, RoleGroupName },
  } = useSelector((state: RootState) => state.roleGroup.roleGroupForm);

  const {
    data: { conditionSearch },
  } = useSelector((state: RootState) => state.roleGroup.roleGroupList);

  useEffect(() => {
    if (visible) {
      dispatch(getOneRoleGroupStart({ id: RoleGroupID }));
    }
  }, [visible]);

  useEffect(() => {
    if (status === ReduxStateType.SUBMITTED) {
      toast.success('Cập nhật dữ liệu thành công');
      dispatch(resetForm());
      onOk();
    }
  }, [status]);

  useEffect(() => {
    const flatArrayRole: Role[] = [];
    roleGroupDataList.forEach(tab => {
      tab.Roles.forEach(tabItem => flatArrayRole.push(tabItem));
    });
    const typeValues = roleGroupDataList.find(x => x.TabID === 7);
    if (typeValues) setRoleGroupTypes(typeValues);
    const typeValue = flatArrayRole.find(x => x.TabID === 7 && x.IsRole === true);
    const formValue = form.getFieldsValue(true);
    form.setFieldsValue({
      ...formValue,
      RoleGroupID,
      RoleGroupName,
      ListRole: flatArrayRole,
      RoleGroupType: typeValue?.RoleValue || 1,
    });
  }, [roleGroupDataList, RoleGroupID, RoleGroupName]);

  const handleSubmit = () => {
    form.validateFields().then(() => {
      const value = form.getFieldsValue(true);

      const listRole: Role[] = value.ListRole.filter((item: any) => typeof item !== 'number').map((role: Role) => {
        if (role.TabID === 7) {
          let roleValue = false;
          if (role.RoleValue === value.RoleGroupType) roleValue = true;
          return {
            IsRole: roleValue,
            RoleValue: role.RoleValue,
            TabID: role.TabID,
            RoleName: role.RoleName,
            OrderID: role.OrderID,
          };
        }
        return {
          IsRole: role.IsRole,
          RoleValue: role.RoleValue,
          TabID: role.TabID,
          RoleName: role.RoleName,
          OrderID: role.OrderID,
        };
      });

      const body: RoleGroupParams = {
        RoleGroup: {
          RoleGroupName: value.RoleGroupName,
          ListRole: listRole,
          RoleGroupID: value.RoleGroupID,
        },
      };
      dispatch(submitRoleGroupStart(body));
      dispatch(getRoleGroupStart(conditionSearch));
    });
  };

  const isCheckAll = (Tab: TabRole) => {
    if (!Tab.Roles || !Tab.Roles.length) return false;
    return Tab.Roles.every((role: Role) => role.IsRole);
  };

  const handleCheckRole = (e: CheckboxChangeEvent, TabID: number, RoleID: number) => {
    const { checked } = e.target;
    const formValue = form.getFieldsValue(true);
    let newTabData = [...roleGroupDataList].find(tab => tab.TabID === TabID);
    if (newTabData) {
      const newRolesData = newTabData.Roles.map(role => {
        if (RoleID === 0) {
          return {
            ...role,
            IsRole: checked,
          };
        }
        if (role.RoleValue === RoleID) {
          return {
            ...role,
            IsRole: checked,
          };
        }
        return role;
      });
      newTabData = { ...newTabData, Roles: newRolesData };
      const newRoleGroupDataList: TabRole[] = [...roleGroupDataList].map(tab => {
        if (tab.TabID === TabID) {
          return {
            ...newTabData,
          } as TabRole;
        }

        return tab as TabRole;
      });

      dispatch(
        getOneRoleGroupSuccess({
          RoleGroupID: formValue.RoleGroupID,
          RoleGroupName: formValue.RoleGroupName,
          roleGroupDataList: newRoleGroupDataList,
        })
      );
    }
  };

  const handelRadioChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    let newTabData = [...roleGroupDataList].find(tab => tab.TabID === 7);
    if (newTabData) {
      const newRolesData = newTabData.Roles.map(role => {
        let roleValue = false;
        if (role.RoleValue === value) roleValue = true;
        return {
          ...role,
          IsRole: roleValue,
        };
      });
      newTabData = { ...newTabData, Roles: newRolesData };
      const newRoleGroupDataList: TabRole[] = [...roleGroupDataList].map(tab => {
        if (tab.TabID === 7) {
          return {
            ...newTabData,
          } as TabRole;
        }

        return tab as TabRole;
      });
      const formValue = form.getFieldsValue(true);
      dispatch(
        getOneRoleGroupSuccess({
          RoleGroupID: formValue.RoleGroupID,
          RoleGroupName: formValue.RoleGroupName,
          roleGroupDataList: newRoleGroupDataList,
        })
      );
    }
  };

  return (
    <Modal
      title={`${RoleGroupID === '' ? 'Thêm nhóm quyền' : 'Cập nhật nhóm quyền'}`}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      width={1200}
      style={{ top: 20 }}
      bodyStyle={{
        maxHeight: 'calc(300vh - 10px)',
      }}
      footer={
        <div className="d-flex justify-content-end">
          <Space>
            <Button color="primary" key="back" onClick={onCancel}>
              Đóng
            </Button>
            <Button
              color="primary"
              $fill
              key="submit"
              onClick={handleSubmit}
              loading={status === ReduxStateType.SUBMITTING}
              icon={<Icon name="save" size={18} className="mr-2" />}
            >
              Ghi lại
            </Button>
          </Space>
        </div>
      }
    >
      {status === ReduxStateType.LOADING ? (
        <div className="d-flex justify-content-center">
          <Spin />
        </div>
      ) : (
        <FormDetailWrapper
          form={form}
          name="basic"
          layout="vertical"
          initialValues={{
            RoleGroupID: RoleGroupID,
            RoleGroupName: RoleGroupName,
            ListRole: [],
            RoleGroupType: 1,
          }}
        >
          <Form.Item
            label="Tên nhóm quyền"
            name="RoleGroupName"
            rules={[
              {
                required: true,
                message: 'Tên nhóm quyền không được để trống',
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Nhập tên nhóm quyền" />
          </Form.Item>
          <Form.Item label="Loại nhóm quyền" name="RoleGroupType">
            {roleGroupTypes && (
              <Radio.Group>
                {!!roleGroupTypes.Roles &&
                  roleGroupTypes.Roles.map((role, idx) => (
                    <Radio value={role.RoleValue} key={idx} onChange={e => handelRadioChange(e)}>
                      {role.RoleName}
                    </Radio>
                  ))}
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item label="Chọn quyền" name="ListRole" className="mb-0">
            {roleGroupDataList
              .filter(x => x.TabID !== 7)
              .map((Tab, index) => (
                <TabRoleWrapper key={index}>
                  <div className="tab-role-name" key={Tab.TabID}>
                    {Tab.TabName}
                  </div>
                  <Space className="tab-role-list" wrap>
                    <Checkbox
                      value={Tab.TabID}
                      checked={isCheckAll(Tab)}
                      onChange={(e: CheckboxChangeEvent) => handleCheckRole(e, Tab.TabID, 0)}
                    >
                      Tất cả
                    </Checkbox>

                    {!!Tab.Roles &&
                      Tab.Roles.map((role, idx) => (
                        <Checkbox
                          key={idx}
                          checked={role.IsRole}
                          onChange={e => handleCheckRole(e, Tab.TabID, role.RoleValue)}
                        >
                          {role.RoleName}
                        </Checkbox>
                      ))}
                  </Space>
                </TabRoleWrapper>
              ))}
          </Form.Item>
        </FormDetailWrapper>
      )}
    </Modal>
  );
};
export default ModalRoleGroupForm;
