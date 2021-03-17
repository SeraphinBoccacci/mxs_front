import React from "react";

import { Column, computeColumnWidth } from "../..";
import {
  FirstHeaderTableCell,
  HeaderTableCell,
  LastHeaderTableCell,
} from "./style";

interface CellProps {
  columns: Column[];
  column: Column;
  cellIndex: number;
}

const Cell = ({
  columns,
  column: { label, width, align },
  cellIndex,
}: CellProps) => {
  const totalWidth = columns.reduce((acc, { width }) => acc + width, 0);

  const getTableCell = () => {
    if (cellIndex === 0) return FirstHeaderTableCell;

    if (cellIndex === columns.length - 1) return LastHeaderTableCell;

    return HeaderTableCell;
  };

  const TableCell = getTableCell();

  return (
    <TableCell
      style={{
        width: `${computeColumnWidth(totalWidth, width)}%`,
      }}
      align={align}
    >
      {label}
    </TableCell>
  );
};

export default Cell;
