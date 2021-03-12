import { Tooltip } from "@material-ui/core";
import React, { ChangeEvent, useCallback, useContext, useState } from "react";

import { submitHerotag } from "../../../services/auth";
import { useAuth } from "../../AuthContext";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import { ModalKinds } from "..";
import {
  Button,
  ChangeModePhrase,
  ChangeModeSpan,
  ConnectionForm,
  Herotag,
  Inputs,
} from "../style";
import { FormTitle } from "../style";

interface HerotagInputProps {
  setModalKind: (modalKind: ModalKinds) => void;
  isOnlyPasswordEdit?: boolean;
}

export const HerotagInput = ({
  setModalKind,
  isOnlyPasswordEdit,
}: HerotagInputProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [herotagInput, setHerotagInput] = useState("");
  const { handleError } = useContext(ErrorHandlingContext);
  const { setHerotag } = useAuth();

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setHerotagInput(event.target.value);
    },
    [setHerotagInput]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsSubmitting(true);

      try {
        if (!herotagInput) throw new Error("INVALID_FORM");

        const submittedHerotag = await submitHerotag(herotagInput);

        if (!submittedHerotag)
          throw new Error("ACCOUNT_NOT_PENDING_VERIFICATION");

        setIsSubmitting(false);
        setHerotag(herotagInput);
      } catch (error) {
        handleError(error.message);
        setIsSubmitting(false);
        setHerotagInput("");
      }
    },
    [setIsSubmitting, herotagInput, setModalKind]
  );

  const handleClickAccountConnection = useCallback(() => {
    setModalKind(ModalKinds.Login);
  }, [setModalKind]);

  return (
    <>
      <FormTitle>Your Herotag</FormTitle>
      <ConnectionForm onSubmit={handleSubmit}>
        <Inputs>
          <Tooltip
            placement="top"
            title="Your herotag is the username you set when you registered on Maiar."
          >
            <Herotag
              placeholder="Herotag"
              name="herotag"
              value={herotagInput}
              onChange={handleOnChange}
              disabled={isSubmitting}
            ></Herotag>
          </Tooltip>
        </Inputs>
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          disabled={isSubmitting || !herotagInput}
        >
          Submit
        </Button>
      </ConnectionForm>
      {isOnlyPasswordEdit ? (
        <div></div>
      ) : (
        <ChangeModePhrase>
          <ChangeModeSpan onClick={handleClickAccountConnection}>
            Go to connection
          </ChangeModeSpan>
        </ChangeModePhrase>
      )}
    </>
  );
};
