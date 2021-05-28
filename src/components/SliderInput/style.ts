import styled from "styled-components";

import { colors } from "../../constants";

interface SliderInputContainerProps {
  width?: string;
}

export const SliderInputContainer = styled.div<SliderInputContainerProps>`
  height: max-content;
  width: ${({ width }) => width};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background: ${colors.secondary};
  padding: 1rem 2rem;
  margin: 2.5rem 0 0.5rem;

  border-radius: 0.4rem;
`;

export const Label = styled.div`
  color: ${colors.soft_black};
`;
