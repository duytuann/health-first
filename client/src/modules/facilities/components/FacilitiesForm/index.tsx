import { Form, Input, Select, Space, Spin } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { businessType, facilityState } from 'helper/consts';
import {
    changeCurrentDistrictId,
    changeCurrentProvinceId,
    postCreateFacilityStart,
    postUpdateFacilityStart,
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
        data: {
            provincesList,
            districtsListById,
            wardsByListId,
            currentProvinceId,
            currentDistrictId,
            currentFacilityId,
            currentFacility,
        },
        status,
    } = useSelector((state: RootState) => state.facilities);

    const handleSubmit = () => {
        if (!isUpdate) {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                dispatch(postCreateFacilityStart(value));
                onOk();
            });
        } else {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                dispatch(
                    postUpdateFacilityStart({
                        ...value,
                        id: currentFacilityId,
                    })
                );
                onOk();
            });
        }
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

    useEffect(() => {
        form.setFieldsValue({
            name: currentFacility.name,
            businessTypeId: 1,
            facilityStateId: currentFacility.facilityStateId,
            address: currentFacility.address,   
        });
    }, []);

    return (
        <Modal
            title={isUpdate ? 'S???a c?? s???' : 'Th??m c?? s???'}
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
                <FormDetailWrapper form={form} name="basic" layout="vertical" initialValues={{}}>
                    <Form.Item
                        label="T??n c?? s???"
                        name="name"
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: 'T??n c?? s??? kh??ng ???????c ????? tr???ng',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Nh???p t??n c?? s???" />
                    </Form.Item>
                    <Form.Item
                        label="Lo???i h??nh kinh doanh"
                        name="businessTypeId"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Lo???i h??nh kinh doanh kh??ng ???????c ????? tr???ng',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Select placeholder="Ch???n lo???i h??nh kinh doanh">
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
                        label="Tr???ng th??i c?? s???"
                        name="facilityStateId"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Tr???ng th??i c?? s??? kh??ng ???????c ????? tr???ng',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Select placeholder="Ch???n tr???ng th??i c?? s???">
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
                        label="?????a ch???"
                        name="address"
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: '?????a ch??? c???a c?? s??? kh??ng ???????c ????? tr???ng',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Nh???p ?????a ch??? c???a c?? s???" />
                    </Form.Item>
                    <Form.Item
                        label="T???nh/ Th??nh ph???"
                        name="province"
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
                                    district: null,
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
                        name="district"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Qu???n/ huy???n kh??ng ???????c ????? tr???ng',
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
                                required: true,
                                message: 'Ph?????ng/ x?? kh??ng ???????c ????? tr???ng',
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

export default FacilitiesForm;
