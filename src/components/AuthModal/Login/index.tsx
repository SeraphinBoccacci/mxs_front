import React, { ChangeEvent, useCallback, useContext, useState } from "react";

import routes from "../../../constants/routes";
import { useForm } from "../../../hooks/useForm";
import { useHistoryWithQueryString } from "../../../hooks/useHistoryWithQuerystring";
import { authenticate } from "../../../services/auth";
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
  RecoveryActionCTA,
  RecoveryActionsCTAs,
} from "../style";
import { FormTitle } from "../style";
interface LoginProps {
  handleClose: () => void;
  setModalKind: (e: ModalKinds) => void;
}

export const Login = ({ handleClose, setModalKind }: LoginProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setTokenData, setHerotag } = useAuth();
  const { handleError } = useContext(ErrorHandlingContext);

  const [pushToHistory] = useHistoryWithQueryString();

  const [formData, setFormData] = useForm<{
    // herotag input should be named with 'username' in order to be understood by password managers
    username?: string;
    password?: string;
  }>({});

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsSubmitting(true);

      try {
        if (!formData.username || !formData.password)
          throw new Error("INVALID_FORM");

        const data = await authenticate(formData.username, formData.password);

        setIsSubmitting(false);

        if (data?.token) {
          setTokenData({
            token: data.token,
            expirationTimestamp: Date.now() + data.expiresIn * 1000,
          });

          setHerotag(formData.username);

          handleClose();

          pushToHistory(routes.userAccountSettings);
        } else throw new Error("AUTH_FAILED");
      } catch (error) {
        setIsSubmitting(false);

        if (error.message === "ACCOUNT_WITH_VERIFICATION_PENDING") {
          handleError(error.message, () => {
            setModalKind(ModalKinds.HerotagInput);
          });

          return;
        }

        handleError(error.message);
      }
    },
    [
      formData.username,
      formData.password,
      handleClose,
      pushToHistory,
      setTokenData,
      setIsSubmitting,
      setHerotag,
      handleError,
      setModalKind,
    ]
  );

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormData(event);
    },
    [setFormData]
  );

  const handleClickPendingVerification = useCallback(() => {
    setModalKind(ModalKinds.PendingVerification);
  }, [setModalKind]);

  const handleClickForgottenPassword = useCallback(() => {
    setModalKind(ModalKinds.PasswordEdit);
  }, [setModalKind]);

  const handleClickAccountCreation = useCallback(() => {
    setModalKind(ModalKinds.AccountCreation);
  }, [setModalKind]);

  return (
    <>
      <FormTitle>Login</FormTitle>
      <ConnectionForm onSubmit={handleSubmit}>
        <Inputs>
          <Input
            tooltipText="Your herotag is the username you set when you registered on Maiar."
            value={formData.username}
            inputName="username"
            inputLabel="Herotag"
            onChange={handleOnChange}
            isDisabled={isSubmitting}
            autoComplete="username"
            type="text"
            endAdornment=".elrond"
            centered
            width="13rem"
          ></Input>
          <Input
            value={formData.password}
            inputName="password"
            inputLabel="Password"
            onChange={handleOnChange}
            type="password"
            isDisabled={isSubmitting}
            autoComplete="current-password"
            centered
            width="13rem"
          ></Input>
          <div></div>
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
      <RecoveryActionsCTAs>
        <RecoveryActionCTA onClick={handleClickForgottenPassword}>
          <div></div>
          <label>Forgotten password?</label>
        </RecoveryActionCTA>
        <RecoveryActionCTA onClick={handleClickPendingVerification}>
          <div></div>
          <label>Account with pending verification?</label>
        </RecoveryActionCTA>
      </RecoveryActionsCTAs>
      <ChangeModePhrase>
        You don&rsquo;t have an account?
        <ChangeModeSpan onClick={handleClickAccountCreation}>
          Create One!
        </ChangeModeSpan>
      </ChangeModePhrase>
    </>
  );
};
