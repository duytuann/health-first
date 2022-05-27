import { Col, Form, Row, Select } from 'antd';
import Button from 'components/Button';
import { sampleResult, sampleState } from 'helper/consts';
import { changeSearchSample } from 'modules/plan/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Container, SystemAdvanceSearchWrapper } from './styles';

interface IProps {}

const SampleSearch: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {
        data: { foodList, inspectionUnit },
    } = useSelector((state: RootState) => state.plan);

    const handleChange = (allValues: any) => {
        // dispatch(changeSearchCondition(allValues));
    };

    useEffect(() => {
        form.setFieldsValue({});
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
                            <Form.Item label="Trạng thái" name="sampleStateId">
                                <Select placeholder="Tìm kiếm trạng thái" style={{ width: '100%' }}>
                                    {sampleState.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="Kết quả" name="sampleResultId">
                                <Select placeholder="Tìm kiếm kết quả" style={{ width: '100%' }}>
                                    {sampleResult.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="Đồ ăn" name="foodId">
                                <Select placeholder="Tìm kiếm đồ ăn" style={{ width: '100%' }}>
                                    {foodList.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="Đơn vị kiểm định" name="inspectionUnitId">
                                <Select placeholder="Tìm kiếm đơn vị" style={{ width: '100%' }}>
                                    {inspectionUnit.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
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
                            changeSearchSample({
                                sampleStateId:
                                    !value.sampleStateId || value.sampleStateId === 0 ? null : value.sampleStateId,
                                inspectionUnitId: value.inspectionUnitId ? value.inspectionUnitId : null,
                                sampleResultId:
                                    !value.sampleResultId || value.sampleResultId === 0 ? null : value.sampleResultId,
                                foodId: value.foodId ? value.foodId : null,
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
export default SampleSearch;
