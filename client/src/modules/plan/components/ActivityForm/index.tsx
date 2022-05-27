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
            title={isUpdate ? 'Sửa hoạt động thông thanh' : 'Thêm hoạt động thông thanh'}
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
                    label="Tên hoạt động"
                    name="name"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'Tên hoạt động không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nhập tên hoạt động" />
                </Form.Item>
                <Form.Item
                    label="Kết luận hoạt động"
                    name="conclusion"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'Kết luận cho hoạt động không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nhập kết luận hoạt động" />
                </Form.Item>
                <Form.Item
                    label="Ngày bắt đầu"
                    name="startDate"
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
                    label="Ngày kết thúc"
                    name="endDate"
                    rules={[
                        {
                            type: 'object',
                            required: true,
                            message: 'Ngày kết thúc không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <DatePicker onChange={() => {}} />
                </Form.Item>
                <Form.Item
                    label="Kết quả hoạt động"
                    name="activityResultId"
                    rules={[
                        {
                            type: 'number',
                            required: true,
                            message: 'Không được bỏ trống kết quả hoạt động',
                            whitespace: true,
                        },
                    ]}
                >
                    <Select placeholder="Chọn kết quả hoạt động" style={{ width: '100%' }}>
                        {activityResult.map((item: any, index: number) => (
                            <Select.Option key={index} value={item.id}>
                                {item.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Trạng thái hoạt động"
                    name="activityStateId"
                    rules={[
                        {
                            type: 'number',
                            required: true,
                            message: 'Không được bỏ trống trạng thái hoạt động',
                            whitespace: true,
                        },
                    ]}
                >
                    <Select placeholder="Chọn trạng thái hoạt động" style={{ width: '100%' }}>
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
