import { DeleteOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import FacilitiesForm from 'modules/facilities/components/FacilitiesForm';
import React, { useState } from 'react';
import { FacilitiesContainer, ViewDetail } from './styles';

interface IPlanTableProps {}

const PlanTable: React.FC<IPlanTableProps> = () => {
    const [isUpdateFacilityForm, setIsUpdateFacilityForm] = useState(false);
    const APIPlaceHoder = [
        {
            FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc5',
            NguoiTao: 'Trần Thanh Tùng',
            NgayTao: '01/02/2022',
            Status: 'Đang diễn ra',
            TenKeHoach: 'Dịch vụ ăn uống',
        },
        {
            FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc6',
            NguoiTao: 'Đỗ Duy Tuấn',
            NgayTao: '13/04/2022',
            Status: 'Đang diễn ra',
            TenKeHoach: 'Dịch vụ ăn uống',
        },
        {
            FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc7',
            NguoiTao: 'Đỗ Duy Tuấn',
            NgayTao: '11/05/2022',
            Status: 'Đã đóng',
            TenKeHoach: 'Dịch vụ ăn uống',
        },
        {
            FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc8',
            NguoiTao: 'Đỗ Ngọc Long',
            NgayTao: '21/02/2022',
            Status: 'Đang diễn ra',
            TenKeHoach: 'Sản xuất thực phẩm',
        },
    ];

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
            key: 'NgayTao',
            width: 150,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.NgayTao}</div>,
        },
        {
            title: 'Tên kế hoạch',
            key: 'TenKeHoach',
            render: (text: string, row: any, index: number) => <div className="text-center">{row.TenKeHoach}</div>,
        },

        {
            title: 'Trạng thái',
            key: 'Status',
            width: 180,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.Status}</div>,
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
        {
            title: 'Chi tiết',
            key: 'PlanDetail',
            width: 150,
            render: (text: string, row: any, index: number) => <ViewDetail>Xem chi tiết</ViewDetail>,
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
                <Table columns={columns} dataSource={APIPlaceHoder} pagination={false} />
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

export default PlanTable;
