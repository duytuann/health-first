import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from 'components/Icon/Icon';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
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
    label: 'Quản lý cơ sở',
    key: 'facilities',
    icon: 'work_outline',
    path: '/facilities',
  },
  {
    label: 'Quản lý giấy chứng nhận',
    key: 'certificate',
    icon: 'location_city',
    path: '/certificate',
  },
  {
    label: 'Quản lý hoạt thông thanh',
    key: 'releases',
    icon: 'layers',
    path: '/plan',
  },
  {
    label: 'Quản lý người dùng',
    key: 'user',
    icon: 'phan-quyen',
    path: '/user',
  },
  // {
  //   label: '...More',
  //   key: 'issues',
  //   icon: 'phan-quyen',
  //   path: '/user',
  // },
];

const SideBar: React.FC = React.memo(() => {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[2] ? pathArray[2] : pathArray[1];
  const mainPathSplit = mainPath.split('/');
  // const { isCloseSideMenu } = useSelector((state: RootState) => state.appGlobal.data);

  return (
    // collapsed={isCloseSideMenu}
    <SideBarWrapper theme="light" width={220}>
      <Menu
        mode="inline"
        defaultSelectedKeys={mainPathSplit ? mainPathSplit : ['']}
        selectedKeys={mainPathSplit[0] ? [mainPathSplit[0]] : ['']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {dataSideBarMenu.map(({ label, key, icon, path, submenu }) => {
          return submenu ? (
            <SubMenu
              title={label}
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
