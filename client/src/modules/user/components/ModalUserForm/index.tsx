import { Checkbox, Col, Form, Input, Row, Space } from 'antd';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { postCreateUserStart, postUpdateUserStart } from 'modules/user/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { FormDetailWrapper } from './styles';

interface IModalUserFormProps {
    visible?: boolean | undefined;
    onCancel: () => void;
    onOk: () => void;
    isUpdate?: boolean;
}

const ModalUserForm: React.FC<IModalUserFormProps> = ({ visible, onOk, onCancel, isUpdate }) => {
    const dispatch = useDispatch();
    const {
        data: { currentDetailUserById },
    } = useSelector((state: RootState) => state.user);
    const [form] = Form.useForm();
    const handleSubmit = () => {
        if (!isUpdate) {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);
                dispatch(postCreateUserStart(value));
                onOk();
            });
        } else {
            form.validateFields().then(() => {
                const value = form.getFieldsValue(true);

                const body = {
                    ...value,
                    id: 1,
                };

                dispatch(postUpdateUserStart(body));
                onOk();
            });
        }
    };

    useEffect(() => {
        if (isUpdate) {
            form.setFieldsValue({
                username: currentDetailUserById.username,
                password: currentDetailUserById.password,
                displayName: currentDetailUserById.displayName,
                phoneNumber: currentDetailUserById.phoneNumber,
                email: currentDetailUserById.email,
                roles: currentDetailUserById.roles,
            });
        }
    }, []);

    return (
        <Modal
            title={isUpdate ? 'Chỉnh sửa thông tin người dùng' : 'Thêm người dùng'}
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
                    name="displayName"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'Tên người dùng không được để trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input autoComplete="off" placeholder="Nhập tên người dùng" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Email không được trống, và phải hợp lệ',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nhập tên tài khoản" />
                </Form.Item>
                <Form.Item
                    label="Tài khoản"
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
                    <Input autoComplete="off" placeholder="Nhập tài khoản" />
                </Form.Item>
                {isUpdate ? null : (
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Mật khẩu không được để trống',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input.Password autoComplete="off" placeholder="Nhập mật khẩu" />
                    </Form.Item>
                )}
                <Form.Item
                    label="Số điện thoại"
                    name="phoneNumber"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'Số điện thoại không được trống',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Nhập số điện thoại" />
                </Form.Item>
                <Form.Item
                    label="Chọn quyền"
                    name="roles"
                    rules={[
                        {
                            type: 'array',
                            required: true,
                            message: 'Bắt buộc phải chọn ít nhất một nhóm quyền',
                            whitespace: true,
                        },
                    ]}
                >
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row>
                            <Col span={4}>
                                <Checkbox value={1}>Quản trị viên</Checkbox>
                            </Col>
                            <Col span={4}>
                                <Checkbox value={2}>Quản lý</Checkbox>
                            </Col>
                            <Col span={4}>
                                <Checkbox value={3}>Quản lý cấp cao</Checkbox>
                            </Col>
                            <Col span={4}>
                                <Checkbox value={4}>Người dùng</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
            </FormDetailWrapper>
        </Modal>
    );
};

export default ModalUserForm;
