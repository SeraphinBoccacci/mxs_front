import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import { uniq } from "lodash";
import React, { useCallback, useState } from "react";

import { useAuth } from "../../../../components/AuthContext";
import Input from "../../../../components/Input";
import {
  Delete,
  Form,
  ListContainer,
  StyledButton,
  Word,
  WordsContainer,
} from "../list.style";

interface ListProps {
  elements: string[];
  addElement: (userId: string, element: string) => Promise<void>;
  removeElement: (userId: string, element: string) => Promise<void>;
  displayInColumn?: boolean;
}

const List = ({
  displayInColumn,
  elements,
  addElement,
  removeElement,
}: ListProps) => {
  const [words, setWords] = useState(elements);
  const [wordToAdd, setWordToAdd] = useState("");
  const [focusedWord, setFocusedWord] = useState("");
  const { user } = useAuth();

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (!!wordToAdd) {
        setWords(uniq([...words, wordToAdd]));

        await addElement(user?._id as string, wordToAdd);
      }

      setWordToAdd("");
    },
    [setWords, words, wordToAdd, addElement, user]
  );

  const onChange = useCallback(
    (event: any) => {
      setWordToAdd(event.target.value);
    },
    [setWordToAdd]
  );

  const removeWord = useCallback(
    async (word) => {
      setWords((prev) => prev.filter((prevWord) => prevWord !== word));

      await removeElement(user?._id as string, word);
    },
    [setWords, removeElement, user]
  );

  return (
    <ListContainer>
      <WordsContainer>
        {words.map((word, index) => (
          <Word
            key={`${word}-${index}`}
            onMouseEnter={() => setFocusedWord(word)}
            onMouseLeave={() => setFocusedWord("")}
            isFocused={focusedWord === word}
            displayInColumn={displayInColumn}
          >
            {`${word}; `}
            {focusedWord === word && (
              <Delete onClick={() => removeWord(word)}>
                <DeleteForeverRoundedIcon fontSize="small"></DeleteForeverRoundedIcon>
              </Delete>
            )}
          </Word>
        ))}
      </WordsContainer>
      <Form onSubmit={onSubmit}>
        <Input
          inputName="word-list"
          inputLabel="Word"
          onChange={onChange}
          value={wordToAdd}
          width="10rem"
        ></Input>
        <StyledButton type="submit" variant="outlined" color="secondary">
          Add
        </StyledButton>
      </Form>
    </ListContainer>
  );
};

export default List;
