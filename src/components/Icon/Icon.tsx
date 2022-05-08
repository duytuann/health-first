import React from 'react';
import { IconStyled } from './styles';

interface Props {
  name: string;
  size: number;
  color?: string;
  className?: string;
  rotate?: number;
  onClick?: (e: any) => void;
}
const Icon: React.FC<Props> = (props: Props) => {
  const { color, name, className } = props;
  return <IconStyled {...props} color={color} className={`icon-${name} ${className || ''}`} />;
};

export default Icon;
