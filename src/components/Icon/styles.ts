import styled from 'styled-components/macro';

export const IconStyled = styled.i<{
  size?: number;
  rotate?: number;
  color?: string;
}>`
  display: inline-block;
  color: ${({ theme, color }) => (color ? theme[color] : theme.white)};
  font-size: ${props => props.size}px !important;
  transform: rotate(${props => props.rotate}deg);
`;
