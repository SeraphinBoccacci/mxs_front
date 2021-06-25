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
  width: 100%;
  height: 2.3rem;
  margin: 0.2rem 0;
  padding: 0 0.5rem;
  border-spacing: 0;
  border-radius: 7px;
  background-color: ${({ background }) => background};
  color: ${({ background }) => invertColor(background)};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
`;

export const CellGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  height: 2.3rem;
`;

export const Cell = styled.div`
  padding: 0.5rem;
  font-size: 0.8rem;
  font-family: ${fonts.Ubuntu};

  & > button {
    min-width: 32px;
    padding: 0;
  }
`;

export const VariationName = styled(Cell)`
  width: 30%;
  text-align: left;
`;

export const RequiredAmount = styled(Cell)`
  width: 15%;
  text-align: center;
`;

export const Chances = styled(Cell)`
  width: 15%;
  text-align: center;
`;

export const Actions = styled(Cell)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  height: 2.3rem;
  padding: 0 2rem;
  text-align: center;
`;

export const Visibility = styled(Cell)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5%;
  height: 2.3rem;
  padding: 0;
  cursor: pointer;

  & > img {
    height: 100%;
  }
`;
