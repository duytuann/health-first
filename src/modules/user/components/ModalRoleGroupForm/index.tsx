import React from 'react';
import { Checkbox, Form, Input, Radio, RadioChangeEvent, Space, Spin } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { FormDetailWrapper, TabRoleWrapper } from './styles';

interface IModalRoleGroupFormProps {
  visible?: boolean | undefined;
  onCancel: () => void;
  onOk: () => void;
}

const ModalRoleGroupForm: React.FC<IModalRoleGroupFormProps> = ({ visible, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const handleSubmit = () => {};

  return (
    <Modal
      title={'Thêm nhóm quyền'}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      width={1200}
      style={{ top: 20 }}
      bodyStyle={{
        maxHeight: 'calc(300vh - 10px)',
      }}
      footer={
        <div className="d-flex justify-content-end">
          <Space>
            <Button color="primary" key="back" onClick={onCancel}>
              Đóng
            </Button>
            <Button
              color="primary"
              $fill
              key="submit"
              onClick={handleSubmit}
              icon={<Icon name="save" size={18} className="mr-2" />}
            >
              Ghi lại
            </Button>
          </Space>
        </div>
      }
    >
      <FormDetailWrapper form={form} name="basic" layout="vertical">
        <Form.Item
          label="Tên nhóm quyền"
          name="RoleGroupName"
          rules={[
            {
              required: true,
              message: 'Tên nhóm quyền không được để trống',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Nhập tên nhóm quyền" />
        </Form.Item>
        <Form.Item label="Loại nhóm quyền" name="RoleGroupType">
          <Radio.Group></Radio.Group>
        </Form.Item>
      </FormDetailWrapper>
    </Modal>
  );
};

export default ModalRoleGroupForm;
