import React, { ChangeEvent, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { useForm } from "../../../hooks/useForm";
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

  const history = useHistory();

  const [formData, setFormData] = useForm<{
    herotag?: string;
    password?: string;
  }>({});

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsSubmitting(true);

      try {
        if (!formData.herotag || !formData.password)
          throw new Error("INVALID_FORM");

        const data = await authenticate(formData.herotag, formData.password);

        setIsSubmitting(false);

        if (data?.token) {
          setTokenData({
            token: data.token,
            expirationTimestamp: Date.now() + data.expiresIn * 1000,
          });

          setHerotag(formData.herotag);

          handleClose();

          history.push("/lab");
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
      formData.herotag,
      formData.password,
      handleClose,
      history,
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
            value={formData.herotag}
            inputName="herotag"
            inputLabel="Herotag"
            onChange={handleOnChange}
            isDisabled={isSubmitting}
          ></Input>
          <Input
            tooltipText="Your herotag is the username you set when you registered on Maiar."
            value={formData.password}
            inputName="password"
            inputLabel="Password"
            onChange={handleOnChange}
            type="password"
            isDisabled={isSubmitting}
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
        You don&rsquo;t have an account ?
        <ChangeModeSpan onClick={handleClickAccountCreation}>
          Create One !
        </ChangeModeSpan>
      </ChangeModePhrase>
    </>
  );
};
