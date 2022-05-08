import React from 'react';
import logo from 'assets/images/logo.png';
import styled from 'styled-components';
const WellcomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function Wellcome() {
  return (
    <WellcomeWrapper>
      <div className="mb-3">
        <img alt="logo" src={logo} width="70px" />
      </div>
      <h1>Wellcome</h1>
    </WellcomeWrapper>
  );
}
