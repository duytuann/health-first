import styled from 'styled-components/macro';

export const RoleGroupLeftWrapper = styled.div`
  width: 20%;
  background: ${({ theme }) => theme.bgWhite};
  margin-right: 16px;
  padding: 16px;
  border-radius: 8px;
  .action-per {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    cursor: pointer;
    a {
      color: #000;
      width: 100%;
      height: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
    }
    &.active {
      background: #edf6fc;
      .ant-collapse {
        background: #edf6fc;
      }
    }
    p {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fcfcfc;
      &.active {
        background: #edf6fc;
      }
    }
    .ant-collapse {
      background-color: ${({ theme }) => theme.bgWhite};
      border: 1px solid transparent;
      width: 100%;
      .ant-collapse-item {
        border-bottom: 1px solid transparent;
        .ant-collapse-header {
          white-space: nowrap;
          display: flex;
          padding-left: 0;
          align-items: center;
          div {
            display: flex;
          }
        }
      }
    }
  }
`;
