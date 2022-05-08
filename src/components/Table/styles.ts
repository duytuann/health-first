import styled from 'styled-components';
import { Table } from 'antd';
export const TableHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  justify-content: space-between;

  .table-heading {
    font-size: 18px;
    color: ${({ theme }) => theme.primaryColor};
    font-weight: 600;
    text-transform: uppercase;
  }
`;
export const TableContentWrapper = styled(Table)`
  .ant-table-thead > tr > th {
    background: ${({ theme }) => theme.primaryColor};
    color: white;
    font-weight: 600;
    text-align: center;
  }

  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    height: 3.7em;
    background-color: rgb(123 123 123);
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid ${({ theme }) => theme.tdborder};
    transition: background 0.3s;
    border-right: 1px solid ${({ theme }) => theme.tdborder};
  }

  .row-inactive {
    background-color: ${({ theme }) => theme.rowInactiveColor};
  }
  .ant-table-row-level-0:hover {
    .float-action__wrapper {
      display: inline-flex;
    }
  }
  .ant-table-tbody > tr:hover {
    .float-action__wrapper {
      min-width: 80px;
      display: inline-flex;
    }
  }
`;
export const MainTableData = styled.div``;

export const SubTableData = styled.div`
  font-style: italic;
  color: #999;
  font-size: 13px;
`;
