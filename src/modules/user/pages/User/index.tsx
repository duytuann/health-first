import { Space, Tooltip } from 'antd';
import Button, { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import { TableHeadingWrapper } from 'components/Table/styles';
import CustomFormLeft from 'modules/user/components/CustomFormLeft';
import ModalUserForm from 'modules/user/components/ModalUserForm';
import React, { useState } from 'react';
import { UserRightWrapper, UserWrapper } from './styles';

interface IFacilitiesProps {}

const User: React.FC<IFacilitiesProps> = () => {
  const [isShowUserForm, setIsShowUserForm] = useState<boolean>(false);

  const columns = [
    {
      title: 'STT',
      key: 'index',
      width: 10,
      render: (text: string, row: any, index: number) => <div className="text-center">{index + 1}</div>,
    },
    {
      title: 'Tên tài khoản',
      key: 'UserName',
      width: 200,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.UserName}</div>,
    },
    {
      title: 'Họ và tên',
      key: 'DisplayName',
      width: 200,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.DisplayName}</div>,
    },
    {
      title: 'Nhóm quyền',
      key: 'UserRole',
      render: (text: string, row: any, index: number) => <div className="text-center">{row.UserRole}</div>,
    },
    {
      title: 'Trạng thái',
      key: 'UserStatus',
      render: (text: string, row: any, index: number) => <div className="text-center">{row.UserStatus}</div>,
    },
    {
      title: 'Trạng thái',
      key: 'PhoneNumber',
      render: (text: string, row: any, index: number) => <div className="text-center">{row.PhoneNumber}</div>,
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
                  //   dispatch(setRoleGroupID(record.RoleGroupID));
                  setIsShowUserForm(true);
                }}
              />
            </Tooltip>
            <Tooltip title="Xoá nhóm quyền" color="#2a2a2a">
              <LinkButton
                type="link"
                size="small"
                icon={<Icon name="delete" color="red600" size={20} className="mx-auto" />}
                onClick={() => {
                  // showPromiseConfirm(record);
                }}
              />
            </Tooltip>
          </Space>
        </div>
      ),
    },
  ];

  const userList = [
    {
      UserName: 'tungtt2601',
      DisplayName: 'Trần Thanh Tùng',
      UserRole: 'Quản lý',
      UserStatus: 'Đang hoạt động',
      PhoneNumber: '0978654213',
    },
    {
      UserName: 'longdn1009',
      DisplayName: 'Đỗ Ngọc Long',
      UserRole: 'Chuyên viên',
      UserStatus: 'Đang hoạt động',
      PhoneNumber: '0987678563',
    },
    {
      UserName: 'tuandd2008',
      DisplayName: 'Đỗ Duy Tuấn',
      UserRole: 'Chuyên viên',
      UserStatus: 'Đang hoạt động',
      PhoneNumber: '0967665661',
    },
  ];

  return (
    <UserWrapper>
      <CustomFormLeft />
      <UserRightWrapper>
        <TableHeadingWrapper>
          <div>
            <div className="table-heading">Danh sách người dùng trong hệ thống</div>
          </div>
          <Space>
            <Button
              color="primary"
              $fill
              icon={<Icon name="add" size={16} className="mr-1" />}
              onClick={() => {
                // dispatch(setRoleGroupID(''));
                setIsShowUserForm(true);
              }}
            >
              Thêm người dùng
            </Button>
          </Space>
        </TableHeadingWrapper>
        <Table pagination={false} columns={columns} dataSource={userList} />
        {isShowUserForm && (
          <ModalUserForm
            visible={isShowUserForm}
            onCancel={() => {
              setIsShowUserForm(false);
            }}
            onOk={() => {
              //   dispatch(getRoleGroupStart(conditionSearch));
              setIsShowUserForm(false);
            }}
          />
        )}
      </UserRightWrapper>
    </UserWrapper>
  );
};
export default User;
