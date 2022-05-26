import styled from 'styled-components/macro';
export const SystemAdvanceSearchWrapper = styled.div`
    width: 100%;
    padding: 10px 16px;
    background: ${({ theme }) => theme.white};
    border-radius: 6px;
    position: relative;
    background: #fff;
    width: calc(100% - 100px);

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

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ebecf0;
`;
