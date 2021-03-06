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
            title={isUpdate ? 'Ch???nh s???a ?????a b??n qu???n l??' : 'Th??m ?????a b??n qu???n l?? cho chuy??n vi??n'}
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
                            ????ng
                        </Button>
                        <Button
                            color="primary"
                            $fill
                            key="submit"
                            onClick={handleSubmit}
                            icon={<Icon name="save" size={18} className="mr-2" />}
                        >
                            Ghi l???i
                        </Button>
                    </Space>
                </div>
            }
        >
            <Spin spinning={status === ReduxStateType.LOADING}>
                <FormDetailWrapper form={form} name="basic" layout="vertical">
                    <Form.Item
                        label="T??n t??i kho???n"
                        name="username"
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: 'T??n t??i kho???n kh??ng ???????c ????? tr???ng',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input autoComplete="off" placeholder="Nh???p t??n ng?????i d??ng" />
                    </Form.Item>
                    <Form.Item
                        label="T???nh/ Th??nh ph???"
                        name="provinceId"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'T???nh/ Th??nh ph??? kh??ng ???????c ????? tr???ng',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Ch???n T???nh/ Th??nh ph???"
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
                        label="Qu???n/ huy???n"
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
                            placeholder="Ch???n Qu???n/ huy???n"
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
                        label="Ph?????ng/ x??"
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
                </FormDetailWrapper>
            </Spin>
        </Modal>
    );
};

export default RegionForm;
