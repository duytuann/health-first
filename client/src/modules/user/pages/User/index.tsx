import { DeleteOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import Button, { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import RegionForm from 'modules/user/components/RegionForm';
import { TableHeadingWrapper } from 'components/Table/styles';
import { roleList } from 'helper/consts';
import ModalDetailForm from 'modules/user/components/ModalDetailForm';
import ModalUserForm from 'modules/user/components/ModalUserForm';
import SystemAdvanceSearch from 'modules/user/components/SystemAdvanceSearch';
import {
    changeCurrentDetailById,
    changeSearchUser,
    postDeleteUserStart,
    postGetListUserStart,
} from 'modules/user/redux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { UserRightWrapper, UserWrapper } from './styles';

interface IFacilitiesProps {}

const User: React.FC<IFacilitiesProps> = () => {
    const dispatch = useDispatch();
    const [isShowRegionForm, setIsShowRegionForm] = useState(false);
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
            width: 120,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.displayName}</div>,
        },
        {
            title: 'Nhóm quyền',
            key: 'roles',
            width: 170,
            render: (text: string, row: any, index: number) => (
                <div className="text-center">
                    {row.roles.map((item: number) => roleList.find(ele => ele.id === item)?.name).join(', ')}
                </div>
            ),
        },
        {
            title: 'Số điện thoại',
            key: 'phoneNumber',
            width: 120,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.phoneNumber}</div>,
        },
        {
            title: 'Email',
            key: 'email',
            width: 150,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.email}</div>,
        },
        {
            title: 'Khu vực quản lý',
            key: 'wards',
            render: (text: string, row: any, index: number) => (
                <div className="text-center">{row.wards.join(' ,')}</div>
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
        data: { userList, searchUser },
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
        dispatch(
            changeSearchUser({
                username: null,
                phoneNumber: null,
                email: null,
                userRoleId: null,
            })
        );
    }, []);

    useEffect(() => {
        dispatch(postGetListUserStart(searchUser));
    }, [searchUser]);

    return (
        <UserWrapper>
            {isShowRegionForm && (
                <RegionForm
                    visible={isShowRegionForm}
                    onCancel={() => setIsShowRegionForm(false)}
                    onOk={() => {
                        setIsShowRegionForm(false);
                    }}
                    isUpdate={false}
                />
            )}
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
                                setIsShowRegionForm(true);
                            }}
                        >
                            Thêm địa bàn quản lý cho chuyên viên
                        </Button>
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
