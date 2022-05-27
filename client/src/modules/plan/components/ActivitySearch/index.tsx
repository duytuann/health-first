import { Col, Form, Input, Row, Select } from 'antd';
import Button from 'components/Button';
import { activityResult, activityState } from 'helper/consts';
import { changeSearchActivity } from 'modules/plan/redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, SystemAdvanceSearchWrapper } from './styles';

interface IProps {}

const ActivitySearch: React.FC<IProps> = () => {
    const dispatch = useDispatch();
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
                        <Col span={4}>
                            <Form.Item label="Trạng thái" name="activityStateId">
                                <Select placeholder="Tìm kiếm trạng thái" style={{ width: '100%' }}>
                                    {activityState.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="Kết quả" name="activityResultId">
                                <Select placeholder="Tìm kiếm kết quả" style={{ width: '100%' }}>
                                    {activityResult.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="Tên hoạt động" name="activityName">
                                <Input placeholder="Tìm kiếm tên hoạt động" />
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
                            changeSearchActivity({
                                activityName: value.activityName ? value.activityName : null,
                                activityStateId:
                                    !value.activityStateId || value.activityStateId === 0 ? null : value.planStateId,
                                activityResultId:
                                    !value.activityResultId || value.activityResultId === 0
                                        ? null
                                        : value.activityResultId,
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
export default ActivitySearch;
