import { DeleteOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import { planState } from 'helper/consts';
import PlanForm from 'modules/plan/components/PlanForm';
import React, { useState } from 'react';
import { postDeletePlanStart, changeCurrentDetailPlanById } from 'modules/plan/redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';
import { FacilitiesContainer, ViewDetail } from './styles';

interface IPlanTableProps {}

const PlanTable: React.FC<IPlanTableProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isUpdatePlanForm, setIsUpdatePlanForm] = useState(false);
    const {
        data: { planList },
    } = useSelector((state: RootState) => state.plan);

    const columns = [
        {
            title: 'STT',
            key: 'index',
            width: 10,
            render: (text: string, row: any, index: number) => <div className="text-center">{index + 1}</div>,
        },
        {
            title: 'Người tạo',
            key: 'createdUser',
            width: 200,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.createdUser}</div>,
        },
        {
            title: 'Ngày bắt đầu',
            key: 'publishedDate',
            width: 150,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.publishedDate}</div>,
        },
        {
            title: 'Tên kế hoạch',
            key: 'name',
            render: (text: string, row: any, index: number) => <div className="text-center">{row.name}</div>,
        },

        {
            title: 'Trạng thái',
            key: 'Status',
            width: 180,
            render: (text: string, row: any, index: number) => (
                <div className="text-center">{planState.find(ele => ele.id === row.planStateId)?.name}</div>
            ),
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
                                    dispatch(changeCurrentDetailPlanById(record));
                                    setIsUpdatePlanForm(true);
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="Xoá cơ sở" color="#2a2a2a">
                            <LinkButton
                                type="link"
                                size="small"
                                icon={<Icon name="delete" color="red600" size={20} className="mx-auto" />}
                                onClick={() => {
                                    showDeleteTopicConfirm(record);
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
                        history.push(`/plan/${row.id}`);
                    }}
                >
                    Xem chi tiết
                </ViewDetail>
            ),
        },
    ];

    const showDeleteTopicConfirm = (record: any) => {
        confirm({
            title: 'Xoá cơ sở',
            icon: <DeleteOutlined color="red" />,
            content: (
                <div>
                    Bạn có chắc chắn muốn xoá kế hoạch
                    <strong> {record?.name} </strong>
                    không?
                </div>
            ),
            okText: 'Đồng ý',
            cancelText: 'Hủy',
            onOk() {
                dispatch(
                    postDeletePlanStart({
                        id: record.id,
                    })
                );
            },
            onCancel() {},
        });
    };

    return (
        <>
            <FacilitiesContainer>
                <Table columns={columns} dataSource={planList} pagination={false} />
            </FacilitiesContainer>
            {isUpdatePlanForm && (
                <PlanForm
                    visible={isUpdatePlanForm}
                    onCancel={() => {
                        setIsUpdatePlanForm(false);
                    }}
                    onOk={() => {
                        setIsUpdatePlanForm(false);
                    }}
                    isUpdate={true}
                />
            )}
        </>
    );
};

export default PlanTable;
