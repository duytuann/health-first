import { Form } from 'antd';
import styled from 'styled-components/macro';
export const FormDetailWrapper = styled(Form)`
    .ant-form-item-label label {
        font-weight: 600;
    }
`;
export const TabRoleWrapper = styled.div`
    padding: 10px 16px;
    background: var(--color-border-2);
    border-radius: 6px;
    margin-bottom: 10px;
    text-align: left;
    background: #f2f2f2;

    .tab-role-name {
        font-weight: 600;
        margin-bottom: 5px;
        font-size: 13px;
    }

    .tab-role-list {
        margin-left: 8px;
    }

    .ant-checkbox-wrapper {
        width: max-content;
        margin-bottom: 3px;
    }
`;

function a(x: number, y: string) {
    console.log(x);
}
