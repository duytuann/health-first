import { Form, Input, Select, Space, Spin } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import {
    changeCurrentDistrictId,
    changeCurrentProvinceId,
    postGetListDistrictsByIdStart,
    postGetListWardsByIdStart,
    resetWardsByList,
    postGetListProvincesStart,
} from 'modules/facilities/redux';
import { postAddRegionUserStart } from 'modules/user/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ReduxStateType } from 'redux/types';
import { FormDetailWrapper } from './styles';

interface IModalRegionFormProps {
    visible?: boolean | undefined;
    onCancel: () => void;
    onOk: () => void;
    isUpdate?: boolean;
}

const RegionForm: React.FC<IModalRegionFormProps> = ({ visible, onOk, onCancel, isUpdate }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const handleSubmit = () => {
        if (!isUpdate) {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);
                dispatch(postAddRegionUserStart(value));
                onOk();
            });
        } else {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                dispatch(postAddRegionUserStart(value));
                onOk();
            });
        }
    };

    const {
        data: { provincesList, districtsListById, wardsByListId, currentProvinceId, currentDistrictId },
        status,
    } = useSelector((state: RootState) => state.facilities);

    useEffect(() => {
        dispatch(postGetListProvincesStart());
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
        <Modal
            title={isUpdate ? 'Chỉnh sửa địa bàn quản lý' : 'Thêm địa bàn quản lý cho chuyên viên'}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            width={1200}
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
                <FormDetailWrapper form={form} name="basic" layout="vertical">
                    <Form.Item
                        label="Tên tài khoản"
                        name="username"
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: 'Tên tài khoản không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input autoComplete="off" placeholder="Nhập tên người dùng" />
                    </Form.Item>
                    <Form.Item
                        label="Tỉnh/ Thành phố"
                        name="provinceId"
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
                                    districtId: null,
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
                        name="districtId"
                        rules={[
                            {
                                type: 'number',
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

export default RegionForm;
