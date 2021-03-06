import { DatePicker, Form, Input, Select, Space } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { certificateState } from 'helper/consts';
import { postCreateCertificateStart, postUpdateCertificateStart } from 'modules/certificate/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import moment from 'moment';
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
        data: { facilityId, currentFacilityId, currentCertificate },
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
            form.setFieldsValue({
                certificateStateId: currentCertificate.certificateStateId,
                publishedDate: moment(currentCertificate.publishedDate, 'YYYY-MM-DD'),
                expiredDate: moment(currentCertificate.expiredDate, 'YYYY-MM-DD'),
            });
        }
    }, []);

    return (
        <>
            <Modal
                title={isUpdate ? 'S???a gi???y ch???ng nh???n' : 'Th??m gi???y ch???ng nh???n'}
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
                        label="Tr???ng th??i gi???y ch???ng nh???n"
                        name="certificateStateId"
                        rules={[
                            {
                                type: 'number',
                                required: true,
                                message: 'Tr???ng th??i gi???y ch???ng nh???n kh??ng ???????c ????? tr???ng',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Select placeholder="Ch???n tr???ng th??i gi???y ch???ng nh???n">
                            {certificateState.map((item: any, index: number) => (
                                <Select.Option key={index} value={item.id}>
                                    {item.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Ng??y b???t ?????u"
                        name="publishedDate"
                        rules={[
                            {
                                type: 'object',
                                required: true,
                                message: 'Ng??y b???t ?????u kh??ng ???????c ????? tr???ng',
                                whitespace: true,
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        label="Ng??y h???t h???n"
                        name="expiredDate"
                        rules={[
                            {
                                type: 'object',
                                required: true,
                                message: 'Ng??y h???t h???n kh??ng ???????c ????? tr???ng',
                                whitespace: true,
                            },
                        ]}
                    >
                        <DatePicker />
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
                        <Input placeholder="Nh???p m?? t??? v??? gi???y ch???ng nh???n" />
                    </Form.Item>
                </FormDetailWrapper>
            </Modal>
        </>
    );
};

export default CertificateForm;
