import {
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableRow as MaterialTableRow,
  TextField,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import React, { useCallback, useEffect, useState } from "react";

import { Column } from "../../..";
import { Row } from "../index";
import StandardRow from "../StandardRow";
import { StyledTableHeader } from "./style";

interface CollapseRowProps {
  rows: Row[];
  columns: Column[];
  rowIndex: number;
  headerText?: string;
  onHeaderTextChange?: (updatedHeaderText: string) => void;
}

type SelectableRowProps = CollapseRowProps & {
  isSelectable: boolean;
  selectedRows: Row[];
  handleOnChangeSelect: (row: Row) => void;
};

const isSelectableRow = (
  rowProps: CollapseRowProps | SelectableRowProps
): rowProps is SelectableRowProps =>
  !!(rowProps as SelectableRowProps).isSelectable;

const CollapseRow = (rowProps: CollapseRowProps | SelectableRowProps) => {
  const [open, setOpen] = useState(false);
  const [headerValue, setHeaderValue] = useState("");
  const { rows, columns, rowIndex, headerText, onHeaderTextChange } = rowProps;

  useEffect(() => {
    setHeaderValue(headerText || "");
  }, [headerText]);

  useEffect(() => setOpen(false), [rows]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setHeaderValue(event.target.value);

      if (onHeaderTextChange) onHeaderTextChange(event.target.value);
    },
    [onHeaderTextChange]
  );

  const generateNestedRows = () => {
    if (isSelectableRow(rowProps)) {
      const { isSelectable, selectedRows, handleOnChangeSelect } = rowProps;

      return rows.map((row: Row, rowIndex: number) => (
        <StandardRow
          key={Array.isArray(row) ? `collapse_row_${rowIndex}` : row.id}
          row={row}
          isSelectable={isSelectable}
          handleOnChangeSelect={handleOnChangeSelect}
          selectedRows={selectedRows}
          rowIndex={rowIndex}
          columns={columns}
        ></StandardRow>
      ));
    }

    return rows.map((row: Row, rowIndex: number) => (
      <StandardRow
        key={Array.isArray(row) ? `collapse_row_${rowIndex}` : row.id}
        row={row}
        rowIndex={rowIndex}
        columns={columns}
      ></StandardRow>
    ));
  };

  return (
    <>
      <StyledTableHeader rowindex={rowIndex}>
        <TableCell colSpan={1}>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell colSpan={isSelectableRow(rowProps) ? 4 : 3}>
          {!!onHeaderTextChange ? (
            <TextField
              onChange={handleChange}
              placeholder="Collapse Name"
              value={headerValue}
            ></TextField>
          ) : (
            headerText
          )}
        </TableCell>
        <TableCell colSpan={4} align="left">
          Variations: {rows.length}
        </TableCell>
      </StyledTableHeader>
      <MaterialTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={11}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table>
              <TableBody>{generateNestedRows()}</TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </MaterialTableRow>
    </>
  );
};

export default CollapseRow;
