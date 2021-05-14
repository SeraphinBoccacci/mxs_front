import styled from "styled-components";

import { StyledContainer } from "../styles.alerts";

export const Container = styled(StyledContainer)`
  position: unset;
  top: unset;
  left: unset;
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
  margin: 0;
  padding: 0;
`;

export const StyledImageScreen = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
