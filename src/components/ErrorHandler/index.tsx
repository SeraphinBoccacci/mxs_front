import { Snackbar } from "@material-ui/core";
import { useContext } from "react";

import Alert from "@material-ui/lab/Alert";
import { AuthContext } from "../AuthContext";

export interface SnackbarData {
  severity: "warning" | "success" | "info" | "error";
  message: string;
  onClick: () => void;
}

type SnackBarDataMapper = { [key: string]: SnackbarData };

const ErrorHandler = ({
  errorType,
  resetErrorType,
}: {
  errorType: string | null;
  resetErrorType: () => void;
}) => {
  const { setIsModalOpenned, setIsOnPendingVerificationScreen } = useContext(
    AuthContext
  );

  const snackBarDataMapper: SnackBarDataMapper = {
    ACCOUNT_WITH_VERIFICATION_PENDING: {
      severity: "warning",
      message: "Click here to track your verification status.",
      onClick: () => {
        if (setIsModalOpenned && setIsOnPendingVerificationScreen) {
          setIsModalOpenned(true);
          setIsOnPendingVerificationScreen(true);
        }
      },
    },
    INVALID_FORM_NO_REGISTERED_HEROTAG: {
      severity: "error",
      message: "Unregistered herotag. Create an account here",
      onClick: () => {
        if (setIsModalOpenned && setIsOnPendingVerificationScreen) {
          setIsModalOpenned(true);
          setIsOnPendingVerificationScreen(false);
        }
      },
    },
    ALREADY_REGISTERED_USER: {
      severity: "error",
      message: "Herotag already registered",
      onClick: () => {},
    },
    PASSWORD_AND_CONFIRM_NOT_MATCHING: {
      severity: "error",
      message: "Password and its confirm do not match",
      onClick: () => {},
    },
    MISSING_DATA_FOR_ACCOUNT_CREATION: {
      severity: "error",
      message: "Please fill the three fields in the form",
      onClick: () => {},
    },
    FORM_MISSING_DATA_FOR_AUTHENTICATION: {
      severity: "error",
      message: "Please fill the two fields in the form",
      onClick: () => {},
    },
    INVALID_PASSWORD: {
      severity: "error",
      message: "The password is not correct",
      onClick: () => {},
    },
  };

  const snackbarData =
    !errorType || !snackBarDataMapper[errorType]
      ? null
      : snackBarDataMapper[errorType];

  if (!snackbarData) return null;

  return (
    <Snackbar
      open={!!errorType}
      onClose={resetErrorType}
      autoHideDuration={7000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      onClick={snackbarData?.onClick}
    >
      <Alert severity={snackbarData?.severity || "warning"}>
        {snackbarData?.message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorHandler;
