import { Col, Form, Input, Row, Select } from 'antd';
import Button from 'components/Button';
import { planState } from 'helper/consts';
import { changeSearchPlan } from 'modules/plan/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Container, SystemAdvanceSearchWrapper } from './styles';

interface IProps {}

const PlanSearch: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {
        data: { searchPlan },
    } = useSelector((state: RootState) => state.plan);

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
                            <Form.Item label="Trạng thái" name="planStateId">
                                <Select placeholder="Tìm kiếm trạng thái" style={{ width: '100%' }}>
                                    {planState.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="Tên kế hoạch" name="planName">
                                <Input placeholder="Tìm kiếm tên kế hoạch" />
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
                            changeSearchPlan({
                                planName: value.planName ? value.planName : null,
                                planStateId: value.planStateId ? value.planStateId : null,
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
export default PlanSearch;
