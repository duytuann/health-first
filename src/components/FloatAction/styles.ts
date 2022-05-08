import styled from 'styled-components';
import { Space } from 'antd';

export const FloatActionWrapper = styled(Space)`
  position: absolute;
  top: 0;
  height: 100%;
  right: 0;
  background-color: #fff;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, #fff 10%, #fff 100%);
  padding-left: 20px;
  padding-right: 15px;
  display: none;
`;
