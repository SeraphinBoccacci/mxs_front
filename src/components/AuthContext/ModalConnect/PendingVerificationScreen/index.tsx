import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../..";
import { FormTitle } from "../style";
import {
  FirstDot,
  SecondDot,
  ThirdDot,
  TransactionReferenceHighlighted,
  TransactionReferenceP,
  Alert,
} from "./style";
import { getIsVerified, getReference } from "../../../../services/auth";
import { Button } from "../../../Button";

// import {} from "./style";

interface ConnectionScreenProps {
  handleClose: () => void;
}

export const PendingVerificationScreen = ({
  handleClose,
}: ConnectionScreenProps) => {
  const { setIsOnPendingVerificationScreen, herotag } = useContext(AuthContext);
  const [isUserVerified, setIsUserVerified] = useState(false);
  const [reference, setReference] = useState("");

  useEffect(() => {
    if (herotag) {
      getReference(herotag).then((data) => setReference(data));

      const interval = setInterval(async () => {
        const isVerified = await getIsVerified(herotag);

        setIsUserVerified(isVerified);

        if (isVerified) clearInterval(interval);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [setIsUserVerified, herotag]);
  return (
    <>
      <FormTitle>
        {isUserVerified ? (
          "Profile Verified !"
        ) : (
          <>
            Pending Verification
            <FirstDot>.</FirstDot>
            <SecondDot>.</SecondDot>
            <ThirdDot>.</ThirdDot>
          </>
        )}
      </FormTitle>
      {isUserVerified ? (
        <TransactionReferenceP>
          Your account has been verified ! Connect to it now !
        </TransactionReferenceP>
      ) : (
        <>
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
        </>
      )}

      <Button
        onClick={() => {
          setIsOnPendingVerificationScreen &&
            setIsOnPendingVerificationScreen(false);
        }}
      >
        Get back to connection screen
      </Button>
    </>
  );
};
