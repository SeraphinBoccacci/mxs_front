import { Tooltip } from "@material-ui/core";
import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import { useHistory } from "react-router-dom";

import { authenticate, createAccount } from "../../../services/auth";
import { setItem } from "../../../utils/localStorage";
import { AuthContext } from "../../AuthContext";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import { FormTitle } from "../style";
import {
  Button,
  ChangeModePhrase,
  ChangeModeSpan,
  ConnectionForm,
  Herotag,
  Inputs,
  Password,
  StyledPendingVerificationCTA,
} from "./style";
interface ConnectionScreenProps {
  handleClose: () => void;
  setIsOnPendingVerificationScreen: (s: boolean) => void;
}

interface ReducerState {
  herotag?: string;
  password?: string;
  confirm?: string;
}

export const ConnectionScreen = ({
  handleClose,
  setIsOnPendingVerificationScreen,
}: ConnectionScreenProps) => {
  const [isAccountCreation, setIsAccountCreation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setToken } = useContext(AuthContext);
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

      if (formData.herotag) setItem("herotag", formData.herotag);

      try {
        if (isAccountCreation) {
          if (!formData.herotag || !formData.password || !formData.confirm)
            throw new Error("invalid form");

          const resData = await createAccount(
            formData.herotag,
            formData.password,
            formData.confirm
          );

          setIsSubmitting(false);

          if (resData?.herotag) {
            setIsOnPendingVerificationScreen(true);
          } else throw new Error("Account creation failed !");
        } else {
          if (!formData.herotag || !formData.password)
            throw new Error("invalid form");

          const resData = await authenticate(
            formData.herotag,
            formData.password
          );

          setIsSubmitting(false);

          if (resData.token) {
            setItem(
              "tokenExpirationTimestamp",
              Date.now() + resData.expiresIn * 1000
            );
            setToken(resData.token);

            handleClose();

            history.push("/console");
          } else throw new Error("Auth failed !");
        }
      } catch (e) {
        setIsSubmitting(false);

        if (
          e?.response?.data?.message === "ACCOUNT_WITH_VERIFICATION_PENDING"
        ) {
          handleError(e?.response?.data?.message, () => {
            setIsOnPendingVerificationScreen(true);
          });

          return;
        }

        handleError(e?.response?.data?.message);
      }
    },
    [
      formData.confirm,
      formData.herotag,
      formData.password,
      handleClose,
      history,
      isAccountCreation,
      setIsOnPendingVerificationScreen,
      setToken,
      handleError,
    ]
  );

  return (
    <>
      <FormTitle>
        {isAccountCreation ? "Account creation" : "Connection"}
      </FormTitle>
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
          {isAccountCreation ? (
            <Password
              type="password"
              name="confirm"
              placeholder="Password Confirmation"
              onChange={setFormData}
              disabled={isSubmitting}
            ></Password>
          ) : (
            <div></div>
          )}
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
      <StyledPendingVerificationCTA
        onClick={() => setIsOnPendingVerificationScreen(true)}
      >
        <div></div>
        <label>Account with pending verification ?</label>
      </StyledPendingVerificationCTA>

      {isAccountCreation ? (
        <ChangeModePhrase>
          You are already have an account ?
          <ChangeModeSpan onClick={() => setIsAccountCreation(false)}>
            Connect !
          </ChangeModeSpan>
        </ChangeModePhrase>
      ) : (
        <ChangeModePhrase>
          You don&rsquo;t have an account ?
          <ChangeModeSpan onClick={() => setIsAccountCreation(true)}>
            {" "}
            Create One !
          </ChangeModeSpan>
        </ChangeModePhrase>
      )}
    </>
  );
};
