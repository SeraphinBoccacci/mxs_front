import MaterialTableCell from "@material-ui/core/TableCell";
import styled from "styled-components";

import { fonts } from "../../../../constants";

export const HeaderTableCell = styled(MaterialTableCell)`
  padding: 10px 4px !important;
  font-size: 0.9rem !important;
  font-family: ${fonts.Roboto} !important;

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
