import styled from 'styled-components/macro';

export const TruncateTextWrapper = styled.div<{
  maxWidth?: number | string;
  maxLine?: number;
}>`
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  max-width: ${props => props.maxWidth || '100%'};
  -webkit-line-clamp: ${props => props.maxLine};
`;
