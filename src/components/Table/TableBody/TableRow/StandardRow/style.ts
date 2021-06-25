import MaterialTableCell from "@material-ui/core/TableCell";
import MaterialTableRow from "@material-ui/core/TableRow";
import styled from "styled-components";

import { fonts } from "../../../../../constants";
import { HeaderTableCell } from "../../../TableHeader/TableCell/style";

export const TableRow = styled(MaterialTableRow)`
  padding: 0 20px !important;
`;

export const TableCell = styled(MaterialTableCell)`
  height: 4rem !important;
  padding: 4px 1px !important;
  font-size: 0.9rem !important;
  font-family: ${fonts.Ubuntu} !important;

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
