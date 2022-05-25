import { DeleteOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import ActivityForm from 'modules/plan/components/ActivityForm';
import { changeCurrentActivityId, postDeleteActivityStart, changeCurrentFacilityId } from 'modules/plan/redux';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ActivitiesContainer } from './styles';

interface IActivityTableProps {}

const ActivityTable: React.FC<IActivityTableProps> = () => {
    const dispatch = useDispatch();
    const [isUpdateFacilityForm, setIsUpdateFacilityForm] = useState(false);
    const {
        data: { activityOfPlan },
    } = useSelector((state: RootState) => state.plan);

    const columns = [
        {
            title: 'STT',
            key: 'index',
            width: 10,
            render: (text: string, row: any, index: number) => <div className="text-center">{index + 1}</div>,
        },
        {
            title: 'Tên hoạt động',
            key: 'name',
            width: 200,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.name}</div>,
        },
        {
            title: 'Ngày bắt đầu',
            key: 'startDate',
            width: 150,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.startDate}</div>,
        },
        {
            title: 'Ngày kết thúc',
            key: 'endDate',
            render: (text: string, row: any, index: number) => <div className="text-center">{row.endDate}</div>,
        },
        {
            title: 'Kết luận',
            key: 'conclusion',
            width: 180,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.conclusion}</div>,
        },
        {
            title: 'Trạng thái hoạt động',
            key: 'activityStateId',
            render: (text: string, row: any, index: number) => <div className="text-center">{row.activityStateId}</div>,
        },
        {
            title: 'Kết quả hoạt động',
            key: 'activityResult',
            render: (text: string, row: any, index: number) => <div className="text-center">{row.activityResult}</div>,
        },
        {
            title: 'Người tạo',
            key: 'createdUser',
            render: (text: string, row: any, index: number) => <div className="text-center">{row.createdUser}</div>,
        },
        {
            width: 150,
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
                                    dispatch(changeCurrentFacilityId(record.facilityId));
                                    dispatch(changeCurrentActivityId(record.id));
                                    setIsUpdateFacilityForm(true);
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="Xoá cơ sở" color="#2a2a2a">
                            <LinkButton
                                type="link"
                                size="small"
                                icon={<Icon name="delete" color="red600" size={20} className="mx-auto" />}
                                onClick={() => {
                                    showDeleteActivityConfirm(record);
                                }}
                            />
                        </Tooltip>
                    </Space>
                </div>
            ),
        },
    ];

    const showDeleteActivityConfirm = (record: any) => {
        confirm({
            title: 'Xoá cơ sở',
            icon: <DeleteOutlined color="red" />,
            content: (
                <div>
                    Bạn có chắc chắn muốn xoá cở sở
                    <strong> {record?.name} </strong>
                    không?
                </div>
            ),
            okText: 'Đồng ý',
            cancelText: 'Hủy',
            onOk() {
                dispatch(postDeleteActivityStart(record?.id));
            },
            onCancel() {},
        });
    };

    return (
        <>
            <ActivitiesContainer>
                <Table columns={columns} dataSource={activityOfPlan} pagination={false} />
            </ActivitiesContainer>
            {isUpdateFacilityForm && (
                <ActivityForm
                    visible={isUpdateFacilityForm}
                    onCancel={() => {
                        setIsUpdateFacilityForm(false);
                    }}
                    onOk={() => {
                        setIsUpdateFacilityForm(false);
                    }}
                    isUpdate={true}
                />
            )}
        </>
    );
};

export default ActivityTable;
