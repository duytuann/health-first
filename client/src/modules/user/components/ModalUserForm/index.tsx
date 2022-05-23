import { Form, Input, Select, Space } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import React from 'react';
import { FormDetailWrapper } from './styles';

interface IModalRoleGroupFormProps {
    visible?: boolean | undefined;
    onCancel: () => void;
    onOk: () => void;
}

const ModalUserForm: React.FC<IModalRoleGroupFormProps> = ({ visible, onOk, onCancel }) => {
    const [form] = Form.useForm();
    const handleSubmit = () => {};

    const userRoleList = [
        {
            label: 'Quản lý',
            value: 1,
        },
        {
            label: 'Chuyên viên',
            value: 2,
        },
    ];

    return (
        <Modal
            title={'Thêm người dùng'}
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
            <FormDetailWrapper form={form} name="basic" layout="vertical">
                <Form.Item
                    label="Tên người dùng"
                    name="DisplayName"
                    rules={[
                        {
                            required: true,
                            message: 'Tên người dùng không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nhập tên người dùng" />
                </Form.Item>
                <Form.Item
                    label="Tên tài khoản"
                    name="UserName"
                    rules={[
                        {
                            required: true,
                            message: 'Tên tài khoản không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nhập tên tài khoản" />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Mật khẩu không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nhập mật khẩu" />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại"
                    name="PhoneNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Số điện thoại không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nhập số điện thoại" />
                </Form.Item>
                <Form.Item
                    label="Phân quyền"
                    name="UserRole"
                    rules={[
                        {
                            required: true,
                            message: 'Số điện thoại không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Select placeholder="Chọn quyền người dùng">
                        {userRoleList.map(item => (
                            <Select.Option key={item.value} value={item.value}>
                                {item.label}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </FormDetailWrapper>
        </Modal>
    );
};

export default ModalUserForm;
