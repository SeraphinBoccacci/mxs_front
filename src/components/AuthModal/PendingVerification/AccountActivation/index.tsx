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

interface AccountActivationProps {
  isVerified: boolean;
  reference: string;
  handleOnClickToLogin: () => void;
  isOnlyPasswordEdit?: boolean;
}

const AccountActivation = ({
  isVerified,
  reference,
  handleOnClickToLogin,
  isOnlyPasswordEdit,
}: AccountActivationProps) => {
  if (isVerified)
    return (
      <Column>
        <FormTitle>Account activated!</FormTitle>
        <TransactionReferenceP>
          Your account has been verified! <br></br>You can login now!
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
            serabocca06.elrond
          </TransactionReferenceHighlighted>{" "}
          with this reference :{" "}
          <TransactionReferenceHighlighted>
            {reference}
          </TransactionReferenceHighlighted>
        </TransactionReferenceP>
        <Alert severity="warning">
          You have 10 minutes to verify your account,<br></br>
          after which it will be deleted and you will to recreate one
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

export default AccountActivation;
