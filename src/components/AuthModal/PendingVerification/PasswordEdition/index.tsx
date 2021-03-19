import { Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React from "react";

import { FormTitle } from "../../style";
import {
  Column,
  FirstDot,
  ReferenceAndAlert,
  SecondDot,
  ThirdDot,
  TransactionReferenceHighlighted,
  TransactionReferenceP,
} from "../style";

interface PasswordEditionProps {
  isVerified: boolean;
  reference: string;
  handleOnClickToLogin: () => void;
  isOnlyPasswordEdit?: boolean;
}

const PasswordEdition = ({
  isVerified,
  reference,
  handleOnClickToLogin,
  isOnlyPasswordEdit,
}: PasswordEditionProps) => {
  if (isVerified)
    return (
      <Column>
        <FormTitle>Password Edit Confirmed!</FormTitle>
        <TransactionReferenceP>
          Your password has been modified! <br></br>You can use it to login now!
        </TransactionReferenceP>
        {isOnlyPasswordEdit ? (
          <div></div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleOnClickToLogin}
          >
            Get back to connection screen
          </Button>
        )}
      </Column>
    );

  return (
    <Column>
      <FormTitle>
        <span>
          Pending Verification
          <FirstDot>.</FirstDot>
          <SecondDot>.</SecondDot>
          <ThirdDot>.</ThirdDot>
        </span>
      </FormTitle>
      <ReferenceAndAlert>
        <TransactionReferenceP>
          Send a (micro) transaction to{" "}
          <TransactionReferenceHighlighted>
            streamparticles.elrond
          </TransactionReferenceHighlighted>{" "}
          with this reference :{" "}
          <TransactionReferenceHighlighted>
            {reference}
          </TransactionReferenceHighlighted>
        </TransactionReferenceP>
        <Alert severity="warning">
          You have 10 minutes to modify your password,<br></br>
          after which the process will be cancelled.
        </Alert>
      </ReferenceAndAlert>

      {isOnlyPasswordEdit ? (
        <div></div>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleOnClickToLogin}
        >
          Get back to connection screen
        </Button>
      )}
    </Column>
  );
};

export default PasswordEdition;
