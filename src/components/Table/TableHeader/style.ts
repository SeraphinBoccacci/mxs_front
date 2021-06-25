import MaterialTableRow from "@material-ui/core/TableRow";
import styled from "styled-components";

import { colors } from "../../../constants";

export const HeaderTableRow = styled(MaterialTableRow)`
  height: 4rem !important;
  padding: 0 20px !important;
  background-color: ${colors.primary} !important;
`;
