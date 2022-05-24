import { DeleteOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import { planState } from 'helper/consts';
import FacilitiesForm from 'modules/facilities/components/FacilitiesForm';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';
import { ActivitiesContainer, ViewDetail } from './styles';

interface IActivityTableProps {}

const ActivityTable: React.FC<IActivityTableProps> = () => {
    const history = useHistory();
    const [isUpdateFacilityForm, setIsUpdateFacilityForm] = useState(false);
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
            key: 'NguoiTao',
            width: 200,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.NguoiTao}</div>,
        },
        {
            title: 'Ngày tạo',
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
                                    showDeleteTopicConfirm(record);
                                }}
                            />
                        </Tooltip>
                    </Space>
                </div>
            ),
        },
    ];

    const showDeleteTopicConfirm = (record: any) => {
        confirm({
            title: 'Xoá cơ sở',
            icon: <DeleteOutlined color="red" />,
            content: (
                <div>
                    Bạn có chắc chắn muốn xoá cở sở
                    <strong> {record?.FacilityName} </strong>
                    không?
                </div>
            ),
            okText: 'Đồng ý',
            cancelText: 'Hủy',
            onOk() {
                // dispatch(fetchDeleteTopicStart(record.TopicID));
            },
            onCancel() {},
        });
    };

    return (
        <>
            <ActivitiesContainer>
                <Table columns={columns} dataSource={planList} pagination={false} />
            </ActivitiesContainer>
            {isUpdateFacilityForm && (
                <FacilitiesForm
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
