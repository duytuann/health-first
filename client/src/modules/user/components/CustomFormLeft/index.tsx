import { Collapse } from 'antd';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { RoleGroupLeftWrapper } from './styles';

interface IProps {}

const CustomFormLeft: React.FC<IProps> = props => {
  const { path } = useRouteMatch();
  return (
    <RoleGroupLeftWrapper>
      <div className={path === '/user' ? 'action-per active' : 'action-per'}>
        <NavLink to={'/user'}>Quản lý người dùng</NavLink>
      </div>
      <div className={path === '/authorize' ? 'action-per active' : 'action-per'}>
        <NavLink to={'/authorize'}>Quản lý phân quyền</NavLink>
      </div>
    </RoleGroupLeftWrapper>
  );
};
export default CustomFormLeft;
