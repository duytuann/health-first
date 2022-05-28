import { DatePicker, Form, Input, Select, Space } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { certificateState } from 'helper/consts';
import { postCreateCertificateStart, postUpdateCertificateStart } from 'modules/certificate/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { FormDetailWrapper } from './styles';

interface ICertificateFormProps {
    visible?: boolean | undefined;
    onCancel: () => void;
    onOk: () => void;
    isUpdate: boolean;
}

const CertificateForm: React.FC<ICertificateFormProps> = ({ visible, onOk, onCancel, isUpdate }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const {
        data: { facilityId, currentFacilityId },
    } = useSelector((state: RootState) => state.certificate);

    const handleSubmit = () => {
        if (!isUpdate) {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                const body = {
                    ...value,
                    publishedDate: value.publishedDate.format('YYYY-MM-DD'),
                    expiredDate: value.expiredDate.format('YYYY-MM-DD'),
                    facilityId: facilityId,
                };

                dispatch(postCreateCertificateStart(body));
                onOk();
            });
        } else {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                dispatch(
                    postUpdateCertificateStart({
                        ...value,
                        publishedDate: value.publishedDate.format('YYYY-MM-DD'),
                        expiredDate: value.expiredDate.format('YYYY-MM-DD'),
                        id: currentFacilityId.id,
                    })
                );
                onOk();
            });
        }
    };

    useEffect(() => {
        if (isUpdate) {
            form.setFieldsValue({});
        }
    }, []);

    return (
        <>
            <Modal
                title={isUpdate ? 'Sửa giấy chứng nhận' : 'Thêm giấy chứng nhận'}
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
                        label="Trạng thái giấy chứng nhận"
                        name="certificateStateId"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Trạng thái giấy chứng nhận không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Select placeholder="Chọn trạng thái giấy chứng nhận">
                            {certificateState.map((item: any, index: number) => (
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
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        label="Ngày hết hạn"
                        name="expiredDate"
                        rules={[
                            {
                                type: 'object',
                                required: true,
                                message: 'Ngày hết hạn không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
                        <DatePicker />
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
                        <Input placeholder="Nhập mô tả về giấy chứng nhận" />
                    </Form.Item>
                </FormDetailWrapper>
            </Modal>
        </>
    );
};

export default CertificateForm;
