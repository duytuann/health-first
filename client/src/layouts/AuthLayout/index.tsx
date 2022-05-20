import React from 'react';
import { Layout } from 'antd';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <Layout className="auth-layout">
      <div className="body">{children}</div>
    </Layout>
  );
};
export default AuthLayout;
