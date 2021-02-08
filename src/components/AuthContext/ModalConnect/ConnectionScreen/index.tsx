import {
  ChangeEvent,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../..";
import { authenticate, createAccount } from "../../../../services/auth";
import { Button } from "../../../Button";
import { FormTitle } from "../style";
import {
  ChangeModePhrase,
  ChangeModeSpan,
  ConnectionForm,
  Herotag,
  Inputs,
  Password,
} from "./style";
import ErrorHandler from "../../../ErrorHandler";
interface ConnectionScreenProps {
  handleClose: () => void;
}

interface ReducerState {
  herotag?: string;
  password?: string;
  confirm?: string;
}

export const ConnectionScreen = ({ handleClose }: ConnectionScreenProps) => {
  const [isAccountCreation, setIsAccountCreation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorType, setErrorType] = useState(null);
  const {
    setToken,
    setHerotag,
    setTokenExpirationTimestamp,
    setIsOnPendingVerificationScreen,
  } = useContext(AuthContext);

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
        if (isAccountCreation) {
          if (!formData.herotag || !formData.password || !formData.confirm)
            throw new Error("invalid form");

          const resData = await createAccount(
            formData.herotag,
            formData.password,
            formData.confirm
          );

          setIsSubmitting(false);

          if (resData.herotag && setIsOnPendingVerificationScreen) {
            setHerotag(resData.herotag);
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
            setToken(resData.token);
            setHerotag(resData.user.herotag);

            setTokenExpirationTimestamp(Date.now() + resData.expiresIn * 1000);

            handleClose();

            history.push("/console");
          } else throw new Error("Auth failed !");
        }
      } catch (e) {
        setIsSubmitting(false);
        if (e.response.data.data === "ACCOUNT_WITH_VERIFICATION_PENDING") {
          setHerotag(formData.herotag);
        } else {
          setHerotag(null);
          setToken(null);
        }

        setErrorType(e.response.data.data);
      } finally {
      }
    },
    [
      formData.confirm,
      formData.herotag,
      formData.password,
      handleClose,
      history,
      isAccountCreation,
      setHerotag,
      setIsOnPendingVerificationScreen,
      setToken,
      setTokenExpirationTimestamp,
    ]
  );

  return (
    <>
      <FormTitle>
        {isAccountCreation ? "Account creation" : "Connection"}
      </FormTitle>
      <ConnectionForm onSubmit={handleSubmit}>
        <Inputs>
          <Herotag
            placeholder="Herotag"
            name="herotag"
            onChange={setFormData}
            disabled={isSubmitting}
          ></Herotag>
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
        <Button isFormButton disabled={isSubmitting}>
          {isSubmitting ? "Submitting ... please wait" : "Submit"}
        </Button>
      </ConnectionForm>
      {isAccountCreation ? (
        <ChangeModePhrase>
          You are already have an account ?
          <ChangeModeSpan onClick={() => setIsAccountCreation(false)}>
            {" "}
            Connect !
          </ChangeModeSpan>
        </ChangeModePhrase>
      ) : (
        <ChangeModePhrase>
          You don't have an account ?
          <ChangeModeSpan onClick={() => setIsAccountCreation(true)}>
            {" "}
            Create One !
          </ChangeModeSpan>
        </ChangeModePhrase>
      )}
      <ErrorHandler
        errorType={errorType}
        resetErrorType={() => setErrorType(null)}
      ></ErrorHandler>
    </>
  );
};
