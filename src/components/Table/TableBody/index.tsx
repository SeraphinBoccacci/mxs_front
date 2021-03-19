import { TableBody } from "@material-ui/core";
import React from "react";

import { Column } from "..";
import TableRow, { Row, RowNest } from "./TableRow";

interface BodyProps {
  rows: (Row | RowNest)[];
  columns: Column[];
}

type SelectableBodyProps = BodyProps & {
  isSelectable: boolean;
  onSelect: (rows: (Row | RowNest)[]) => void;
  selectedRows: Row[];
};

const isSelectableBody = (
  tableProps: BodyProps | SelectableBodyProps
): tableProps is SelectableBodyProps =>
  !!(tableProps as SelectableBodyProps).isSelectable;

const Body = (props: BodyProps | SelectableBodyProps) => {
  const { rows, columns } = props;

  if (isSelectableBody(props)) {
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

export default Body;
