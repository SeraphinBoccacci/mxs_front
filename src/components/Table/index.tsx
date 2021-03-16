import { Checkbox } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import { flatten } from "lodash";
import React from "react";

import {
  FirstHeaderTableCell,
  HeaderTableCell,
  HeaderTableRow,
  LastHeaderTableCell,
  Paper,
  StyledTable,
  TableContainer,
} from "./style";
import TableRow, { Row, RowNest } from "./TableRow";

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
  const totalWidth = columns.reduce((acc, { width }) => acc + width, 0);

  const generateHeaderTableCell = (
    { label, id, width, align }: Column,
    index: number
  ) => {
    const getTableCell = () => {
      if (index === 0) return FirstHeaderTableCell;

      if (index === columns.length - 1) return LastHeaderTableCell;

      return HeaderTableCell;
    };

    const TableCell = getTableCell();

    return (
      <TableCell
        style={{
          width: `${computeColumnWidth(totalWidth, width)}%`,
        }}
        key={id}
        align={align}
      >
        {label}
      </TableCell>
    );
  };

  const generateHeader = () => {
    if (isSelectableTable(props)) {
      const { onSelect, selectedRows } = props;

      const handleOnChangeSelectAll = () => {
        if (flatten(selectedRows).length !== flatten(rows).length) {
          onSelect(rows as Row[]);
        } else {
          onSelect([]);
        }
      };

      return withHeader ? (
        <TableHead>
          <HeaderTableRow>
            <HeaderTableCell colSpan={1}>
              <Checkbox
                style={{ display: "none" }}
                color="default"
                checked={flatten(selectedRows).length === flatten(rows).length}
                onChange={handleOnChangeSelectAll}
              ></Checkbox>
            </HeaderTableCell>
            {columns.map(generateHeaderTableCell)}
          </HeaderTableRow>
        </TableHead>
      ) : null;
    }

    return withHeader ? (
      <TableHead>
        <HeaderTableRow>{columns.map(generateHeaderTableCell)}</HeaderTableRow>
      </TableHead>
    ) : null;
  };

  const generateTableBody = () => {
    if (isSelectableTable(props)) {
      const { isSelectable, onSelect, selectedRows } = props;

      const handleOnChangeSelect = (row: Row) => {
        if (selectedRows.some(({ id: rowId }) => rowId === row.id)) {
          onSelect(selectedRows.filter(({ id: rowId }) => rowId !== row.id));
        } else {
          onSelect([...selectedRows, row]);
        }
      };

      return (
        <TableBody>
          {rows.map((row: Row | RowNest, rowIndex: number) => (
            <TableRow
              key={`table_row_${rowIndex}`}
              row={row}
              headerText={
                !Array.isArray(row) && row.headerText
                  ? (row.headerText as string)
                  : undefined
              }
              onHeaderTextChange={
                !Array.isArray(row) && row.onHeaderTextChange
                  ? (row.onHeaderTextChange as (s: string) => void)
                  : undefined
              }
              isSelectable={isSelectable}
              handleOnChangeSelect={handleOnChangeSelect}
              setSelectedRows={onSelect}
              selectedRows={selectedRows}
              rowIndex={rowIndex}
              columns={columns}
            ></TableRow>
          ))}
        </TableBody>
      );
    }

    return (
      <TableBody>
        {rows.map((row: Row | RowNest, rowIndex: number) => (
          <TableRow
            key={`table_row_${rowIndex}`}
            row={row}
            headerText={
              !Array.isArray(row) && row.headerText
                ? (row.headerText as string)
                : undefined
            }
            onHeaderTextChange={
              !Array.isArray(row) && row.onHeaderTextChange
                ? (row.onHeaderTextChange as (e: string) => void)
                : undefined
            }
            rowIndex={rowIndex}
            columns={columns}
          ></TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <Paper elevation={3}>
      <TableContainer>
        <StyledTable stickyHeader>
          {generateHeader()}
          {generateTableBody()}
        </StyledTable>
      </TableContainer>
    </Paper>
  );
};

export default Table;
