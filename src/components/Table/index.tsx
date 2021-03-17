import React from "react";

import { Paper, StyledTable, TableContainer } from "./style";
import Body from "./TableBody";
import { Row, RowNest } from "./TableBody/TableRow";
import Header from "./TableHeader";

export interface Column {
  id: string;
  label: string;
  filterable?: boolean;
  sortable?: boolean;
  width: number;
  align?: "left" | "center" | "right" | "justify" | "inherit";
}

export const computeColumnWidth = (totalWidth: number, columnWidth: number) => {
  return Math.floor((columnWidth / (totalWidth * 1)) * 100);
};

interface TableProps {
  columns: Column[];
  rows: (Row | RowNest)[];
  withHeader?: boolean;
}

type SelectableTableProps = TableProps & {
  isSelectable: boolean;
  onSelect: (rows: Row[]) => void;
  selectedRows: Row[];
};

const isSelectableTable = (
  tableProps: TableProps | SelectableTableProps
): tableProps is SelectableTableProps =>
  !!(tableProps as SelectableTableProps).isSelectable;

const Table = (props: TableProps | SelectableTableProps) => {
  const { columns, rows, withHeader = true } = props;

  if (isSelectableTable(props)) {
    const { onSelect, selectedRows } = props;

    return (
      <Paper elevation={3}>
        <TableContainer>
          <StyledTable stickyHeader>
            {withHeader && (
              <Header
                rows={rows}
                isSelectable
                columns={columns}
                onSelect={onSelect}
                selectedRows={selectedRows}
              ></Header>
            )}
            <Body
              rows={rows}
              columns={columns}
              isSelectable
              onSelect={onSelect}
              selectedRows={selectedRows}
            ></Body>
          </StyledTable>
        </TableContainer>
      </Paper>
    );
  }

  return (
    <Paper elevation={3}>
      <TableContainer>
        <StyledTable stickyHeader>
          {withHeader && <Header rows={rows} columns={columns}></Header>}
          <Body rows={rows} columns={columns}></Body>
        </StyledTable>
      </TableContainer>
    </Paper>
  );
};

export default Table;
