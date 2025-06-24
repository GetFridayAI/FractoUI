import { SystemIconTypes } from './SystemIcon';
import { ReactElement } from 'react';

export interface TableProps {
  className?: string;
  hasSelect?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
  enableSort?: boolean;
  enableFilter?: boolean;
  showGrid?: boolean;
  headers: Array<TableHeader>;
  rows: Array<TableRow>;
}

export interface TableHeader {
  className?: string;
  headerName: string;
  hasIcon?: boolean;
  icon?: SystemIconTypes
}

export interface TableRow {
  className?: string;
  data: Array<string | number>;
}