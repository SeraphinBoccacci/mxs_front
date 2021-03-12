import { Tooltip } from "@material-ui/core";
import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import { useHistory } from "react-router-dom";

import { createAccount } from "../../../services/auth";
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
  Password,
} from "../style";
import { FormTitle } from "../style";
interface AccountCreationProps {
  handleClose: () => void;
  setModalKind: (modalKind: ModalKinds) => void;
}

interface ReducerState {
  herotag?: string;
  password?: string;
  confirm?: string;
}

const formReducer = (
  state: ReducerState,
  event: ChangeEvent<HTMLInputElement>
) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export const AccountCreation = ({
  handleClose,
  setModalKind,
}: AccountCreationProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setHerotag } = useAuth();
  const { handleError } = useContext(ErrorHandlingContext);

  const history = useHistory();

  const [formData, setFormData] = useReducer(formReducer, {});

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
        setIsSubmitting(false);
      }
    },
    [
      formData.confirm,
      formData.herotag,
      formData.password,
      history,
      handleClose,
      handleError,
      setModalKind,
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
          <Tooltip
            placement="top"
            title="Your herotag is the username you set when you registered on Maiar."
          >
            <Herotag
              placeholder="Herotag"
              name="herotag"
              onChange={setFormData}
              disabled={isSubmitting}
            ></Herotag>
          </Tooltip>
          <Password
            type="password"
            name="password"
            placeholder="Password"
            onChange={setFormData}
            disabled={isSubmitting}
          ></Password>
          <Password
            type="password"
            name="confirm"
            placeholder="Password Confirmation"
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
      <ChangeModePhrase>
        You are already have an account ?
        <ChangeModeSpan onClick={handleClickAccountConnection}>
          Connect !
        </ChangeModeSpan>
      </ChangeModePhrase>
    </>
  );
};
