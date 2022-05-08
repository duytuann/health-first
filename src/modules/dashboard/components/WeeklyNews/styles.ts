import styled from 'styled-components/macro';
export const DailyNewsWrapper = styled.div`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.white};
  border-radius: 6px;
  background: #fff;
`;

export const Table = styled.table`
  width: 100%;
  border: 2px solid #ebecf0;
`;

export const TableHeaderContainer = styled.tr`
  height: 45px;
  background-color: #05a7ef;
  color: #fff;
`;

export const TableHeader = styled.th<{ width?: string }>`
  table-layout: fixed;
  width: ${props => props.width};
  border: 2px solid #ebecf0;
  text-align: center;
`;

export const TableRow = styled.tr`
  height: 40px;
  background-color: #e8f7fe;

  tr:hover {
    backgroud: #fdefdb;
  }
`;

export const TableData = styled.td`
  border: 2px solid #ebecf0;
`;

export const Content = styled.div`
  overflow-wrap: 'break-word';
  text-align: center;
  padding: 5px;
`;
