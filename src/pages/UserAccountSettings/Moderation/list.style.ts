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
  align-items: center;
  justify-content: space-evenly;
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
  overflow: hidden;
  width: max-content;
  max-width: 100%;
  margin: 0.4rem 0.2rem;
  color: ${({ isFocused }) =>
    isFocused ? `${colors.secondary}44` : colors.secondary};
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s;
`;

export const Delete = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${colors.secondary};
  transform: translate(-50%, -50%);
`;
