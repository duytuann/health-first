import { Button, Input, Menu, Space } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import companyLogo from 'assets/images/leaf.png';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal';
import { memo, useState } from 'react';
import UserInfo from 'layouts/Main/components/UserInfo/UserInfo';
import { HeaderWrapper } from './styles';

export const dataTopMenu = [
    {
        label: '',
        key: 'dashboard',
        submenu: [
            {
                label: '',
                key: '1_1',
            },
            {
                label: '',
                key: '1_2',
            },
        ],
    },
    {
        label: '',
        key: 'product',
    },
];
const AppHeader: React.FC = () => {
    const [isShowModalAddProduct, setIsShowModalAddProduct] = useState(false);
    const handleToggleCollapse = (e: any) => {
        e.stopPropagation();
    };

    const handleAddProduct = () => {
        setIsShowModalAddProduct(true);
    };

    return (
        <HeaderWrapper>
            <Space align="center" style={{ width: '230px' }}>
                <img style={{ width: '38px' }} src={companyLogo} alt="" />
                {/* <Icon className="menu-toggle" name="menu" size={22} color="primary" onClick={e => handleToggleCollapse(e)} /> */}
                <div className="brand-name">HEALTH FIRST</div>
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
                        <Button onClick={handleAddProduct}>Th??m s???n ph???m</Button>
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
            <Modal
                title="Th??m m???i s???n ph???m"
                visible={isShowModalAddProduct}
                onCancel={() => setIsShowModalAddProduct(false)}
            >
                <p>S???n ph???m 1</p>
                <p>S???n ph???m 2</p>
                <p>S???n ph???m 3</p>
            </Modal>
        </HeaderWrapper>
    );
};

export default memo(AppHeader);
