import styled from "styled-components";

import { colors } from "../../constants";

export const StyledLabLayoutContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

export const StyledLabLayoutContent = styled.div`
  overflow: hidden;
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  padding-top: 5rem;
  background-color: ${colors.soft_black};
`;
