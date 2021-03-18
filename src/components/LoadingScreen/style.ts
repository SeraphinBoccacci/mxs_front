import styled from "styled-components";

import { colors } from "../../constants";

export const Screen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: ${colors.soft_black};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
