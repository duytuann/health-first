import { Avatar, Button, Form, Spin } from 'antd';
import Modal from 'components/Modal';
import React, { useState } from 'react';
import { ContentInfoAccount } from './styles';

// import { toast } from 'react-toastify';

const InfoAccount: React.FC<{
  visible: boolean;
  onCancel: Function;
}> = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    if (onCancel) onCancel();
    form.resetFields();
  };

  const handleSubmitForm = () => {
    console.log('click submit');
  };
  return (
    <Modal
      visible={visible}
      width={756}
      title={`Thông tin tài khoản`}
      onCancel={handleCancel}
      // className={className}
      style={{ top: 20 }}
      footer={[
        <div key="footer" className="d-flex justify-content-end">
          <Button type="primary" key="back" onClick={handleCancel}>
            Đóng(ESC)
          </Button>
        </div>,
      ]}
    >
      <Spin spinning={loading}>
        <Form layout="vertical" form={form} scrollToFirstError>
          <ContentInfoAccount>
            <div className="box-info box-avatar">
              <span className="default-left">Avatar </span>
              <span className="default-right">
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  size={40}
                  style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                />
              </span>
            </div>
            <div className="box-info box-account">
              <span className="default-left">Tên tài khoản:</span>
              <span className="default-right">HauCM</span>
            </div>
            <div className="box-info box-name">
              <span className="default-left">Họ tên:</span>
              <span className="default-right">Cao Minh Hậu</span>
            </div>
            <div className="box-info box-phone">
              <span className="default-left">Số điện thoại:</span>
              <span className="default-right">0988888888</span>
            </div>
            <div className="box-info box-email">
              <span className="default-left">Email:</span>
              <span className="default-right">haucm@gmail.com</span>
            </div>
            <div className="box-info box-gender">
              <span className="default-left">Giới tính:</span>
              <span className="default-right">Nam</span>
            </div>

            <div className="box-department">
              <table>
                <tr className="head-title">
                  <th>Phòng ban</th>
                  <th>Chức vụ</th>
                  <th>Phân quyền</th>
                </tr>
                <tr className="head-content">
                  <td>Phòng thời sự</td>
                  <td>Chuyên viên</td>
                  <td>Chuyên viên</td>
                </tr>
                <tr className="head-content">
                  <td>Phòng kỹ thuật sản xuất</td>
                  <td>Phó trưởng phòng</td>
                  <td>Phó phòng</td>
                </tr>
              </table>
            </div>
          </ContentInfoAccount>
        </Form>
      </Spin>
    </Modal>
  );
};

export default InfoAccount;
