import { Col, Form, Input, Row, Select } from 'antd';
import Button from 'components/Button';
import { businessType, facilityState } from 'helper/consts';
import {
    changeCurrentDistrictId,
    changeCurrentProvinceId,
    postGetListDistrictsByIdStart,
    postGetListWardsByIdStart,
    resetWardsByList,
    changeSearchCondition,
} from 'modules/facilities/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Container, SystemAdvanceSearchWrapper } from './styles';

interface IProps {}

const SystemAdvanceSearch: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {
        data: { provincesList, districtsListById, wardsByListId, currentProvinceId, currentDistrictId },
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
                            <Form.Item label="Loại hình kinh doanh" name="businessTypeId">
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
                            <Form.Item label="Tỉnh/ Thành phố" name="province">
                                <Select
                                    placeholder="Chọn Tỉnh/ Thành phố"
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
                            <Form.Item label="Quận/ huyện" name="district">
                                <Select
                                    disabled={districtsListById.length === 0}
                                    placeholder="Chọn Quận/ huyện"
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
                            <Form.Item label="Phường/ xã" name="ward">
                                <Select
                                    disabled={wardsByListId.length === 0}
                                    placeholder="Chọn Phường/ xã"
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
                            <Form.Item label="Trạng thái cơ sở" name="facilityStateId">
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
                                businessTypeId: value.businessTypeId === 0 ? null : value.businessTypeId,
                                wardId: value.ward,
                                provinceId: value.province,
                                districtId: value.district,
                                facilityStateId: value.facilityStateId === 0 ? null : value.facilityStateId,
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
