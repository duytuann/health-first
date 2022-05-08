import { Button, Input, Menu, Space } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { toggleSideMenu } from 'modules/app-global/redux';
import { HeaderWrapper } from './styles';
import UserInfo from '../UserInfo/UserInfo';

export const dataTopMenu = [
  {
    label: 'Chủ đề/Đề tài',
    key: 'dashboard',
    submenu: [
      {
        label: 'View System Dashboard',
        key: '1_1',
      },
      {
        label: 'Manage Dashboards',
        key: '1_2',
      },
    ],
  },
  {
    label: 'Sản phẩm',
    key: 'product',
  },
];
const AppHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { isCloseSideMenu } = useSelector((state: RootState) => state.appGlobal.data);
  const [isShowModalAddProduct, setIsShowModalAddProduct] = useState(false);
  const handleToggleCollapse = (e: any) => {
    e.stopPropagation();
    dispatch(toggleSideMenu(!isCloseSideMenu));
  };

  const handleAddProduct = () => {
    setIsShowModalAddProduct(true);
  };

  return (
    <HeaderWrapper>
      <Space align="center" style={{ width: '230px' }}>
        <Icon className="menu-toggle" name="menu" size={22} color="primary" onClick={e => handleToggleCollapse(e)} />
        <div className="brand-name">Đài PT-TH Tây Ninh</div>
      </Space>
      <div className="menu-action">
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          {dataTopMenu.map(({ label, key, submenu }) => {
            return submenu ? (
              <SubMenu key={key} title={label}>
                {submenu.map(item => {
                  return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
                })}
              </SubMenu>
            ) : (
              <Menu.Item key={key}>{label}</Menu.Item>
            );
          })}
          <Menu.Item>
            <Button onClick={handleAddProduct}>Thêm sản phẩm</Button>
          </Menu.Item>
        </Menu>
      </div>
      <div className="menu-icon">
        <Space>
          <Input.Search style={{ width: '170px' }} placeholder="Search" />
        </Space>
        <div className="box-icon">
          <Space>
            <Icon
              className="menu-toggle"
              name="notifications_active"
              size={22}
              color="primary"
              onClick={e => handleToggleCollapse(e)}
            />
          </Space>
          <Space>
            <Icon
              className="menu-toggle"
              name="language"
              size={22}
              color="primary"
              onClick={e => handleToggleCollapse(e)}
            />
          </Space>
          <Space>
            <Icon
              className="menu-toggle"
              name="settings"
              size={22}
              color="primary"
              onClick={e => handleToggleCollapse(e)}
            />
          </Space>
        </div>
        <UserInfo />
      </div>
      <Modal title="Thêm mới sản phẩm" visible={isShowModalAddProduct} onCancel={() => setIsShowModalAddProduct(false)}>
        <p>Sản phẩm 1</p>
        <p>Sản phẩm 2</p>
        <p>Sản phẩm 3</p>
      </Modal>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
