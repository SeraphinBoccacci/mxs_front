import styled from "styled-components";

import { fonts } from "../../../../../../constants/index";

interface TableBodyProps {}

export const TableBody = styled.div<TableBodyProps>`
  font-size: 0.8rem;
  font-family: ${fonts.Ubuntu};
  text-align: center;
`;
