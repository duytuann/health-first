import { Collapse, Space, Tooltip } from 'antd';
import { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import SystemAdvanceSearchWrapper from 'modules/certificate/components/SystemAdvanceSearch';
import React from 'react';
import { CertificateContainer } from './styles';

const Certificate: React.FC = () => {
  const columns = [
    {
      title: 'Tên giấy chứng nhận',
      key: 'TenGiayChungNhan',
      width: 200,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.TenGiayChungNhan}</div>,
    },
    {
      title: 'Ngày phát hành',
      key: 'NgayPhatHanh',
      width: 150,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.NgayPhatHanh}</div>,
    },
    {
      title: 'Ngày Update',
      key: 'NgayUpdate',
      width: 150,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.NgayUpdate}</div>,
    },
    {
      width: 150,
      title: 'Thao tác',
      key: 'action',
      render: (value: string, record: any) => (
        <div className="text-center">
          <Space size="small">
            <Tooltip title="Cấp mới" color="#2a2a2a">
              <LinkButton
                type="link"
                size="small"
                icon={<Icon name="redo" color="blue" size={20} className="mx-auto" />}
                onClick={() => {
                  // setRecord(record);
                  // setIsUpdateFacilityForm(true);
                }}
              />
            </Tooltip>
            <Tooltip title="Thu hồi" color="#2a2a2a">
              <LinkButton
                type="link"
                size="small"
                icon={<Icon name="delete" color="red600" size={20} className="mx-auto" />}
                onClick={() => {
                  // showDeleteTopicConfirm(record);
                }}
              />
            </Tooltip>
          </Space>
        </div>
      ),
    },
  ];

  const fakeData1 = [
    {
      TenGiayChungNhan: 'Chứng nhận đồ ăn sạch',
      NgayPhatHanh: '1/1/2021',
      NgayUpdate: '5/6/2022',
    },
    {
      TenGiayChungNhan: 'Chứng nhận nước uống bẩn vl',
      NgayPhatHanh: '4/1/2021',
      NgayUpdate: '2/1/2022',
    },
  ];

  return (
    <CertificateContainer>
      <div style={{ color: '#2260bd', padding: '10px 0', fontSize: '22px', fontWeight: '600' }}>
        Danh sách chứng chỉ các cơ sở mà bạn quản lý
      </div>
      <SystemAdvanceSearchWrapper />
      <div style={{ padding: '16px' }}>
        <Collapse defaultActiveKey={['1']} onChange={() => {}}>
          <Collapse.Panel header="Cơ sở bánh ngọt Tùng Béo" key="1">
            <Table columns={columns} dataSource={fakeData1} pagination={false} />
          </Collapse.Panel>
        </Collapse>
        <Collapse defaultActiveKey={['1']} onChange={() => {}}>
          <Collapse.Panel header="Cơ sở bánh ngọt Long xạolol" key="1">
            <Table columns={columns} dataSource={fakeData1} pagination={false} />
          </Collapse.Panel>
        </Collapse>
      </div>
    </CertificateContainer>
  );
};

export default Certificate;
