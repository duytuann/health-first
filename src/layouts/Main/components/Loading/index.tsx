import React from 'react';
import logo from 'assets/images/logo.png';
import { Spin } from 'antd';
import { Wrapper } from './styles';

const Loading: React.FC = React.memo(() => {
  return (
    <Wrapper>
      <div className="mb-3">
        <img alt="logo" src={logo} width="70px" />
      </div>
      <Spin />
    </Wrapper>
  );
});

export default Loading;
