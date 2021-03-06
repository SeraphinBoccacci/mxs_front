import MaterialPaper from "@material-ui/core/Paper";
import MaterialTable from "@material-ui/core/Table";
import MaterialTableCell from "@material-ui/core/TableCell";
import MaterialTableContainer from "@material-ui/core/TableContainer";
import MaterialTableRow from "@material-ui/core/TableRow";
import styled from "styled-components";

import { colors, fonts } from "../../constants";

export const Paper = styled(MaterialPaper)`
  margin: 0 auto !important;
  width: 100% !important;

  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%) !important;

  overflow: hidden !important;
`;

export const TableContainer = styled(MaterialTableContainer)`
  max-height: 30rem !important;
`;

export const StyledTable = styled(MaterialTable)`
  border-collapse: separate;
  border-spacing: 0 8px !important;
`;

export const TableRow = styled(MaterialTableRow)`
  padding: 0 20px !important;
`;

export const HeaderTableRow = styled(MaterialTableRow)`
  background-color: ${colors.primary} !important;
  padding: 0 20px !important;

  height: 4rem !important;
`;

export const HeaderTableCell = styled(MaterialTableCell)`
  padding: 10px 4px !important;
  font-family: ${fonts.Roboto} !important;
  font-size: 0.9rem !important;

  &:last-child {
    padding: 6px 20px 6px 4px !important;
  }
`;

export const FirstHeaderTableCell = styled(HeaderTableCell)`
  padding: 6px 4px 6px 20px !important;
`;

export const LastHeaderTableCell = styled(HeaderTableCell)`
  padding: 6px 20px 6px 4px !important;
`;

export const TableCell = styled(MaterialTableCell)`
  padding: 4px 1px !important;
  height: 4rem !important;
  font-family: ${fonts.Ubuntu} !important;
  font-size: 0.9rem !important;

  &:last-child {
    padding: 6px 20px 6px 4px !important;
  }
`;

export const FirstTableCell = styled(HeaderTableCell)`
  padding: 6px 4px 6px 20px !important;
`;

export const LastTableCell = styled(HeaderTableCell)`
  padding: 6px 20px 6px 4px !important;
`;
