import { DeleteOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import FacilitiesForm from 'modules/facilities/components/FacilitiesForm';
import React, { useState } from 'react';
import { FacilitiesContainer } from '../../../plan/components/PlanTable/styles';

interface IWeeklyNewsProps {}

const FacilitiesTable: React.FC<IWeeklyNewsProps> = () => {
  const [isUpdateFacilityForm, setIsUpdateFacilityForm] = useState(false);
  const APIPlaceHoder = [
    {
      FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc5',
      FacilityName: 'Highlands Coffee',
      MaCS: 'FC001',
      Address: '545 P. Kim Mã, Ba Đình, Hà Nội',
      TypeOfBusiness: 'Dịch vụ ăn uống',
      FacilityStatus: 'Đang hoạt động',
    },
    {
      FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc6',
      FacilityName: 'The Coffee House',
      MaCS: 'FC002',
      Address: 'B3-01 Gardenia, Hàm Nghi, Nam Từ Liêm, Hà Nội',
      TypeOfBusiness: 'Dịch vụ ăn uống',
      FacilityStatus: 'Đã đóng cửa',
    },
    {
      FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc7',
      FacilityName: 'Haidilao',
      MaCS: 'FC003',
      Address: 'Vincom Center, Tầng 3, 119 Đ. Trần Duy Hưng, Trung Hoà, Cầu Giấy',
      TypeOfBusiness: 'Dịch vụ ăn uống',
      FacilityStatus: 'Đang hoạt động',
    },
    {
      FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc8',
      FacilityName: 'Công ty sản xuất thực phẩm Vissan',
      MaCS: 'FC004',
      Address: '420 Nơ Trang Long, P. 13, Quận Bình Thạnh, TP.HCM, Việt Nam',
      TypeOfBusiness: 'Sản xuất thực phẩm',
      FacilityStatus: 'Đang hoạt động',
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
      title: 'Tên cơ sở',
      key: 'FacilityName',
      width: 180,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.FacilityName}</div>,
    },
    {
      title: 'Mã cơ sở',
      key: 'MaCS',
      width: 120,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.MaCS}</div>,
    },
    {
      title: 'Loại hình kinh doanh',
      key: 'TypeOfBusiness',
      width: 180,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.TypeOfBusiness}</div>,
    },
    {
      title: 'Địa chỉ',
      key: 'Address',
      render: (text: string, row: any, index: number) => <div className="text-center">{row.Address}</div>,
    },
    {
      width: 150,
      title: 'Trạng thái cơ sở',
      key: 'CertificateStatus',
      render: (text: string, row: any, index: number) => <div className="text-center">{row.FacilityStatus}</div>,
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

export default FacilitiesTable;
