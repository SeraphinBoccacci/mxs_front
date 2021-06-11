import styled from "styled-components";

import { colors } from "../../constants";

interface SliderInputContainerProps {
  width?: string;
}

export const SliderInputContainer = styled.div<SliderInputContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: ${({ width }) => width};
  height: max-content;
  margin: 2.5rem 0 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  background: ${colors.secondary};
`;

export const Label = styled.div`
  color: ${colors.soft_black};
`;
