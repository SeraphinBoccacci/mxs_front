import styled from "styled-components";

import { colors } from "../../constants";

export const Screen = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.soft_black};
`;
