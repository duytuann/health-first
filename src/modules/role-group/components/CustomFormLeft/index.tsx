import React from 'react';
import { RoleGroupLeftWrapper } from './styles';

interface IProps {}

const CustomFormLeft: React.FC<IProps> = props => {
  return (
    <RoleGroupLeftWrapper>
      <div>
        <span>Danh sách cấu hình</span>
      </div>
      <div>
        <span>Cấu hình người dùng</span>
        {/* <Collapse defaultActiveKey={['1']}>
          <Panel header="Cấu hình người dùng" key="1">
            <p>Danh bạ người dùng</p>
            <p>Phân quyền</p>
          </Panel>
        </Collapse> */}
      </div>
      <div>
        <span>Danh mục phòng ban</span>
      </div>
      <div>
        <span>Quy trình xét duyệt</span>
      </div>
      <div>
        <span>Danh mục loại ưu tiên</span>
      </div>
      <div>
        <span>Lịch sử hoạt động</span>
      </div>
    </RoleGroupLeftWrapper>
  );
};
export default CustomFormLeft;
