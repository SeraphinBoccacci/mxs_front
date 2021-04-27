import styled from "styled-components";

import { fonts } from "../../../../../../constants/index";

interface TableBodyProps {}

export const TableBody = styled.div<TableBodyProps>`
  font-family: ${fonts.Ubuntu};
  font-size: 0.8rem;

  text-align: center;
`;
