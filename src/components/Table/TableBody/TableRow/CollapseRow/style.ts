import { TableRow as MaterialTableRow } from "@material-ui/core";
import styled from "styled-components";

import { colors } from "../../../../../constants";

export const StyledTableHeader = styled(MaterialTableRow)<{ rowindex: number }>`
  width: 100% !important;
  height: 2.5rem !important;

  background-color: ${({ rowindex }) =>
    rowindex % 2 === 0
      ? `${colors.primary} !important`
      : `${colors.third} !important`};
`;
