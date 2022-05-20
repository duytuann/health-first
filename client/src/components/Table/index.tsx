import * as React from 'react';
import { TableProps } from 'antd';
import { TableContentWrapper } from './styles';

interface ITableProps {}

const Table: React.FC<TableProps<ITableProps>> = props => {
  return <TableContentWrapper {...props} />;
};
export default Table;
