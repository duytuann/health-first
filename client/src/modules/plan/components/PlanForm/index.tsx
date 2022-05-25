import { DatePicker, Form, Input, Select, Space } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import moment from 'moment';
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

    const handleSubmit = () => {
        if (!isUpdate) {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                const body = {
                    ...value,
                    publishedDate: value.publishedDate.format('YYYY-MM-DD'),
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
                        publishedDate: value.publishedDate.format('YYYY-MM-DD'),
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
                publishedDate: moment(currentDetailPlanById.publishedDate),
                // description: currentDetailPlanById.description,
            });
        }
    }, []);

    return (
        <Modal
            title={isUpdate ? 'Sửa kế hoạch thông thanh' : 'Thêm kế hoạch thông thanh'}
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
            <FormDetailWrapper form={form} name="basic" layout="vertical" initialValues={{}}>
                <Form.Item
                    label="Tên kế hoạch"
                    name="name"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'Tên kế hoạch không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nhập tên kế hoạch" />
                </Form.Item>
                <Form.Item
                    label="Trạng thái kế hoạch"
                    name="planStateId"
                    rules={[
                        {
                            type: 'number',
                            required: true,
                            message: 'Trạng thái kế hoạch không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Select placeholder="Chọn trạng thái kế hoạch">
                        {planState.map((item: any, index: number) => (
                            <Select.Option key={index} value={item.id}>
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Ngày bắt đầu"
                    name="publishedDate"
                    rules={[
                        {
                            type: 'object',
                            required: true,
                            message: 'Ngày bắt đầu không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <DatePicker onChange={() => {}} />
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name="description"
                    rules={[
                        {
                            type: 'string',
                            required: false,
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nhập mô tả về kế hoạch thông thanh" />
                </Form.Item>
            </FormDetailWrapper>
        </Modal>
    );
};

export default PlanForm;
