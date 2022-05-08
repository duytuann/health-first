import { SearchOutlined } from '@ant-design/icons';
import { Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React from 'react';
import { SearchControlWrapper } from '../styled';

interface ISearchControlProps {}

const SearchControl: React.FunctionComponent<ISearchControlProps> = props => {
  const { Search } = Input;
  const [form] = Form.useForm();

  return (
    <SearchControlWrapper>
      <Form layout="vertical" form={form} initialValues={{}} scrollToFirstError>
        <Row gutter={8}>
          <Col span={4}>
            <Form.Item label="Trạng thái sản phẩm" name="TrangThai">
              <Select allowClear placeholder="Chọn trạng thái"></Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Người được giao" name="NVYT">
              <Select allowClear placeholder="Chọn NVYT"></Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Thời gian phát sóng" name="NgayTiepNhan">
              <DatePicker.RangePicker format="DD/MM/YYYY" placeholder={['Chọn ngày', 'Chọn ngày']} />
            </Form.Item>
          </Col>

          <Col style={{ top: 28 }} flex="1 1 auto" className="mr-2">
            <Search
              allowClear
              placeholder="Nhập từ khóa tìm kiếm "
              enterButton={<SearchOutlined style={{ fontSize: '24px' }} />}
            />
          </Col>
        </Row>
      </Form>
    </SearchControlWrapper>
  );
};

export default SearchControl;
