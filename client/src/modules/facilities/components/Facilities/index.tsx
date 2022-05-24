import { DeleteOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import { LinkButton } from 'components/Button';
import { useSelector } from 'react-redux';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import { RootState } from 'redux/store';
import FacilitiesForm from 'modules/facilities/components/FacilitiesForm';
import React, { useState } from 'react';
import { FacilitiesContainer } from '../../../plan/components/PlanTable/styles';

interface IWeeklyNewsProps {}

const FacilitiesTable: React.FC<IWeeklyNewsProps> = () => {
    const [isUpdateFacilityForm, setIsUpdateFacilityForm] = useState(false);
    const {
        data: { facilitiesList },
    } = useSelector((state: RootState) => state.facilities);

    const columns = [
        {
            title: 'STT',
            key: 'index',
            width: 10,
            render: (text: string, row: any, index: number) => <div className="text-center">{index + 1}</div>,
        },
        {
            title: 'Tên cơ sở',
            key: 'name',
            width: 180,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.name}</div>,
        },
        {
            title: 'Mã cơ sở',
            key: 'facilityCode',
            width: 120,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.facilityCode}</div>,
        },
        {
            title: 'Loại hình kinh doanh',
            key: 'businessType',
            width: 180,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.businessType}</div>,
        },
        {
            title: 'Địa chỉ',
            key: 'Address',
            render: (text: string, row: any, index: number) => <div className="text-center">{row.Address}</div>,
        },
        {
            width: 150,
            title: 'Trạng thái cơ sở',
            key: 'facilityState',
            render: (text: string, row: any, index: number) => (
                <div className="text-center">
                    {row.facilityState.trim() === 'inative' ? 'Dừng hoạt động' : 'Đang hoạt động'}
                </div>
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
            <FacilitiesContainer>
                <Table columns={columns} dataSource={facilitiesList} pagination={false} />
            </FacilitiesContainer>
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

export default FacilitiesTable;
