import { Col, Form, Input, Row, Select, Space, Spin } from 'antd';
import Icon from 'components/Icon/Icon';
import { businessType, facilityState } from 'helper/consts';
import {
    changeCurrentDistrictId,
    changeCurrentProvinceId,
    postGetListDistrictsByIdStart,
    postGetListWardsByIdStart,
    resetWardsByList
} from 'modules/facilities/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ReduxStateType } from 'redux/types';
import { SystemAdvanceSearchWrapper } from './styles';

interface IProps {}

const FilterActivity: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {
        data: { provincesList, districtsListById, wardsByListId, currentProvinceId, currentDistrictId },
        status,
    } = useSelector((state: RootState) => state.facilities);
    const handleChange = (allValues: any) => {
        // CreateParams
        // dispatch(changeSearchCondition(allValues));
    };

    useEffect(() => {
        form.setFieldsValue({
            businessTypeId: 0,
            facilityStateId: 0,
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

    return (
        <Spin spinning={status === ReduxStateType.LOADING}>
            <SystemAdvanceSearchWrapper>
                <Form
                    form={form}
                    name="basic"
                    layout="vertical"
                    onValuesChange={(changedValues, allValues) => handleChange(allValues)}
                >
                    <Row justify="start" gutter={16}>
                        <Col span={4}>
                            <Form.Item label="Lo???i h??nh kinh doanh" name="facilityStateId">
                                <Select style={{ width: '100%' }}>
                                    {businessType.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={4}>
                            <Form.Item label="T???nh/ Th??nh ph???" name="province">
                                <Select
                                    placeholder="Ch???n T???nh/ Th??nh ph???"
                                    style={{ width: '100%' }}
                                    onChange={(value: number) => {
                                        dispatch(changeCurrentProvinceId(value));
                                        dispatch(resetWardsByList());
                                        form.setFieldsValue({
                                            District: null,
                                            Ward: null,
                                        });
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
                            <Form.Item label="Qu???n/ huy???n" name="district">
                                <Select
                                    disabled={districtsListById.length === 0}
                                    placeholder="Ch???n Qu???n/ huy???n"
                                    style={{ width: '100%' }}
                                    onChange={(value: number) => {
                                        dispatch(changeCurrentDistrictId(value));
                                        form.setFieldsValue({
                                            Ward: null,
                                        });
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
                            <Form.Item label="Ph?????ng/ x??" name="ward">
                                <Select
                                    disabled={wardsByListId.length === 0}
                                    placeholder="Ch???n Ph?????ng/ x??"
                                    style={{ width: '100%' }}
                                >
                                    {wardsByListId.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item label="Tr???ng th??i c?? s???" name="facilityStateId">
                                <Select style={{ width: '100%' }}>
                                    {facilityState.map((item: any, index: number) => (
                                        <Select.Option key={index} value={item.id}>
                                            {item.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="T??n c?? s???" name="name">
                                <Input placeholder="T??m ki???m t??n c?? s???" />
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
        </Spin>
    );
};
export default FilterActivity;
