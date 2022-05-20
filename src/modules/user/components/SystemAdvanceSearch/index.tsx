import { Col, Form, Input, Row, Select, Space } from 'antd';
import Icon from 'components/Icon/Icon';
import React, { useEffect } from 'react';
import { SystemAdvanceSearchWrapper } from './styles';

interface IProps {}

const SystemAdvanceSearch: React.FC<IProps> = () => {
  const [form] = Form.useForm();

  const handleChange = (allValues: any) => {
    // dispatch
  };

  useEffect(() => {
    form.setFieldsValue({
      VaiTro: 'Tất cả',
      TrangThai: 'Tất cả',
      SoDienThoai: '',
      HoVaTen: '',
    });
  }, []);

  const TypeOfBusinessPlaceHoder = ['Tất cả', 'Sản xuất thực phẩm', 'Dịch vụ ăn uống'];
  const WardPlaceHoder = ['Tất cả', 'Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7'];
  const ProvincePlaceHoder = ['TP Hồ Chí Minh', 'Hà Nội', 'Nghệ An', 'Vĩnh Phúc'];
  const CertificateStatePlaceHoder = ['Tất cả', 'Trong thời hạn', 'Quá thời hạn', 'Chưa được cấp'];

  return (
    <SystemAdvanceSearchWrapper>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        onValuesChange={(changedValues, allValues) => handleChange(allValues)}
      >
        <Row justify="start" gutter={16}>
          <Col span={5}>
            <Form.Item label="Vai trò" name="VaiTro">
              <Select style={{ width: '100%' }}>
                {TypeOfBusinessPlaceHoder.map((item: any, index: number) => (
                  <Select.Option key={index} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="Trạng thái" name="TrangThai">
              <Select style={{ width: '100%' }}>
                {WardPlaceHoder.map((item: any, index: number) => (
                  <Select.Option key={index} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="Họ tên" name="HoVaTen">
              <Input />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="Số điện thoại" name="SoDienThoai">
              <Input />
            </Form.Item>
          </Col>

          <Col span={1}>
            <Space className="action action-search">
              <Icon className="search" name="search" size={34} color="primary" />
            </Space>
            {/* <Space className="action action-filter">
            <Icon className="filter" name="filter_alt" size={34} color="primary" />
          </Space> */}
          </Col>
        </Row>
      </Form>
    </SystemAdvanceSearchWrapper>
  );
};
export default SystemAdvanceSearch;
