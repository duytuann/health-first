import { Form, Input, Select, Space } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { planState } from 'helper/consts';
import { postCreatePlanStart, postUpdatePlanStart } from 'modules/plan/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { FormDetailWrapper } from './styles';

interface IPlanFormProps {
    visible?: boolean | undefined;
    onCancel: () => void;
    onOk: () => void;
    isUpdate: boolean;
}

const PlanForm: React.FC<IPlanFormProps> = ({ visible, onOk, onCancel, isUpdate }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const {
        data: { currentPlanId, currentDetailPlanById },
    } = useSelector((state: RootState) => state.plan);
    const {
        data: { facilitiesList },
    } = useSelector((state: RootState) => state.facilities);

    const handleSubmit = () => {
        if (!isUpdate) {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                const body = {
                    ...value,
                };

                dispatch(postCreatePlanStart(body));
                onOk();
            });
        } else {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                dispatch(
                    postUpdatePlanStart({
                        ...value,
                        id: currentPlanId,
                    })
                );
                onOk();
            });
        }
    };

    useEffect(() => {
        if (isUpdate) {
            form.setFieldsValue({
                name: currentDetailPlanById.name,
                planStateId: currentDetailPlanById.planStateId,
                description: currentDetailPlanById.description,
            });
        }
    }, []);

    return (
        <Modal
            title={isUpdate ? 'S???a k??? ho???ch th??ng thanh' : 'Th??m k??? ho???ch th??ng thanh'}
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
            <FormDetailWrapper form={form} name="basic" layout="vertical" initialValues={{}}>
                <Form.Item
                    label="T??n k??? ho???ch"
                    name="name"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'T??n k??? ho???ch kh??ng ???????c ????? tr???ng',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nh???p t??n k??? ho???ch" />
                </Form.Item>
                <Form.Item
                    label="Tr???ng th??i k??? ho???ch"
                    name="planStateId"
                    rules={[
                        {
                            type: 'number',
                            required: true,
                            message: 'Tr???ng th??i k??? ho???ch kh??ng ???????c ????? tr???ng',
                            whitespace: true,
                        },
                    ]}
                >
                    <Select placeholder="Ch???n tr???ng th??i k??? ho???ch">
                        {planState.map((item: any, index: number) => (
                            <Select.Option key={index} value={item.id}>
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="C??c c?? s??? nh???n k??? ho???ch"
                    name="facilityIds"
                    rules={[
                        {
                            type: 'array',
                            required: true,
                            message: 'C??c c?? s??? nh???n k??? ho???ch kh??ng ???????c ????? tr???ng',
                            whitespace: true,
                        },
                    ]}
                >
                    <Select mode="multiple" placeholder="Ch???n c??c c?? s??? nh???n k??? ho???ch">
                        {facilitiesList.map((item: any, index: number) => (
                            <Select.Option key={index} value={item.id}>
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="M?? t???"
                    name="description"
                    rules={[
                        {
                            type: 'string',
                            required: false,
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nh???p m?? t??? v??? k??? ho???ch th??ng thanh" />
                </Form.Item>
            </FormDetailWrapper>
        </Modal>
    );
};

export default PlanForm;
