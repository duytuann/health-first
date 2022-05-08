import React from 'react';

import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import SubMenu from 'antd/lib/menu/SubMenu';
import { SideBarWrapper } from './styles';
const dataSideBarMenu: {
  label: string;
  key: string;
  icon: string;
  path: string;
  submenu?: {
    label: string;
    key: string;
    icon: string;
    path: string;
  }[];
}[] = [
  {
    label: 'Danh sách chủ đề/đề tài',
    key: 'dashboard',
    icon: 'work_outline',
    path: '/dashboard',
  },
  {
    label: 'Duyệt sản phẩm',
    key: 'workflow',
    icon: 'location_city',
    path: '/workflow',
  },
  {
    label: 'Danh sách sản phẩm',
    key: 'releases',
    icon: 'layers',
    path: '/releases',
  },
  {
    label: 'Báo cáo thống kê',
    key: 'report',
    icon: 'description',
    path: '/report',
  },
  {
    label: 'Quản trị hề thống',
    key: 'issues',
    icon: 'phan-quyen',
    path: '/permissions',
  },
];

const SideBar: React.FC = React.memo(() => {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[2] ? pathArray[2] : pathArray[1];
  const mainPathSplit = mainPath.split('/');
  const { isCloseSideMenu } = useSelector((state: RootState) => state.appGlobal.data);

  return (
    <SideBarWrapper theme="light" collapsed={isCloseSideMenu} width={220}>
      <Menu
        mode="inline"
        defaultSelectedKeys={mainPathSplit ? mainPathSplit : ['']}
        selectedKeys={mainPathSplit[0] ? [mainPathSplit[0]] : ['']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <div className="title-header">
          <Menu.Item icon={<Icon name="people" className="icon-title" size={20} color="primary" />}>
            <h3 className="text-title">Bản tin trực tiếp</h3>
          </Menu.Item>
        </div>
        {dataSideBarMenu.map(({ label, key, icon, path, submenu }) => {
          return submenu ? (
            <SubMenu
              title={!isCloseSideMenu ? label : ''}
              key={key}
              icon={<Icon name={icon} size={22} color="primary" className="sibar-icon" />}
            >
              {submenu.map(item => (
                <Menu.Item key={item.key}>
                  <NavLink to={item.path}>{item.label}</NavLink>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={key} icon={<Icon name={icon} size={22} color="primary" />}>
              <NavLink to={path}>{label}</NavLink>
            </Menu.Item>
          );
        })}
      </Menu>
    </SideBarWrapper>
  );
});

export default SideBar;
