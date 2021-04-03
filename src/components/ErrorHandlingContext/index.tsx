import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useCallback } from "react";
import { createContext, ReactNode, useState } from "react";

export interface HandleError {
  (errorType: string, action?: () => void): void;
}

export interface ErrorHandlingContextProps {
  handleError: HandleError;
}

export const ErrorHandlingContext = createContext<ErrorHandlingContextProps>({
  handleError: () => {},
});

export interface SnackbarRawData {
  severity: "warning" | "success" | "info" | "error";
  message: string;
}

export type SnackbarData = {
  onClick?: () => void;
} & SnackbarRawData;

type SnackBarDataMapper = { [key: string]: SnackbarData };

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
    message: "Could not find the herotag you provided on Elrond dns",
  },
  ACCOUNT_NOT_PENDING_VERIFICATION: {
    severity: "warning",
    message: "Your account does not have pending verification",
  },
  INVALID_FORM: {
    severity: "error",
    message: "Your form is invalid. Please fill all the fields.",
  },
  INVALID_TOKEN: {
    severity: "warning",
    message: "You've been disconnect",
  },
  DEFAULT: {
    severity: "error",
    message: "An unknown error occured.",
  },
};

const ErrorHandlingContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [snackbarData, setSnackbarData] = useState<SnackbarData | null>(null);

  const handleError: HandleError = useCallback(
    (errorType, action) => {
      const snackbarRawData =
        !errorType || !snackBarDataMapper[errorType]
          ? snackBarDataMapper.DEFAULT
          : snackBarDataMapper[errorType];

      if (snackbarRawData)
        setSnackbarData({
          ...snackbarRawData,
          ...(action && { onClick: action }),
        });
    },
    [setSnackbarData]
  );

  const handleClose = useCallback(() => setSnackbarData(null), [
    setSnackbarData,
  ]);

  return (
    <ErrorHandlingContext.Provider value={{ handleError }}>
      {children}
      <Snackbar
        open={!!snackbarData}
        onClose={handleClose}
        autoHideDuration={10000}
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
