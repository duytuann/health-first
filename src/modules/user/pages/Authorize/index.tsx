import React, { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Badge, Breadcrumb, Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import Text from 'antd/lib/typography/Text';
import Button, { LinkButton } from 'components/Button';
import Table from 'components/Table';
import { TableHeadingWrapper } from 'components/Table/styles';
import { Link } from 'react-router-dom';
import ModalRoleGroupForm from 'modules/user/components/ModalRoleGroupForm';
import Icon from 'components/Icon/Icon';
import TruncateText from 'components/TruncateText';
import { useDispatch, useSelector } from 'react-redux';
import CustomFormLeft from 'modules/user/components/CustomFormLeft';
import { BreadcrumbWrapper, RoleGroupRightWrapper, RoleGroupWrapper } from './styles';

interface IAuthorizeProps {}

const Authorize: React.FC<IAuthorizeProps> = () => {
  const dispatch = useDispatch();
  const [isShowRuleGroupForm, setIsShowRuleGroupForm] = useState<boolean>(false);

  const columns = [
    {
      title: 'STT',
      key: 'index',
      width: 10,
      render: (text: string, row: any, index: number) => <div className="text-center">{index + 1}</div>,
    },
    {
      title: 'Nhóm quyền',
      key: 'RoleGroupName',
      width: 250,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.RoleGroupName}</div>,
    },
    {
      title: 'Chi tiết nhóm quyền',
      key: 'RoleGroupDetail',
      dataIndex: 'RoleGroupDetail',
      render: (text: string, row: any, index: number) => <div className="text-center">{row.RoleGroupDetail}</div>,
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
                  setIsShowRuleGroupForm(true);
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

  const showPromiseConfirm = (roleData: any) => {
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
        // dispatch(deleteRoleGroupStart(roleData.RoleGroupID));
      },
      onCancel() {},
    });
  };

  const roleGroupList = [
    {
      RoleGroupName: 'Quản lý',
      RoleGroupDetail:
        'Người quản lý được thực hiện tất cả chức năng và truy cập tất cả dữ liệu. Người quản lý phân công địa bàn (huyện/quận) phụ trách cho các chuyên viên.',
    },
    {
      RoleGroupName: 'Chuyên viên',
      RoleGroupDetail: 'Chuyên viên phụ trách địa bàn nào thì chỉ làm việc trên dữ liệu các cơ sở thuộc địa bàn đó',
    },
  ];

  return (
    <RoleGroupWrapper>
      <CustomFormLeft />
      <RoleGroupRightWrapper>
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
                // dispatch(setRoleGroupID(''));
                setIsShowRuleGroupForm(true);
              }}
            >
              Thêm nhóm quyền
            </Button>
          </Space>
        </TableHeadingWrapper>
        <Table pagination={false} columns={columns} dataSource={roleGroupList} />
        {isShowRuleGroupForm && (
          <ModalRoleGroupForm
            visible={isShowRuleGroupForm}
            onCancel={() => {
              setIsShowRuleGroupForm(false);
            }}
            onOk={() => {
              //   dispatch(getRoleGroupStart(conditionSearch));
              setIsShowRuleGroupForm(false);
            }}
          />
        )}
      </RoleGroupRightWrapper>
    </RoleGroupWrapper>
  );
};

export default Authorize;
