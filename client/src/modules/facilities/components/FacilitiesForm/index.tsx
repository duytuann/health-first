import { Form, Input, Select, Space, Spin } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { businessType, facilityState } from 'helper/consts';
import {
    changeCurrentDistrictId,
    changeCurrentProvinceId,
    postCreateFacilityStart,
    postGetListDistrictsByIdStart,
    postGetListWardsByIdStart,
    resetWardsByList,
} from 'modules/facilities/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ReduxStateType } from 'redux/types';
import { FormDetailWrapper } from './styles';

interface IAddTopicFormProps {
    visible?: boolean | undefined;
    onCancel: () => void;
    onOk: () => void;
    isUpdate: boolean;
}

const FacilitiesForm: React.FC<IAddTopicFormProps> = ({ visible, onOk, onCancel, isUpdate }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {
        data: { provincesList, districtsListById, wardsByListId, currentProvinceId, currentDistrictId },
        status,
    } = useSelector((state: RootState) => state.facilities);

    const handleSubmit = () => {
        form.validateFields().then(() => {
            const value = form.getFieldsValue(true);

            dispatch(postCreateFacilityStart(value));
            onOk();
        });
    };

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
        <Modal
            title={isUpdate ? 'Sửa cơ sở' : 'Thêm cơ sở'}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            width={1000}
            style={{ top: 20 }}
            bodyStyle={{
                maxHeight: 'calc(300vh - 10px)',
            }}
            footer={
                <div className="d-flex justify-content-end">
                    <Space>
                        <Button color="primary" key="back" onClick={onCancel}>
                            Đóng
                        </Button>
                        <Button
                            color="primary"
                            $fill
                            key="submit"
                            onClick={handleSubmit}
                            icon={<Icon name="save" size={18} className="mr-2" />}
                        >
                            Ghi lại
                        </Button>
                    </Space>
                </div>
            }
        >
            <Spin spinning={status === ReduxStateType.LOADING}>
                <FormDetailWrapper form={form} name="basic" layout="vertical" initialValues={{}}>
                    <Form.Item
                        label="Tên cơ sở"
                        name="FacilityName"
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: 'Tên cơ sở không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Nhập tên cơ sở" />
                    </Form.Item>
                    <Form.Item
                        label="Loại hình kinh doanh"
                        name="businessTypeId"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Loại hình kinh doanh không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Select placeholder="Chọn loại hình kinh doanh">
                            {businessType.map((item: any, index: number) =>
                                index !== 0 ? (
                                    <Select.Option key={index} value={item.id}>
                                        {item.name}
                                    </Select.Option>
                                ) : null
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Trạng thái cơ sở"
                        name="facilityStateId"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Trạng thái cơ sở không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Select placeholder="Chọn trạng thái cơ sở">
                            {facilityState.map((item: any, index: number) =>
                                index !== 0 ? (
                                    <Select.Option key={index} value={item.id}>
                                        {item.name}
                                    </Select.Option>
                                ) : null
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ"
                        name="address"
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: 'Địa chỉ của cơ sở không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Nhập địa chỉ của cơ sở" />
                    </Form.Item>
                    <Form.Item
                        label="Tỉnh/ Thành phố"
                        name="Province"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Tỉnh/ Thành phố không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Chọn Tỉnh/ Thành phố"
                            style={{ width: '100%' }}
                            onChange={(value: number) => {
                                dispatch(changeCurrentProvinceId(value));
                                dispatch(resetWardsByList());
                                form.setFieldsValue({
                                    District: null,
                                    wardId: null,
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
                    <Form.Item
                        label="Quận/ huyện"
                        name="District"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Quận/ huyện không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Select
                            disabled={districtsListById.length === 0}
                            placeholder="Chọn Quận/ huyện"
                            style={{ width: '100%' }}
                            onChange={(value: number) => {
                                dispatch(changeCurrentDistrictId(value));
                                form.setFieldsValue({
                                    wardId: null,
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
                    <Form.Item
                        label="Phường/ xã"
                        name="wardId"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Phường/ xã không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
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
                </FormDetailWrapper>
            </Spin>
        </Modal>
    );
};

export default FacilitiesForm;
