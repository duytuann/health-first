import { Col, Form, Input, Row, Select } from 'antd';
import Button from 'components/Button';
import { roleList } from 'helper/consts';
import { changeSearchUser } from 'modules/user/redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, SystemAdvanceSearchWrapper } from './styles';

interface IProps {}

const SystemAdvanceSearch: React.FC<IProps> = () => {
    const dispatch = useDispatch();
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

    return (
        <Container>
            <SystemAdvanceSearchWrapper>
                <Form
                    form={form}
                    name="basic"
                    layout="vertical"
                    onValuesChange={(changedValues, allValues) => handleChange(allValues)}
                >
                    <Row justify="start" gutter={16}>
                        <Col span={5}>
                            <Form.Item label="Nhóm quyền" name="userRoleId">
                                <Select placeholder="Tìm kiếm theo nhóm quyền" style={{ width: '100%' }}>
                                    {roleList.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item label="Tên tài khoản" name="username">
                                <Input placeholder="Tìm kiếm tên tài khoản" />
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item label="Số điện thoại" name="phoneNumber">
                                <Input placeholder="Tìm kiếm số điện thoại" />
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item label="Email" name="email">
                                <Input placeholder="Tìm kiếm email" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </SystemAdvanceSearchWrapper>
            <div style={{ width: '100px' }}>
                <Button
                    style={{ margin: '10px' }}
                    color="primary"
                    $fill
                    onClick={() => {
                        const value = form.getFieldsValue();
                        dispatch(
                            changeSearchUser({
                                username: value.username ? value.username : null,
                                phoneNumber: value.phoneNumber ? value.phoneNumber : null,
                                email: value.email ? value.email : null,
                                userRoleId: value.userRoleId ? value.userRoleId : null,
                            })
                        );
                    }}
                >
                    Tìm kiếm
                </Button>
            </div>
        </Container>
    );
};
export default SystemAdvanceSearch;
