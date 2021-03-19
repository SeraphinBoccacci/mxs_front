import { Snackbar } from "@material-ui/core";
import { createContext, ReactNode, useState } from "react";

import Alert from "@material-ui/lab/Alert";

export interface HandleError {
  (errorType: string, action?: () => void): void;
}

export interface ErrorHandlingContextProps {
  handleError: HandleError;
}

export const ErrorHandlingContext = createContext<ErrorHandlingContextProps>({
  handleError: (e: string) => {},
});

export interface SnackbarRawData {
  severity: "warning" | "success" | "info" | "error";
  message: string;
}

export type SnackbarData = {
  onClick?: () => void;
} & SnackbarRawData;

type SnackBarDataMapper = { [key: string]: SnackbarData };

const ErrorHandlingContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [snackbarData, setSnackbarData] = useState<SnackbarData | null>(null);

  const snackBarDataMapper: SnackBarDataMapper = {
    ACCOUNT_WITH_VERIFICATION_PENDING: {
      severity: "warning",
      message: "Click here to track your verification status.",
    },
    INVALID_FORM_NO_REGISTERED_HEROTAG: {
      severity: "error",
      message: "Unregistered herotag. Create an account.",
    },
    ALREADY_REGISTERED_USER: {
      severity: "error",
      message: "Herotag already registered",
    },
    PASSWORD_AND_CONFIRM_NOT_MATCHING: {
      severity: "error",
      message: "Password and its confirm do not match",
    },
    MISSING_DATA_FOR_ACCOUNT_CREATION: {
      severity: "error",
      message: "Please fill the three fields in the form",
    },
    FORM_MISSING_DATA_FOR_AUTHENTICATION: {
      severity: "error",
      message: "Please fill the two fields in the form",
    },
    INVALID_PASSWORD: {
      severity: "error",
      message: "The password is not correct",
    },
    COULD_NOT_FIND_HETOTAG_ON_DNS: {
      severity: "error",
      message: "Could not find the herotag you provided on elrond dns",
    },
  };

  const handleError: HandleError = (errorType, action) => {
    const snackbarRawData =
      !errorType || !snackBarDataMapper[errorType]
        ? null
        : snackBarDataMapper[errorType];

    if (snackbarRawData)
      setSnackbarData({
        ...snackbarRawData,
        ...(action && { onClick: action }),
      });
  };

  const handleClose = () => setSnackbarData(null);

  return (
    <ErrorHandlingContext.Provider value={{ handleError }}>
      {children}
      <Snackbar
        open={!!snackbarData}
        onClose={handleClose}
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
    </ErrorHandlingContext.Provider>
  );
};

export default ErrorHandlingContextProvider;
