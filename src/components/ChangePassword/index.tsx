import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'components/Modal';
import { Button, Spin, Form, Input } from 'antd';

// Utils/Constant
// import { changePasswordStart } from 'modules/user-role-group/redux/userManagement';
import { getRegexPassword } from 'helper/utils';
// import { toast } from 'react-toastify';
// import { ChangePassOtherUserRequest } from 'core/http/apis/user-manager/types';

const ChangePassword: React.FC<{
  visible: boolean;
  onCancel: Function;
}> = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    if (onCancel) onCancel();
    form.resetFields();
  };

  const handleSubmitForm = () => {
    setLoading(false);
    if (loading) return;
    form.validateFields().then(() => {
      setLoading(true);
      const value = form.getFieldsValue(true);
      //   if (userDetail) {
      //     const body: ChangePassOtherUserRequest = {
      //       UserID: userDetail?.UserID,
      //       PasswordNew: value.Password,
      //       ScreenType: type === 2 ? 1 : 0,
      //     };
      //     dispatch(changePasswordStart({ ...body }));
      //   }
      form.resetFields();
      onCancel();
      setLoading(false);
    });
  };
  return (
    <Modal
      visible={visible}
      width={756}
      title={`Đổi mật khẩu`}
      onCancel={handleCancel}
      // className={className}
      style={{ top: 20 }}
      footer={[
        <div key="footer" className="d-flex justify-content-end">
          <Button type="primary" key="back" onClick={handleCancel}>
            Đóng(ESC)
          </Button>
          <Button type="primary" key="submit" onClick={handleSubmitForm}>
            Ghi lại
          </Button>
        </div>,
      ]}
    >
      <Spin spinning={loading}>
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            Password: '',
            RePassword: '',
          }}
          scrollToFirstError
        >
          <Form.Item
            required
            label="Mật khẩu cũ"
            name="oldPassword"
            rules={[
              {
                required: true,
                message: 'Mật khẩu không được dể trống!',
                whitespace: true,
              },
              //   {
              //     pattern: getRegexPassword(),
              //     message:
              //       'Mật khẩu có chứa ít nhất 8 ký tự, trong đó có ít nhất một số và bao gồm cả chữ thường và chữ hoa và ký tự đặc biệt, ví dụ @, #, ?, !.',
              //   },
            ]}
          >
            <Input.Password type="password" placeholder="Nhập mật khẩu cũ" />
          </Form.Item>

          <Form.Item
            required
            label="Nhập mật khẩu mới"
            name="Password"
            rules={[
              {
                required: true,
                message: 'Mật khẩu không được dể trống!',
                whitespace: true,
              },
              {
                pattern: getRegexPassword(),
                message:
                  'Mật khẩu có chứa ít nhất 8 ký tự, trong đó có ít nhất một số và bao gồm cả chữ thường và chữ hoa và ký tự đặc biệt, ví dụ @, #, ?, !.',
              },
            ]}
          >
            <Input.Password type="password" placeholder="Nhập mật khẩu mới" />
          </Form.Item>

          <Form.Item
            required
            label="Nhập lại mật khẩu mới"
            name="RePassword"
            rules={[
              {
                required: true,
                message: 'Mật khẩu không được để trống!',
                whitespace: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('Password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu không khớp!'));
                },
              }),
            ]}
          >
            <Input.Password type="password" placeholder="Nhập lại mật khẩu mới" />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};

export default ChangePassword;
