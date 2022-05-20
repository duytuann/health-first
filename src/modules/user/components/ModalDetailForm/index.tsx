import { Space, Table } from 'antd';
import Button from 'components/Button';
import Modal from 'components/Modal';
import React from 'react';
import { Container } from './styles';

interface IAddTopicFormProps {
  visible?: boolean | undefined;
  onCancel: () => void;
  onOk: () => void;
  isUpdate: boolean;
}

const ModalDetailForm: React.FC<IAddTopicFormProps> = ({ visible, onOk, onCancel, isUpdate }) => {
  const columns = [
    {
      title: 'STT',
      key: 'index',
      width: 10,
      render: (text: string, row: any, index: number) => <div className="text-center">{index + 1}</div>,
    },
    {
      title: 'Tỉnh/ Thành phố',
      key: 'UserName',
      width: 200,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.UserName}</div>,
    },
    {
      title: 'Quận huyện',
      key: 'DisplayName',
      width: 200,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.DisplayName}</div>,
    },
    {
      title: 'Phường xã',
      key: 'UserRole',
      width: 150,
      render: (text: string, row: any, index: number) => <div className="text-center">{row.UserRole}</div>,
    },
  ];

  const userList = [
    {
      UserName: 'Thành phố Hà Nội',
      DisplayName: 'Quận Ba Đình',
      UserRole: 'Phường Phúc Xá',
    },
    {
      UserName: 'Thành phố Hà Nội',
      DisplayName: 'Quận Ba Đình',
      UserRole: 'Phường Liễu Giai',
    },
    {
      UserName: 'Tỉnh Thanh Hóa',
      DisplayName: 'Thành phố Thanh Hóa',
      UserRole: 'Phường Hàm Rồng',
    },
  ];
  return (
    <Modal
      title="Chi tiết các cơ sở đang quản lý"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      width={1000}
      style={{ top: 20 }}
      bodyStyle={{
        maxHeight: 'calc(300vh - 10px)',
      }}
      footer={
        <div className="d-flex justify-content-end">
          <Space>
            <Button color="primary" $fill key="submit">
              Đóng
            </Button>
          </Space>
        </div>
      }
    >
      <Container>
        <Table pagination={false} columns={columns} dataSource={userList} />
      </Container>
    </Modal>
  );
};

export default ModalDetailForm;
