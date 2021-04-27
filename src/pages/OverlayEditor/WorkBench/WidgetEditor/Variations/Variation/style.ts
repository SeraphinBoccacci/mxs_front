import styled from "styled-components";

import { fonts } from "../../../../../../constants";
import { invertColor } from "../../../../../../utils/color";

interface ContainerProps {
  background: string;
}

export const ContainerRow = styled.div<ContainerProps>`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-spacing: 0;

  width: 100%;
  height: 2.3rem;

  margin: 0.2rem 0;
  padding: 0 0.5rem;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
  border-radius: 7px;
  background-color: ${({ background }) => background};
  color: ${({ background }) => invertColor(background)};
`;

export const CellGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: max-content;
  height: 2.3rem;
`;

export const Cell = styled.div`
  font-size: 0.8rem;
  font-family: ${fonts.Ubuntu};

  padding: 0.5rem;

  & > button {
    min-width: 32px;
    padding: 0;
  }
`;

export const VariationName = styled(Cell)`
  text-align: left;
  width: 30%;
`;

export const RequiredAmount = styled(Cell)`
  text-align: center;
  width: 15%;
`;

export const Chances = styled(Cell)`
  text-align: center;
  width: 15%;
`;

export const Actions = styled(Cell)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 2rem;

  text-align: center;
  width: 40%;
  height: 2.3rem;
`;
