// import PropTypes from 'prop-types'
import { Avatar, Dropdown, Menu } from 'antd';
// import Notifications from 'src/components/Notifications'
// import { logOut } from "src/store/authentication/actionCreator";
import ChangePassword from 'components/ChangePassword';
import InfoAccount from 'components/InfoAccount';
import { logoutStart } from 'modules/auth/redux';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';
import { UserInfoWrapper } from './styles';

const UserInfo: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isShowModalInfoAccount, setIsShowModalInfoAccount] = useState(false);
    const [isShowModalChangePass, setIsShowModalChangePass] = useState(false);

    const {
        data: { username, displayName },
    } = useSelector((state: RootState) => state.auth);

    const handleLogOut = () => {
        dispatch(logoutStart());
        history.push('/login');
    };

    const openShowInfo = () => {
        setIsShowModalInfoAccount(true);
    };

    const openChangePassword = () => {
        setIsShowModalChangePass(true);
    };

    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={openShowInfo}>
                Thông tin tài khoản
            </Menu.Item>
            <Menu.Item key="2" onClick={openChangePassword}>
                Đổi mật khẩu
            </Menu.Item>
            <Menu.Item key="3" danger onClick={() => handleLogOut()}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    );
    return (
        <UserInfoWrapper>
            {/* <Notifications /> */}
            <div className="user-information">
                <p className="user-name">{username}</p>
                <p className="user-role">{displayName}</p>
            </div>
            <Dropdown overlay={menu} trigger={['click']}>
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    size={40}
                    style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                />
            </Dropdown>
            <InfoAccount visible={isShowModalInfoAccount} onCancel={() => setIsShowModalInfoAccount(false)} />
            <ChangePassword visible={isShowModalChangePass} onCancel={() => setIsShowModalChangePass(false)} />
        </UserInfoWrapper>
    );
};

export default UserInfo;
