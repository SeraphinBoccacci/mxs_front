import React, { ReactNode } from "react";

import { Column } from "../..";
import CollapseRow from "./CollapseRow";
import StandardRow from "./StandardRow";

export interface Style {
  backgroundColor: string;
  color: string;
}

export type Row = { [key: string]: string | ReactNode | Style; id: string };

export type RowNest = Row & {
  rows: Row[];
};

export const isRowNest = (row: Row | RowNest): row is RowNest => !!row.rows;

interface TableRowProps {
  row: Row | RowNest;
  columns: Column[];
  rowIndex: number;
  headerText?: string;
  onHeaderTextChange?: (updatedHeaderText: string) => void;
}

type SelectableRowProps = TableRowProps & {
  isSelectable: boolean;
  selectedRows: Row[];
  handleOnChangeSelect: (row: Row) => void;
  setSelectedRows: (rows: Row[]) => void;
};

const isSelectableRow = (
  rowProps: TableRowProps | SelectableRowProps
): rowProps is SelectableRowProps =>
  !!(rowProps as SelectableRowProps).isSelectable;

const TableRow = (rowProps: TableRowProps | SelectableRowProps) => {
  const { row, columns, rowIndex, headerText, onHeaderTextChange } = rowProps;

  if (isRowNest(row)) {
    if (isSelectableRow(rowProps)) {
      const { selectedRows, handleOnChangeSelect } = rowProps;

      return (
        <CollapseRow
          rowIndex={rowIndex}
          rows={row.rows}
          columns={columns}
          selectedRows={selectedRows}
          isSelectable
          handleOnChangeSelect={handleOnChangeSelect}
          headerText={headerText}
          onHeaderTextChange={onHeaderTextChange}
        ></CollapseRow>
      );
    }
    return (
      <CollapseRow
        rowIndex={rowIndex}
        rows={row.rows}
        columns={columns}
        headerText={headerText}
        onHeaderTextChange={onHeaderTextChange}
      ></CollapseRow>
    );
  }

  if (isSelectableRow(rowProps)) {
    const { selectedRows, handleOnChangeSelect } = rowProps;

    return (
      <StandardRow
        row={row}
        rowIndex={rowIndex}
        columns={columns}
        isSelectable
        selectedRows={selectedRows}
        handleOnChangeSelect={handleOnChangeSelect}
      ></StandardRow>
    );
  }

  return (
    <StandardRow row={row} rowIndex={rowIndex} columns={columns}></StandardRow>
  );
};

export default TableRow;
