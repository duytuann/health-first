import styled from 'styled-components/macro';
export const FacilitiesContainer = styled.div`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.white};
  border-radius: 6px;
  background: #fff;

  .ant-collapse-header {
    display: flex;
  }
`;
