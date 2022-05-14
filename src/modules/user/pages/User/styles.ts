import styled from 'styled-components/macro';
import { Breadcrumb, Form } from 'antd';

export const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`;
export const UserLeftWrapper = styled.div`
  width: 20%;
`;
export const UserRightWrapper = styled.div`
  width: 80%;
  padding-right: 15px;
`;

export const SystemAdvanceSearchWrapper = styled.div`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.bgWhite};
  border-radius: 6px;
  position: relative;
  background: #fff;

  .ant-form-item {
    margin-bottom: 8px;
  }
`;

export const ButtonCloseAdvanceSearch = styled.div`
  position: absolute;
  right: -12px;
`;

export const BreadcrumbWrapper = styled(Breadcrumb)`
  margin-bottom: 16px;
`;

export const FormDetailWrapper = styled(Form)`
  .ant-form-item-label label {
    font-weight: 600;
  }
`;
