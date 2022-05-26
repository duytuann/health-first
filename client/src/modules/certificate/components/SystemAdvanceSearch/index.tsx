import { Col, Form, Input, Row, Select } from 'antd';
import Button from 'components/Button';
import { certificateState } from 'helper/consts';
import { changeSearchCondition } from 'modules/certificate/redux';
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
            certificateStateId: 0,
            facilityName: '',
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
                        <Col span={6}>
                            <Form.Item label="Trạng thái bằng chứng nhận" name="certificateStateId">
                                <Select style={{ width: '100%' }}>
                                    {certificateState.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item label="Tên cơ sở" name="name">
                                <Input placeholder="Tìm kiếm tên cơ sở" />
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
                            changeSearchCondition({
                                facilityName: value.name,
                                certificateStateId: value.certificateStateId === 0 ? null : value.certificateStateId,
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
