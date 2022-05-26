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

interface ISampleTableProps {}

const SampleTable: React.FC<ISampleTableProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isUpdateFacilityForm, setIsUpdateFacilityForm] = useState(false);
    const {
        data: { activityOfPlan, currentPlanId, sampleList },
    } = useSelector((state: RootState) => state.plan);

    const columns = [
        {
            title: 'STT',
            key: 'index',
            width: 10,
            render: (text: string, row: any, index: number) => <div className="text-center">{index + 1}</div>,
        },
        {
            title: 'Mã mẫu giám định',
            key: 'sampleCode',
            width: 180,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.sampleCode}</div>,
        },
        {
            title: 'Trạng thái',
            key: 'sampleStateId',
            width: 180,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.sampleStateId}</div>,
        },
        {
            title: 'Kết quả',
            key: 'sampleResult',
            width: 170,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.sampleResult}</div>,
        },
        {
            title: 'Thực phẩm cần giám định',
            key: 'foodId',
            width: 170,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.foodId}</div>,
        },
        {
            title: 'Đơn vị kiểm định',
            key: 'inspectionUnitId',
            width: 100,
            render: (text: string, row: any, index: number) => (
                <div className="text-center">{row.inspectionUnitId}</div>
            ),
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
                <Table columns={columns} dataSource={sampleList} pagination={false} />
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

export default SampleTable;
