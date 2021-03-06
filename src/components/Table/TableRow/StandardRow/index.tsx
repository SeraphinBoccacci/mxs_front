import { Checkbox } from "@material-ui/core";
import React from "react";

import { Column } from "../../";
import {
  FirstTableCell,
  LastTableCell,
  TableCell as MaterialTableCell,
  TableRow as MaterialTableRow,
} from "../../style";
import { Row } from "../index";

interface TableRowProps {
  row: Row;
  columns: Column[];
  rowIndex: number;
}

type SelectableRowProps = TableRowProps & {
  isSelectable: boolean;
  selectedRows: Row[];
  handleOnChangeSelect: (row: Row) => void;
};

const isSelectableRow = (
  rowProps: TableRowProps | SelectableRowProps
): rowProps is SelectableRowProps =>
  !!(rowProps as SelectableRowProps).isSelectable;

const StandardRow = (rowProps: TableRowProps | SelectableRowProps) => {
  const { row, columns, rowIndex } = rowProps;

  const generateTableCell = (
    tablesCells: JSX.Element[],
    { id, align, width }: Column,
    index: number
  ) => {
    const getTableCell = () => {
      if (index === 0) return FirstTableCell;

      if (index === columns.length - 1) return LastTableCell;

      return MaterialTableCell;
    };

    const TableCell = getTableCell();

    const tableCellContent = row[id];

    const style = row.style
      ? { ...(row.style as object), width: `${width}%` }
      : { width: `${width}%` };

    return [
      ...tablesCells,
      <TableCell
        style={style}
        align={align || "left"}
        key={`row_${rowIndex}_${id}`}
      >
        {tableCellContent || "-"}
      </TableCell>,
    ];
  };

  const generateRows = () => {
    if (isSelectableRow(rowProps)) {
      const { selectedRows, handleOnChangeSelect } = rowProps;

      return (
        <>
          <MaterialTableCell colSpan={1}>
            <Checkbox
              color="default"
              checked={selectedRows.some(({ id: rowId }) => rowId === row.id)}
              onChange={() => handleOnChangeSelect(row)}
            ></Checkbox>
          </MaterialTableCell>
          {columns.reduce(generateTableCell, [])}
        </>
      );
    }

    return columns.reduce(generateTableCell, []);
  };

  const style = row.style
    ? {
        ...(row.style as object),
        marginBottom: "3rem",
      }
    : { marginBottom: "3rem" };

  return (
    <MaterialTableRow style={style} key={`tableRow_${rowIndex}`}>
      {generateRows()}
    </MaterialTableRow>
  );
};

export default StandardRow;
