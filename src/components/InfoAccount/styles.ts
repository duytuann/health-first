import styled from 'styled-components/macro';

export const ContentInfoAccount = styled.div`
  width: 100%;
  height: 100%;
  .box-info {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .default-left {
      width: 20%;
      display: inline-block;
      text-align: right;
      padding-right: 5px;
    }
    .default-right {
      width: 20%;
      display: inline-block;
      text-align: left;
      padding-left: 5px;
    }
  }
  .box-department {
    text-align: center;
    width: 100%;
    margin-top: 30px;
    table {
      width: 100%;
      tr.head-title {
        border-bottom: 1px solid #e2e2e2;
      }
      tr.head-content {
        height: 40px;
      }
    }
  }
`;
