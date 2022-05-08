import { Layout } from 'antd';
import styled from 'styled-components/macro';

export const HeaderWrapper = styled(Layout.Header)`
  background: ${({ theme }) => theme.bgWhite};
  padding: 0 20px;
  align-items: center;
  // justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 999;
  padding-left: 30px;
  .ant-input-search-button {
    padding-left: 8px;
  }
  .menu-toggle {
    color: ${({ theme }) => theme.white};
    cursor: pointer;
  }
  .menu-action {
    display: inline-flex;
    width: 50%;
    ul.ant-menu {
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.primary};
      display: flex;
      align-items: center;
      border-bottom: 0;
      .ant-menu-submenu-title {
        color: ${({ theme }) => theme.white};
        &:after {
          border-bottom: 2px solid ${({ theme }) => theme.white};
        }
      }
      .ant-menu-title-content {
        color: ${({ theme }) => theme.white};
        button.ant-btn {
          color: ${({ theme }) => theme.white};
          background: #2e81ff;
          border: 1px solid transparent;
        }
        &:after {
          border-bottom: 0;
        }
      }
    }
  }
  .menu-icon {
    display: inline-flex;
    width: 40%;
    justify-content: flex-end;
    .ant-input-group-wrapper {
      .ant-input-wrapper {
        input.ant-input {
          background: ${({ theme }) => theme.bgWhite};
          color: #5c5c5c;
          position: relative;
          padding-left: 35px;
          border: 1px solid transparent;
          border-radius: 5px;
        }
      }
      .ant-input-group-addon {
        position: absolute;
        top: 0px;
        left: 2px;
        z-index: 1;
        button.ant-btn {
          border-radius: 0;
          background: ${({ theme }) => theme.bgWhite};
          border: 1px solid transparent;
          color: #5c5c5c !important;
        }
      }
    }
    .box-icon {
      display: inline-flex;
      .ant-space {
        margin: 0 10px;
      }
    }
  }
`;
