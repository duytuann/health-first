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
            TypeOfBusiness: 'Tất cả',
            Ward: 'Tất cả',
            Province: 'TP Hồ Chí Minh',
            CertificateState: 'Tất cả',
            FacilityName: '',
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
                        <Form.Item label="Khu vực" name="Ward">
                            <Select style={{ width: '100%' }}>
                                {WardPlaceHoder.map((item: any, index: number) => (
                                    <Select.Option key={index} value={item}>
                                        {item}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Tỉnh/ Thành phố" name="Province">
                            <Select style={{ width: '100%' }}>
                                {ProvincePlaceHoder.map((item: any, index: number) => (
                                    <Select.Option key={index} value={item}>
                                        {item}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Trạng thái bằng chứng nhận" name="CertificateState">
                            <Select style={{ width: '100%' }}>
                                {CertificateStatePlaceHoder.map((item: any, index: number) => (
                                    <Select.Option key={index} value={item}>
                                        {item}
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
