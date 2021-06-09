import React, { useCallback, useContext, useState } from "react";

import { useForm } from "../../../hooks/useForm";
import { editPassword } from "../../../services/auth";
import { useAuth } from "../../AuthContext";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import Input from "../../Input";
import { ModalKinds } from "..";
import { HerotagInput } from "../HerotagInput";
import {
  Button,
  ChangeModePhrase,
  ChangeModeSpan,
  ConnectionForm,
  Inputs,
} from "../style";
import { FormTitle } from "../style";
interface PasswordEditProps {
  setModalKind: (modalKind: ModalKinds) => void;
  isOnlyPasswordEdit?: boolean;
}

export const PasswordEdit = ({
  setModalKind,
  isOnlyPasswordEdit,
}: PasswordEditProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { herotag } = useAuth();
  const { handleError } = useContext(ErrorHandlingContext);

  const [formData, setFormData] = useForm<{
    password?: string;
    confirm?: string;
  }>({});

  const handleOnChange = useCallback(
    (data) => {
      setFormData(data);
    },
    [setFormData]
  );

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
    [herotag, setModalKind, formData.confirm, formData.password, handleError]
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
          <Input
            type="password"
            inputName="password"
            inputLabel="Password"
            value={formData.password}
            isDisabled={isSubmitting}
            onChange={handleOnChange}
            autoComplete="off"
            centered
            width="13rem"
          ></Input>
          <Input
            type="password"
            inputName="confirm"
            inputLabel="Confirmation"
            value={formData.confirm}
            isDisabled={isSubmitting}
            onChange={handleOnChange}
            autoComplete="off"
            centered
            width="13rem"
          ></Input>
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
