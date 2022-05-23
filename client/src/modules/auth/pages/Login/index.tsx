import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import loginBackGround from 'assets/images/background-login.svg';
import { LoginParams } from 'core/http/apis/auth/types';
import { loginStart } from 'modules/auth/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { RootState } from 'redux/store';
import { ReduxStateType } from 'redux/types';
import { FormLoginWrapper, LoginBanner, LoginFormLayout, LoginWrapper } from './styles';

interface LoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { status, data } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (data.isAuthenticated) {
      history.push('/');
    }
  }, [data.isAuthenticated, history]);

  const onFinish = async (values: LoginForm) => {
    const body: LoginParams = {
      username: values.username,
      password: values.password,
    };

    dispatch(loginStart(body));
  };

  return (
    <LoginWrapper>
      <Row className="w-100">
        <Col xs={{ span: 0 }} lg={{ span: 14 }}>
          <LoginBanner>
            <div className="banner-name-app">Health First</div>
            <img src={loginBackGround} alt="Login V2" className="img-fluid" />
          </LoginBanner>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 10 }}>
          <LoginFormLayout>
            <FormLoginWrapper>
              <div className="form-heading">Đăng nhập</div>
              <div className="form-login">
                <Form
                  name="basic"
                  layout="vertical"
                  initialValues={{
                    username: '',
                    password: '',
                    remember: false,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    label="Tài khoản"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Tên đăng nhập không được để trống',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

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
                    <Input.Password />
                  </Form.Item>

                  <Form.Item name="remember" valuePropName="checked" className="mb-1">
                    <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="mt-2 w-100 justify-content-center"
                      loading={status === ReduxStateType.LOADING}
                    >
                      Đăng nhập
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </FormLoginWrapper>
          </LoginFormLayout>
        </Col>
      </Row>
    </LoginWrapper>
  );
};
export default Login;
