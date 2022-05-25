import { DeleteOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import Button, { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import { TableHeadingWrapper } from 'components/Table/styles';
import { roleList } from 'helper/consts';
import ModalDetailForm from 'modules/user/components/ModalDetailForm';
import ModalUserForm from 'modules/user/components/ModalUserForm';
import SystemAdvanceSearch from 'modules/user/components/SystemAdvanceSearch';
import { postGetListUserStart, changeCurrentDetailById, postDeleteUserStart } from 'modules/user/redux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { UserRightWrapper, UserWrapper } from './styles';

interface IFacilitiesProps {}

const User: React.FC<IFacilitiesProps> = () => {
    const dispatch = useDispatch();
    const [isShowUserForm, setIsShowUserForm] = useState<boolean>(false);
    const [isShowUserUpdateForm, setIsShowUserUpdateForm] = useState<boolean>(false);
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
            key: 'username',
            width: 150,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.username}</div>,
        },
        {
            title: 'Họ tên',
            key: 'displayName',
            width: 150,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.displayName}</div>,
        },
        {
            title: 'Nhóm quyền',
            key: 'roles',
            width: 200,
            render: (text: string, row: any, index: number) => (
                <div className="text-center">
                    {row.roles.map((item: number) => roleList.find(ele => ele.id === item)?.name).join(', ')}
                </div>
            ),
        },
        {
            title: 'Trạng thái',
            key: 'userStatus',
            width: 100,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.userStatus}</div>,
        },
        {
            title: 'Số điện thoại',
            key: 'phoneNumber',
            width: 150,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.phoneNumber}</div>,
        },

        {
            title: 'Khu vực quản lý',
            key: 'KVQL',
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
            title: 'Ngày tạo',
            key: 'createdDate',
            width: 100,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.createdDate}</div>,
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
                                    dispatch(changeCurrentDetailById(record));
                                    setIsShowUserUpdateForm(true);
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="Xoá nhóm quyền" color="#2a2a2a">
                            <LinkButton
                                type="link"
                                size="small"
                                icon={<Icon name="delete" color="red600" size={20} className="mx-auto" />}
                                onClick={() => {
                                    dispatch(changeCurrentDetailById(record));
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
        data: { userList },
    } = useSelector((state: RootState) => state.user);

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
                dispatch(
                    postDeleteUserStart({
                        id: record.id,
                    })
                );
            },
            onCancel() {},
        });
    };

    useEffect(() => {
        dispatch(postGetListUserStart());
    }, []);

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
                        setIsShowUserForm(false);
                    }}
                    isUpdate={false}
                />
            )}
            {isShowUserUpdateForm && (
                <ModalUserForm
                    visible={isShowUserUpdateForm}
                    onCancel={() => {
                        setIsShowUserUpdateForm(false);
                    }}
                    onOk={() => {
                        setIsShowUserUpdateForm(false);
                    }}
                    isUpdate={true}
                />
            )}
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
