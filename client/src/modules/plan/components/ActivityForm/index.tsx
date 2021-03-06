import { DatePicker, Form, Input, Select, Space } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { activityResult, activityState } from 'helper/consts';
import { postCreateActivityStart, postUpdateActivityStart } from 'modules/plan/redux';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { FormDetailWrapper } from './styles';

interface IActivityFormProps {
    visible?: boolean | undefined;
    onCancel: () => void;
    onOk: () => void;
    isUpdate: boolean;
}

const ActivityForm: React.FC<IActivityFormProps> = ({ visible, onOk, onCancel, isUpdate }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {
        data: { currentPlanId, currentActivityId, currentFacilityId },
    } = useSelector((state: RootState) => state.plan);

    const handleSubmit = () => {
        if (!isUpdate) {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                const body = {
                    ...value,
                    startDate: value.startDate.format('YYYY-MM-DD'),
                    endDate: value.endDate.format('YYYY-MM-DD'),
                    planId: currentPlanId,
                    facilityId: currentFacilityId,
                };

                dispatch(postCreateActivityStart(body));
                onOk();
            });
        } else {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                const body = {
                    ...value,
                    startDate: value.startDate.format('YYYY-MM-DD'),
                    endDate: value.endDate.format('YYYY-MM-DD'),
                    planId: currentPlanId,
                    facilityId: currentFacilityId,
                    id: currentActivityId,
                };

                dispatch(postUpdateActivityStart(body));
                onOk();
            });
        }
    };

    // useEffect(() => {
    //     if (isUpdate) {
    //         form.setFieldsValue({
    //             name: currentDetailPlanById.name,
    //             description: currentDetailPlanById.description,
    //             conclusion: currentDetailPlanById.conclusion,
    //             startDate: currentDetailPlanById.startDate,
    //         });
    //     }
    // }, []);

    return (
        <Modal
            title={isUpdate ? 'S???a ho???t ?????ng th??ng thanh' : 'Th??m ho???t ?????ng th??ng thanh'}
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
                    label="T??n ho???t ?????ng"
                    name="name"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'T??n ho???t ?????ng kh??ng ???????c ????? tr???ng',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nh???p t??n ho???t ?????ng" />
                </Form.Item>
                <Form.Item
                    label="K???t lu???n ho???t ?????ng"
                    name="conclusion"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'K???t lu???n cho ho???t ?????ng kh??ng ???????c ????? tr???ng',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nh???p k???t lu???n ho???t ?????ng" />
                </Form.Item>
                <Form.Item
                    label="Ng??y b???t ?????u"
                    name="startDate"
                    rules={[
                        {
                            type: 'object',
                            required: true,
                            message: 'Ng??y b???t ?????u kh??ng ???????c ????? tr???ng',
                            whitespace: true,
                        },
                    ]}
                >
                    <DatePicker onChange={() => {}} />
                </Form.Item>
                <Form.Item
                    label="Ng??y k???t th??c"
                    name="endDate"
                    rules={[
                        {
                            type: 'object',
                            required: true,
                            message: 'Ng??y k???t th??c kh??ng ???????c ????? tr???ng',
                            whitespace: true,
                        },
                    ]}
                >
                    <DatePicker onChange={() => {}} />
                </Form.Item>
                <Form.Item
                    label="K???t qu??? ho???t ?????ng"
                    name="activityResultId"
                    rules={[
                        {
                            type: 'number',
                            required: true,
                            message: 'Kh??ng ???????c b??? tr???ng k???t qu??? ho???t ?????ng',
                            whitespace: true,
                        },
                    ]}
                >
                    <Select placeholder="Ch???n k???t qu??? ho???t ?????ng" style={{ width: '100%' }}>
                        {activityResult.map((item: any, index: number) => (
                            <Select.Option key={index} value={item.id}>
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Tr???ng th??i ho???t ?????ng"
                    name="activityStateId"
                    rules={[
                        {
                            type: 'number',
                            required: true,
                            message: 'Kh??ng ???????c b??? tr???ng tr???ng th??i ho???t ?????ng',
                            whitespace: true,
                        },
                    ]}
                >
                    <Select placeholder="Ch???n tr???ng th??i ho???t ?????ng" style={{ width: '100%' }}>
                        {activityState.map((item: any, index: number) => (
                            <Select.Option key={index} value={item.id}>
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </FormDetailWrapper>
        </Modal>
    );
};

export default ActivityForm;
