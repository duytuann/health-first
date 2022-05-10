import styled from 'styled-components/macro';
import { Layout } from 'antd';

export const LayoutWrapper = styled(Layout)`
  width: 100%;

  .ant-layout-header {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.primary};
    padding: 0 20px;
    align-items: center;
    display: flex;
    // justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 999;
    padding-left: 30px;
  }

  .ant-space-item {
    display: inline-flex;
    align-items: center;
  }

  .ant-layout-sider {
    color: ${({ theme }) => theme.primaryColor};
    background: ${({ theme }) => theme.white};
  }

  .ant-layout.ant-layout-has-sider {
    min-height: 100vh;
    height: calc(100vh - 64px);
    overflow: hidden;
    padding-top: 64px;
  }

  .ant-layout.ant-layout-has-sider > .ant-layout {
    padding: 0 !important;
  }

  .ant-layout-sider-children {
    position: relative;
  }

  .brand-logo {
    height: 64px;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .brand-name {
    font-weight: 700;
    transition: all 300ms;
    font-size: 18px;
  }

  .ant-menu-vertical .ant-menu-item,
  .ant-menu-vertical-left .ant-menu-item,
  .ant-menu-vertical-right .ant-menu-item,
  .ant-menu-inline .ant-menu-item,
  .ant-menu-vertical .ant-menu-submenu-title,
  .ant-menu-vertical-left .ant-menu-submenu-title,
  .ant-menu-vertical-right .ant-menu-submenu-title,
  .ant-menu-inline .ant-menu-submenu-title {
    margin-top: 0;
  }

  .ant-menu-vertical .ant-menu-item:not(:last-child),
  .ant-menu-vertical-left .ant-menu-item:not(:last-child),
  .ant-menu-vertical-right .ant-menu-item:not(:last-child),
  .ant-menu-inline .ant-menu-item:not(:last-child) {
    margin-bottom: 12px;
  }
`;
export const ContentWrapper = styled(Layout)`
  height: calc(100vh - 64px);
  min-height: calc(100vh - 64px);
  overflow: hidden;
  .ant-layout-content {
    margin: 0;
    padding-left: 16px;
    max-height: 100%;
    overflow-y: auto;
  }
`;
