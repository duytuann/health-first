import { DeleteOutlined } from '@ant-design/icons';
import { Badge, Breadcrumb, Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import Text from 'antd/lib/typography/Text';
import Button, { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import { TableHeadingWrapper } from 'components/Table/styles';
import TruncateText from 'components/TruncateText';
import { RoleGroupListComboBoxResponsive } from 'core/models/RoleGroup';
import CustomFormLeft from 'modules/role-group/components/CustomFormLeft';
import ModalRoleGroupForm from 'modules/role-group/components/ModalRoleGroupForm';
import SystemAdvanceSearch from 'modules/role-group/components/SystemAdvanceSearch';
import { deleteRoleGroupStart, getRoleGroupStart } from 'modules/role-group/redux';
import { setRoleGroupID } from 'modules/role-group/redux/roleGroupForm';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'redux/store';
import { ReduxStateType } from 'redux/types';
import { BreadcrumbWrapper, RoleGroupRightWrapper, RoleGroupWrapper } from './styles';

const RoleGroupManagement: React.FC = () => {
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'STT',
      key: 'index',
      width: 80,
      render: (text: string, row: any, index: number) => <div className="text-center">{index + 1}</div>,
    },
    {
      title: 'Nhóm quyền',
      key: 'RoleGroupName',
      dataIndex: 'RoleGroupName',
      width: 200,
    },
    {
      title: 'Nhóm quyền',
      key: 'ListRoleDescription',
      dataIndex: 'ListRoleDescription',
      render: (ListRoleDescription: any) =>
        ListRoleDescription.map((role: any, idx: number) => (
          <TruncateText key={idx} maxLine={2}>
            - {role}
          </TruncateText>
        )),
    },
    {
      width: 250,
      title: 'Trạng thái',
      key: 'IsDelete',
      dataIndex: 'IsDelete',
      render: (value: any) => (
        <div className="text-center">
          <Badge status={!value ? 'success' : 'error'} />
          <Text type={!value ? 'success' : 'danger'}>{!value ? 'Đang hoạt động' : 'Đã xoá'}</Text>
        </div>
      ),
    },
    {
      width: 200,
      title: 'Thao tác',
      key: 'action',
      render: (value: string, record: any) => (
        <div className="text-center">
          <Space size="small">
            <Tooltip title="Chỉnh sửa" color="#2a2a2a">
              <LinkButton
                type="link"
                size="small"
                icon={<Icon name="edit" color="primary" size={20} className="mx-auto" />}
                onClick={() => {
                  dispatch(setRoleGroupID(record.RoleGroupID));
                  setIsShowRuleGroupForm(true);
                }}
              />
            </Tooltip>

            <Tooltip title="Xem lịch sử" color="#2a2a2a">
              <LinkButton
                type="link"
                size="small"
                icon={<Icon name="history" color="primary" size={20} className="mx-auto" />}
              />
            </Tooltip>
            <Tooltip title="Xoá nhóm quyền" color="#2a2a2a">
              <LinkButton
                type="link"
                size="small"
                icon={<Icon name="delete" color="red600" size={20} className="mx-auto" />}
                onClick={() => {
                  showPromiseConfirm(record);
                }}
              />
            </Tooltip>
          </Space>
        </div>
      ),
    },
  ];

  const {
    status,
    data: { roleGroupList, conditionSearch },
  } = useSelector((state: RootState) => state.roleGroup.roleGroupList);

  const [isShowRuleGroupForm, setIsShowRuleGroupForm] = useState(false);

  useEffect(() => {
    dispatch(getRoleGroupStart(conditionSearch));
  }, [conditionSearch]);

  const showPromiseConfirm = (roleData: RoleGroupListComboBoxResponsive) => {
    confirm({
      title: 'Xoá nhóm quyền',
      icon: <DeleteOutlined color="red" />,
      content: (
        <div>
          Bạn có chắc chắn muốn xoá nhóm quyền
          <strong> {roleData?.RoleGroupName}</strong>
        </div>
      ),
      okText: 'Đồng ý',
      cancelText: 'Hủy',
      onOk() {
        dispatch(deleteRoleGroupStart(roleData.RoleGroupID));
      },
      onCancel() {},
    });
  };

  return (
    <RoleGroupWrapper>
      <CustomFormLeft />
      <RoleGroupRightWrapper>
        <BreadcrumbWrapper>
          <Breadcrumb.Item>
            <Link to="">Quản trị hệ thống</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Quản lý phân quyền</Breadcrumb.Item>
        </BreadcrumbWrapper>
        <SystemAdvanceSearch />
        <TableHeadingWrapper>
          <div>
            <div className="table-heading">Danh sách nhóm quyền: {roleGroupList.length}</div>
          </div>
          <Space>
            <Button
              color="primary"
              $fill
              icon={<Icon name="add" size={16} className="mr-1" />}
              onClick={() => {
                dispatch(setRoleGroupID(''));
                setIsShowRuleGroupForm(true);
              }}
            >
              Thêm nhóm quyền
            </Button>
          </Space>
        </TableHeadingWrapper>
        <Table loading={status === ReduxStateType.LOADING} columns={columns} dataSource={roleGroupList} />
        {isShowRuleGroupForm && (
          <ModalRoleGroupForm
            visible={isShowRuleGroupForm}
            onCancel={() => {
              setIsShowRuleGroupForm(false);
            }}
            onOk={() => {
              dispatch(getRoleGroupStart(conditionSearch));
              setIsShowRuleGroupForm(false);
            }}
          />
        )}
      </RoleGroupRightWrapper>
    </RoleGroupWrapper>
  );
};
export default RoleGroupManagement;
