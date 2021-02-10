import styled from "styled-components";
import { colors, colorsV2 } from "../../constants";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 30;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${colorsV2.primary};
  width: 100%;
  height: 5rem;

  padding: 0 10%;
`;
