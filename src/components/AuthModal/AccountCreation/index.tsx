import React, { useCallback, useContext, useState } from "react";

import { useForm } from "../../../hooks/useForm";
import { createAccount } from "../../../services/auth";
import { useAuth } from "../../AuthContext";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import Input from "../../Input";
import { ModalKinds } from "..";
import {
  Button,
  ChangeModePhrase,
  ChangeModeSpan,
  ConnectionForm,
  Inputs,
} from "../style";
import { FormTitle } from "../style";
interface AccountCreationProps {
  handleClose: () => void;
  setModalKind: (modalKind: ModalKinds) => void;
}

export const AccountCreation = ({ setModalKind }: AccountCreationProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setHerotag } = useAuth();
  const { handleError } = useContext(ErrorHandlingContext);

  const [formData, setFormData] = useForm<{
    herotag?: string;
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
        if (!formData.herotag || !formData.password || !formData.confirm)
          throw new Error("INVALID_FORM");

        const resData = await createAccount(
          formData.herotag,
          formData.password,
          formData.confirm
        );

        if (resData?.herotag) {
          setIsSubmitting(false);
          setHerotag(formData.herotag);
          setModalKind(ModalKinds.PendingVerification);
        } else throw new Error("ACCOUNT_CREATION_FAILED");
      } catch (error) {
        handleError(error.message);
        setIsSubmitting(false);
      }
    },
    [
      formData.confirm,
      formData.herotag,
      formData.password,
      handleError,
      setModalKind,
      setHerotag,
    ]
  );

  const handleClickAccountConnection = useCallback(() => {
    setModalKind(ModalKinds.Login);
  }, [setModalKind]);

  return (
    <>
      <FormTitle>Account Creation</FormTitle>
      <ConnectionForm onSubmit={handleSubmit}>
        <Inputs>
          <Input
            tooltipText="Your herotag is the username you set when you registered on Maiar."
            value={formData.herotag}
            inputName="herotag"
            inputLabel="Herotag"
            onChange={handleOnChange}
            isDisabled={isSubmitting}
            autoComplete="off"
            endAdornment=".elrond"
          ></Input>

          <Input
            value={formData.password}
            inputName="password"
            inputLabel="password"
            onChange={handleOnChange}
            isDisabled={isSubmitting}
            type="password"
            autoComplete="off"
          ></Input>
          <Input
            value={formData.confirm}
            inputName="confirm"
            inputLabel="Password Confirmation"
            onChange={handleOnChange}
            isDisabled={isSubmitting}
            type="password"
            autoComplete="off"
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
      <ChangeModePhrase>
        You are already have an account?
        <ChangeModeSpan onClick={handleClickAccountConnection}>
          Connect!
        </ChangeModeSpan>
      </ChangeModePhrase>
    </>
  );
};
