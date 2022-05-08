import { ButtonProps } from 'antd';
import React from 'react';
import { ButtonStyled, ButtonType, IconButtonStyled, LinkButtonStyled } from './styles';
export interface IButtonProps extends ButtonProps {
  title?: string;
  disabled?: boolean;
  $fill?: boolean;
  onClick?: () => void;
  radius?: number;
  color?: ButtonType;
  backgroundColor?: string;
  width?: string;
}

const Button: React.FC<IButtonProps> = React.memo(props => {
  return <ButtonStyled {...props}></ButtonStyled>;
});
export default Button;

const IconButton: React.FC<IButtonProps> = React.memo(props => {
  return <IconButtonStyled {...props}></IconButtonStyled>;
});

const LinkButton: React.FC<IButtonProps> = React.memo(props => {
  return <LinkButtonStyled {...props}></LinkButtonStyled>;
});

export { IconButton, LinkButton };
