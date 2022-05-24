import { Layout } from 'antd';
import styled from 'styled-components/macro';

export const SideBarWrapper = styled(Layout.Sider)`
    padding-top: 15px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.primaryColor};
    .sibar-icon {
        margin-right: 10px;
    }

    .submenu {
        background: #ffffff;
        border-radius: 5px;
        width: 90%;
        margin: 0 auto;
    }

    .mainmenu {
        border-radius: 5px;
        width: 95%;
        margin: 0 auto;
    }

    .ant-menu-item-selected a {
        color: #ffffff;
    }
    .ant-menu-item-selected i {
        color: #ffffff;
    }

    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
        background-color: #42526e;
    }
`;
