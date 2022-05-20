import styled from 'styled-components/macro';
import { Button } from 'antd';
import { IButtonProps } from '.';

export type ButtonType = 'primary' | 'success' | 'danger' | 'warning' | 'accept' | 'secondary';
const ButtonColorType: { [key in ButtonType]: string } = {
  danger: 'red',
  success: 'green',
  warning: 'yellow',
  accept: 'blue',
  primary: 'primaryColor',
  secondary: 'secondary',
};
export const ButtonStyled = styled(Button)<IButtonProps>`
  display: flex;
  color: ${({ color, theme, $fill }) => (color && !$fill ? theme[ButtonColorType[color]] : theme.text)};
  border-radius: ${({ radius }) => (radius ? radius : 6)}px;
  font-size: ${({ size }) => (size ? size : 12)}px !important;
  gap: 8px;
  height: 37px;
  padding: 10px;
  text-shadow: none;
  box-shadow: none;
  align-items: center;
  ${({ $fill, theme, color }) =>
    !$fill && `border: 1px solid ${color ? theme[ButtonColorType[color]] : theme.borderColor};`}

  ${({ $fill, theme, disabled, color }) =>
    `background-color: ${
      $fill ? (color ? theme[ButtonColorType[color]] : theme.backgroundColor) : disabled ? theme.disable : theme.white
    }`};

  cursor: ${({ disabled, loading }) => (loading ? 'wait' : disabled ? 'not-allowed' : 'pointer')};
  ${({ $fill, theme, disabled, color }) =>
    `&:hover {
        color: ${
          $fill
            ? color
              ? theme[ButtonColorType[color]]
              : theme.backgroundColor
            : disabled
            ? theme.disable
            : theme.white
        };
        background: ${
          !$fill
            ? color
              ? theme[ButtonColorType[color]]
              : theme.backgroundColor
            : disabled
            ? theme.disable
            : theme.white
        };
        border: 1px solid ${color ? theme[ButtonColorType[color]] : theme.borderColor};
        i {
          color:  ${color ? theme[ButtonColorType[color]] : theme.borderColor};
        }
      }`};
  ${({ $fill, theme, disabled, color }) =>
    `&:active  {
        color: ${
          $fill
            ? color
              ? theme[ButtonColorType[color]]
              : theme.backgroundColor
            : disabled
            ? theme.disable
            : theme.white
        };
        background: ${
          !$fill
            ? color
              ? theme[ButtonColorType[color]]
              : theme.backgroundColor
            : disabled
            ? theme.disable
            : theme.white
        };
        border: 1px solid ${color ? theme[ButtonColorType[color]] : theme.borderColor};
        i {
          color:  ${
            $fill
              ? color
                ? theme[ButtonColorType[color]]
                : theme.backgroundColor
              : disabled
              ? theme.disable
              : theme.white
          };
        }
      }`};
`;
export const IconButtonStyled = styled(Button)<IButtonProps>``;

export const LinkButtonStyled = styled(Button)<IButtonProps>`
  display: flex;
  color: ${({ color, theme, $fill }) => (color && !$fill ? theme[ButtonColorType[color]] : theme.text)};
  border-radius: ${({ radius }) => (radius ? radius : 6)}px;
  font-size: ${({ size }) => (size ? size : 12)}px !important;
  gap: 8px;
  height: 37px;
  padding: 10px;
  text-shadow: none;
  box-shadow: none;
  align-items: center;

  cursor: ${({ disabled, loading }) => (loading ? 'wait' : disabled ? 'not-allowed' : 'pointer')};
`;
