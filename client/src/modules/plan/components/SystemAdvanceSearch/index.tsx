import { Col, DatePicker, Form, Input, Row, Select, Space } from 'antd';
import Icon from 'components/Icon/Icon';
import React, { useEffect } from 'react';
import { SystemAdvanceSearchWrapper } from './styles';

interface IProps {}

const SystemAdvanceSearch: React.FC<IProps> = () => {
    const [form] = Form.useForm();

    const handleChange = (allValues: any) => {
        // dispatch(changeSearchCondition(allValues));
    };

    useEffect(() => {
        form.setFieldsValue({
            NguoiTao: 0,
            TrangThai: 0,
            TenKeHoach: '',
        });
    }, []);

    const StatusPlaceHoder = [
        {
            label: 'Tất cả',
            value: 0,
        },
        {
            label: 'Đang diễn ra',
            value: 1,
        },
        {
            label: 'Đã đóng',
            value: 2,
        },
    ];

    const UserCreate = [
        {
            label: 'Tất cả',
            value: 0,
        },
        {
            label: 'Thanh Tùng',
            value: 1,
        },
        {
            label: 'Ngọc Long',
            value: 2,
        },
        {
            label: 'Duy Tuấn',
            value: 3,
        },
    ];

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
                        <Form.Item label="Người tạo" name="NguoiTao">
                            <Select style={{ width: '100%' }}>
                                {UserCreate.map((item: any, index: number) => (
                                    <Select.Option key={index} value={item.value}>
                                        {item.label}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Ngày tạo" name="NgayTao">
                            <DatePicker placeholder="Chọn ngày tạo" onChange={() => {}} />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Trạng thái" name="TrangThai">
                            <Select style={{ width: '100%' }}>
                                {StatusPlaceHoder.map((item: any, index: number) => (
                                    <Select.Option key={index} value={item.value}>
                                        {item.label}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Tên kế hoạch" name="TenKeHoach">
                            <Input />
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
