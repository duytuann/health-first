import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  .user-information {
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    .user-name {
      font-weight: 600;
      color: ${({ theme }) => theme.white};
      margin-bottom: 8px;
      width: max-content;
      line-height: 1;
    }

    .user-role {
      color: ${({ theme }) => theme.white};
      font-size: 13px;
      margin-bottom: 0px;
      text-align: right;
      line-height: 1;
    }
  }
`;
