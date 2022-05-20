import { SpaceProps } from 'antd';
import React from 'react';
import { FloatActionWrapper } from './styles';
interface FloatActionProps extends SpaceProps {
  children: React.ReactNode;
}
const FloatAction: React.FC<FloatActionProps> = ({ children }) => {
  return <FloatActionWrapper>{children}</FloatActionWrapper>;
};
export default FloatAction;
