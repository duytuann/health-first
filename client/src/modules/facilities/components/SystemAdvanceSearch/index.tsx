import { Col, Form, Input, Row, Select, Space } from 'antd';
import Icon from 'components/Icon/Icon';
import {
  changeCurrentDistrictId,
  changeCurrentProvinceId,
  postGetListDistrictsByIdStart,
  postGetListWardsByIdStart,
} from 'modules/facilities/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { SystemAdvanceSearchWrapper } from './styles';

interface IProps {}

const SystemAdvanceSearch: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const {
    data: { provincesList, districtsListById, wardsById, currentProvinceId, currentDistrictId },
  } = useSelector((state: RootState) => state.facilities);
  const handleChange = (allValues: any) => {
    // dispatch(changeSearchCondition(allValues));
  };

  useEffect(() => {
    form.setFieldsValue({
      TypeOfBusiness: 'Tất cả',
      // Ward: 'Tất cả',
      // District: ''
      // Province: 'Tất cả',
      CertificateState: 'Tất cả',
      FacilityName: '',
    });
  }, []);

  useEffect(() => {
    dispatch(
      postGetListDistrictsByIdStart({
        id: currentProvinceId,
      })
    );
  }, [currentProvinceId]);

  useEffect(() => {
    dispatch(
      postGetListWardsByIdStart({
        id: currentDistrictId,
      })
    );
  }, [currentDistrictId]);

  const TypeOfBusinessPlaceHoder = ['Tất cả', 'Sản xuất thực phẩm', 'Dịch vụ ăn uống'];
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
          <Col span={4}>
            <Form.Item label="Loại hình kinh doanh" name="TypeOfBusiness">
              <Select style={{ width: '100%' }}>
                {TypeOfBusinessPlaceHoder.map((item: any, index: number) => (
                  <Select.Option key={index} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item label="Tỉnh/ Thành phố" name="Province">
              <Select
                style={{ width: '100%' }}
                onChange={(value: number) => {
                  dispatch(changeCurrentProvinceId(value));
                }}
              >
                {provincesList.map((item: any, index: number) => (
                  <Select.Option key={index} value={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Quận/ huyện" name="District">
              <Select
                style={{ width: '100%' }}
                onChange={(value: number) => {
                  dispatch(changeCurrentDistrictId(value));
                }}
              >
                {districtsListById.map((item: any, index: number) => (
                  <Select.Option key={index} value={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Phường/ xã" name="Ward">
              <Select style={{ width: '100%' }}>
                {wardsById.map((item: any, index: number) => (
                  <Select.Option key={index} value={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Trạng thái cơ sở" name="CertificateState">
              <Select style={{ width: '100%' }}>
                {CertificateStatePlaceHoder.map((item: any, index: number) => (
                  <Select.Option key={index} value={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Tên cơ sở" name="FacilityName">
              <Input placeholder="Tìm kiếm tên cơ sở" />
            </Form.Item>
          </Col>

          <Col span={1}>
            <Space className="action action-search">
              <Icon className="search" name="search" size={34} color="primary" />
            </Space>
          </Col>
        </Row>
      </Form>
    </SystemAdvanceSearchWrapper>
  );
};
export default SystemAdvanceSearch;
