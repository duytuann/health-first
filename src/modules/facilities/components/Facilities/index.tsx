import { DeleteOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import FacilitiesForm from 'modules/facilities/components/FacilitiesForm';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FacilitiesContainer } from './styles';

interface IWeeklyNewsProps {}

const FacilitiesTable: React.FC<IWeeklyNewsProps> = () => {
  const [isUpdateFacilityForm, setIsUpdateFacilityForm] = useState(false);
  const [record, setRecord] = useState<any>({});
  const dispatch = useDispatch();
  const APIPlaceHoder = [
    {
      FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc5',
      FacilityName: 'Bánh ngọt Tùng Béo',
      Ward: 'TP Thanh Hoá',
      Province: 'Thanh Hoá',
      TypeOfBusiness: 'Sản xuất thực phẩm',
      CertificateNumber: 'abcxyz123456',
      PhoneNumber: '0987656787',
      CertificateState: 'Quá thời hạn',
    },
    {
      FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc6',
      FacilityName: 'Long rau sạch',
      Ward: 'Huyện Yên Lãng',
      Province: 'Vĩnh Phúc',
      TypeOfBusiness: 'Sản xuất thực phẩm',
      CertificateNumber: 'xaxlpl1p2psd',
      PhoneNumber: '0658726780',
      CertificateState: 'Chưa được cấp',
    },
    {
      FacilityID: 'a94bbbc9-f3e4-4cfa-9853-c7487cad0bc7',
      FacilityName: 'Tuấn Coffee',
      Ward: 'TP Vinh',
      Province: 'Nghệ An',
      TypeOfBusiness: 'Dịch vụ ăn uống',
      CertificateNumber: 'xxxzzz123123',
      PhoneNumber: '0988999111',
      CertificateState: 'Trong thời hạn',
    },
  ];

  const columns = [
    {
      title: 'Tên cơ sở',
      key: 'FacilityName',
      width: 150,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.FacilityName}</div>,
    },
    {
      title: 'Loại hình kinh doanh',
      key: 'TypeOfBusiness',
      width: 150,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.TypeOfBusiness}</div>,
    },
    {
      title: 'Khu vực',
      key: 'Ward',
      width: 150,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.Ward}</div>,
    },
    {
      width: 150,
      title: 'Tỉnh',
      key: 'Province',
      render: (text: string, row: any, index: number) => <div className="text-center">{row.Province}</div>,
    },
    {
      // width: 200,
      title: 'Số giấy chứng nhận',
      key: 'CertificateNumber',
      render: (text: string, row: any, index: number) => <div className="text-center">{row.CertificateNumber}</div>,
    },
    {
      width: 200,
      title: 'Trạng thái giấy chứng nhận',
      key: 'CertificateNumber',
      render: (text: string, row: any, index: number) => <div className="text-center">{row.CertificateState}</div>,
    },
    {
      width: 150,
      title: 'Số điện thoại',
      key: 'PhoneNumber',
      render: (text: string, row: any, index: number) => <div className="text-center">{row.PhoneNumber}</div>,
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
                  setRecord(record);
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
