import styled from 'styled-components/macro';
export const SystemAdvanceSearchWrapper = styled.div`
    width: 100%;
    padding: 16px;
    background: ${({ theme }) => theme.white};
    border-radius: 6px;
    position: relative;
    background: #fff;
    border-bottom: 2px solid #ebecf0;

    .ant-form-item {
        margin-bottom: 8px;
    }
    .action {
        height: 100%;
        width: 30px;
        border-bottom: 0px;
        .ant-space-item {
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
`;
