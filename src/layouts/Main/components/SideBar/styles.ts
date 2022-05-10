import { Layout } from 'antd';
import styled from 'styled-components/macro';

export const SideBarWrapper = styled(Layout.Sider)`
  padding-top: 15px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.primaryColor};
  .sibar-icon {
    margin-right: 10px;
  }
  .title-header {
    width: 100%;
    height: 60px;
    background: ${({ theme }) => theme.bgWhite};
    display: flex;
    align-items: center;
    justify-content: center;
    li.ant-menu-item {
      padding-left: 24px !important;
      .ant-menu-title-content {
        h3.text-title {
          margin-bottom: 0;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
`;
