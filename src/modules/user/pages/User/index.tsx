import { DeleteOutlined } from '@ant-design/icons';
import { Form, Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import Button, { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import { TableHeadingWrapper } from 'components/Table/styles';
import CustomFormLeft from 'modules/user/components/CustomFormLeft';
import ModalDetailForm from 'modules/user/components/ModalDetailForm';
import ModalUserForm from 'modules/user/components/ModalUserForm';
import SystemAdvanceSearch from 'modules/user/components/SystemAdvanceSearch';
import React, { useState } from 'react';
import { UserRightWrapper, UserWrapper } from './styles';

interface IFacilitiesProps {}

const User: React.FC<IFacilitiesProps> = () => {
  const [form] = Form.useForm();
  const [isShowUserForm, setIsShowUserForm] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      width: 150,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.UserName}</div>,
    },
    {
      title: 'Họ và tên',
      key: 'DisplayName',
      width: 150,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.DisplayName}</div>,
    },
    {
      title: 'Nhóm quyền',
      key: 'UserRole',
      width: 150,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.UserRole}</div>,
    },
    {
      title: 'Trạng thái',
      key: 'UserStatus',
      width: 100,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.UserStatus}</div>,
    },
    {
      title: 'Số điện thoại',
      key: 'PhoneNumber',
      width: 150,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.PhoneNumber}</div>,
    },
    {
      title: 'Khu vực quản lý',
      key: 'PhoneNumber',
      render: (text: string, row: any, index: number) => (
        <div
          onClick={() => {
            setIsModalVisible(true);
          }}
          className="text-center"
          style={{ color: '#2260bd' }}
        >
          {row.KVQL}
        </div>
      ),
    },
    {
      width: 100,
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
                  showPromiseConfirm(record);
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
      UserRole: 'Quản lý, chuyên viên',
      UserStatus: 'Đang hoạt động',
      PhoneNumber: '0978654213',
      KVQL: 'Chi tiết',
    },
    {
      UserName: 'longdn1009',
      DisplayName: 'Đỗ Ngọc Long',
      UserRole: 'Quản lý, chuyên viên',
      UserStatus: 'Đang hoạt động',
      PhoneNumber: '0987678563',
      KVQL: 'Chi tiết',
    },
    {
      UserName: 'tuandd2008',
      DisplayName: 'Đỗ Duy Tuấn',
      UserRole: 'Quản lý, chuyên viên',
      UserStatus: 'Đang hoạt động',
      PhoneNumber: '0967665661',
      KVQL: 'Chi tiết',
    },
  ];

  const showPromiseConfirm = (record: any) => {
    confirm({
      title: 'Xoá người dùng',
      icon: <DeleteOutlined color="red" />,
      content: (
        <div>
          Bạn có chắc chắn muốn xoá người dùng <b>{record.UserName}</b> này không?
        </div>
      ),
      okText: 'Đồng ý',
      cancelText: 'Hủy',
      onOk() {
        // dispatch(deleteRoleGroupStart(roleData.RoleGroupID));
      },
      onCancel() {},
    });
  };

  return (
    <UserWrapper>
      {isModalVisible && (
        <ModalDetailForm
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onOk={() => {
            setIsModalVisible(false);
          }}
          isUpdate={false}
        />
      )}
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
      <CustomFormLeft />
      <UserRightWrapper>
        <SystemAdvanceSearch />
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
      </UserRightWrapper>
    </UserWrapper>
  );
};
export default User;
