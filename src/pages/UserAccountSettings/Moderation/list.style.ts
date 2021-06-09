import { Button } from "@material-ui/core";
import styled from "styled-components";

import { colors } from "../../../constants";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: max-content;
`;

export const StyledButton = styled(Button)`
  width: 6rem;
  height: 2.7rem;
`;

export const WordsContainer = styled.div`
  margin: 1rem 0.5rem;
`;

interface WordProps {
  isFocused: boolean;
  displayInColumn?: boolean;
}

export const Word = styled.div<WordProps>`
  position: relative;
  display: ${({ displayInColumn }) =>
    displayInColumn ? "block" : "inline-block"};
  width: max-content;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 0.9rem;
  margin: 0.4rem 0.2rem;

  transition: 0.3s;

  cursor: pointer;

  color: ${({ isFocused }) =>
    isFocused ? `${colors.secondary}44` : colors.secondary};
`;

export const Delete = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  color: ${colors.secondary};
`;
