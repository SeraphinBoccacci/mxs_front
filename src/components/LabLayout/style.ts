import styled from "styled-components";

import { colors } from "../../constants";

export const StyledLabLayoutContainer = styled.div`
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  overflow: hidden;

  padding: 0;
  margin: 0;
`;

export const StyledLabLayoutContent = styled.div`
  width: 100vw;
  height: max-content;
  min-height: 100vh;
  padding-top: 5rem;
  overflow: hidden;

  background-color: ${colors.soft_black};
`;
