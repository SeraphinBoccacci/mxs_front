import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import { useHistory } from "react-router-dom";

import { editPassword } from "../../../services/auth";
import { useAuth } from "../../AuthContext";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import { ModalKinds } from "..";
import { HerotagInput } from "../HerotagInput";
import {
  Button,
  ChangeModePhrase,
  ChangeModeSpan,
  ConnectionForm,
  Inputs,
  Password,
} from "../style";
import { FormTitle } from "../style";
interface PasswordEditProps {
  setModalKind: (modalKind: ModalKinds) => void;
  isOnlyPasswordEdit?: boolean;
}

interface ReducerState {
  herotag?: string;
  password?: string;
  confirm?: string;
}

export const PasswordEdit = ({
  setModalKind,
  isOnlyPasswordEdit,
}: PasswordEditProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { herotag } = useAuth();
  const { handleError } = useContext(ErrorHandlingContext);

  const history = useHistory();

  const formReducer = (
    state: ReducerState,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsSubmitting(true);

      try {
        if (!formData.password || !formData.confirm)
          throw new Error("INVALID_FORM");

        await editPassword(
          herotag as string,
          formData.password,
          formData.confirm
        );

        setIsSubmitting(false);

        setModalKind(ModalKinds.PendingVerification);
      } catch (error) {
        handleError(error.message);
        setIsSubmitting(false);
      }
    },
    [formData.confirm, formData.password, history, handleError]
  );

  const handleClickAccountConnection = useCallback(() => {
    setModalKind(ModalKinds.Login);
  }, [setModalKind]);

  if (!herotag)
    return (
      <HerotagInput
        isOnlyPasswordEdit={isOnlyPasswordEdit}
        setModalKind={setModalKind}
      ></HerotagInput>
    );

  return (
    <>
      <FormTitle>Password Edit</FormTitle>
      <ConnectionForm onSubmit={handleSubmit}>
        <Inputs>
          <Password
            type="password"
            name="password"
            placeholder="New Password"
            onChange={setFormData}
            disabled={isSubmitting}
          ></Password>
          <Password
            type="password"
            name="confirm"
            placeholder="Confirmation"
            onChange={setFormData}
            disabled={isSubmitting}
          ></Password>
        </Inputs>
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </ConnectionForm>
      {isOnlyPasswordEdit ? (
        <div></div>
      ) : (
        <ChangeModePhrase>
          <ChangeModeSpan onClick={handleClickAccountConnection}>
            Return to connection
          </ChangeModeSpan>
        </ChangeModePhrase>
      )}
    </>
  );
};
