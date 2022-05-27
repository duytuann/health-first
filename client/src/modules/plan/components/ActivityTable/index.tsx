import { DeleteOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import { LinkButton } from 'components/Button';
import { useHistory } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import ActivityForm from 'modules/plan/components/ActivityForm';
import { changeCurrentActivityId, postDeleteActivityStart, changeCurrentFacilityId } from 'modules/plan/redux';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ActivitiesContainer, ViewDetail } from './styles';

interface IActivityTableProps {}

const ActivityTable: React.FC<IActivityTableProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isUpdateFacilityForm, setIsUpdateFacilityForm] = useState(false);
    const {
        data: { activityOfPlan, currentPlanId },
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
            width: 180,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.name}</div>,
        },
        {
            title: 'Ngày bắt đầu',
            key: 'startDate',
            width: 130,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.startDate}</div>,
        },
        {
            title: 'Ngày kết thúc',
            key: 'endDate',
            width: 130,
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
            width: 170,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.activityState}</div>,
        },
        {
            title: 'Kết quả hoạt động',
            key: 'activityResult',
            width: 170,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.activityResult}</div>,
        },
        {
            title: 'Người tạo',
            key: 'createdUser',
            width: 100,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.createdUser}</div>,
        },
        {
            width: 70,
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
        {
            title: 'Chi tiết',
            key: 'PlanDetail',
            width: 150,
            render: (text: string, row: any, index: number) => (
                <ViewDetail
                    onClick={() => {
                        dispatch(changeCurrentActivityId(row.id));
                        history.push(`/plan/${currentPlanId}/activity/${row.id}`);
                    }}
                >
                    Xem chi tiết
                </ViewDetail>
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
                dispatch(
                    postDeleteActivityStart({
                        id: record?.id,
                    })
                );
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
