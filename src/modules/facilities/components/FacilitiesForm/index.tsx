import { Form, Input, Select, Space } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FormDetailWrapper } from './styles';

interface IAddTopicFormProps {
  visible?: boolean | undefined;
  onCancel: () => void;
  onOk: () => void;
  isUpdate: boolean;
}

const FacilitiesForm: React.FC<IAddTopicFormProps> = ({ visible, onOk, onCancel, isUpdate }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then(() => {
      const value = form.getFieldsValue(true);

      // const body: TopicInsertParams = {
      //   ...value,
      //   CategoryID: 2,
      // };

      //   dispatch(postInsertTopicStart(body));
      onOk();
    });
  };

  const TypeOfBusinessPlaceHoder = ['Tất cả', 'Sản xuất thực phẩm', 'Dịch vụ ăn uống'];
  const WardPlaceHoder = ['Tất cả', 'Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7'];
  const ProvincePlaceHoder = ['TP Hồ Chí Minh', 'Hà Nội', 'Nghệ An', 'Vĩnh Phúc'];
  // const CertificateStatePlaceHoder = ['Tất cả', 'Trong thời hạn', 'Quá thời hạn', 'Chưa được cấp'];

  return (
    <Modal
      title={isUpdate ? 'Sửa cơ sở' : 'Thêm cơ sở'}
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
      <FormDetailWrapper form={form} name="basic" layout="vertical" initialValues={{}}>
        <Form.Item
          label="Tên cơ sở"
          name="FacilityName"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Tên cơ sở không được để trống',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Nhập tên cơ sở" />
        </Form.Item>
        <Form.Item
          label="Loại hình kinh doanh"
          name="TypeOfBusiness"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Loại hình kinh doanh không được để trống',
              whitespace: true,
            },
          ]}
        >
          <Select placeholder="Chọn loại hình kinh doanh">
            {TypeOfBusinessPlaceHoder.map((item: any, index: number) =>
              index !== 0 ? <Select.Option value={item}>{item}</Select.Option> : null
            )}
          </Select>
        </Form.Item>
        <Form.Item
          label="Tỉnh/Thành phố"
          name="Province"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Tỉnh/Thành phố không được để trống',
              whitespace: true,
            },
          ]}
        >
          <Select placeholder="Chọn Tỉnh/Thành phố">
            {ProvincePlaceHoder.map((item: any, index: number) =>
              index !== 0 ? <Select.Option value={item}>{item}</Select.Option> : null
            )}
          </Select>
        </Form.Item>
        <Form.Item
          label="Khu vực"
          name="Ward"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Khu vực không được để trống',
              whitespace: true,
            },
          ]}
        >
          <Select placeholder="Chọn Khu vực thuộc Tỉnh/thành phố">
            {WardPlaceHoder.map((item: any, index: number) =>
              index !== 0 ? <Select.Option value={item}>{item}</Select.Option> : null
            )}
          </Select>
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="PhoneNumber"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Số điện thoạ không được để trống',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>
      </FormDetailWrapper>
    </Modal>
  );
};

export default FacilitiesForm;
