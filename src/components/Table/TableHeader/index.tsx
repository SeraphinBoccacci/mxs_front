import { Checkbox, TableHead } from "@material-ui/core";
import { flatten } from "lodash";
import React from "react";

import { Column } from "..";
import { Row, RowNest } from "../TableBody/TableRow";
import { HeaderTableRow } from "./style";
import Cell from "./TableCell";
import { HeaderTableCell } from "./TableCell/style";

interface HeaderProps {
  columns: Column[];
  rows: (Row | RowNest)[];
  withHeader?: boolean;
}

type SelectableHeaderProps = HeaderProps & {
  isSelectable: boolean;
  onSelect: (rows: Row[]) => void;
  selectedRows: Row[];
};

const isSelectableHeader = (
  tableProps: HeaderProps | SelectableHeaderProps
): tableProps is SelectableHeaderProps =>
  !!(tableProps as SelectableHeaderProps).isSelectable;

const Header = (props: HeaderProps | SelectableHeaderProps) => {
  const { rows, columns } = props;

  if (isSelectableHeader(props)) {
    const { onSelect, selectedRows } = props;

    const handleOnChangeSelectAll = () => {
      if (flatten(selectedRows).length !== flatten(rows).length) {
        onSelect(rows as Row[]);
      } else {
        onSelect([]);
      }
    };

    return (
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
          {columns.map((column, index) => (
            <Cell
              columns={columns}
              column={column}
              key={column.id}
              cellIndex={index}
            ></Cell>
          ))}
        </HeaderTableRow>
      </TableHead>
    );
  }

  return (
    <TableHead>
      <HeaderTableRow>
        {columns.map((column, index) => (
          <Cell
            columns={columns}
            column={column}
            key={column.id}
            cellIndex={index}
          ></Cell>
        ))}
      </HeaderTableRow>
    </TableHead>
  );
};

export default Header;
