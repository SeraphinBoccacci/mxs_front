import CircularProgress from "@material-ui/core/CircularProgress";
import { useContext, useEffect, useState } from "react";
import React, { useCallback } from "react";

import { getIsVerified, getReference } from "../../../services/auth";
import { AuthContext, UserAccountStatus } from "../../AuthContext";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import { ModalKinds } from "..";
import { HerotagInput } from "../HerotagInput";
import AccountActivation from "./AccountActivation";
import PasswordEdition from "./PasswordEdition";

interface PendingVerificationProps {
  setModalKind: (modalKind: ModalKinds) => void;
  isOnlyPasswordEdit?: boolean;
}

export const PendingVerification = ({
  setModalKind,
  isOnlyPasswordEdit,
}: PendingVerificationProps) => {
  const { herotag } = useContext(AuthContext);
  const { handleError } = useContext(ErrorHandlingContext);

  const [isUserVerified, setIsUserVerified] = useState(false);
  const [reference, setReference] = useState("");
  const [verificationKind, setVerificationKind] = useState<
    "accountActivation" | "passwordEdition"
  >("accountActivation");

  const handleOnClickToLogin = useCallback(() => {
    setModalKind(ModalKinds.Login);
  }, [setModalKind]);

  useEffect(() => {
    if (herotag) {
      getReference(herotag)
        .then((referenceData) => {
          if (referenceData) {
            setReference(referenceData.verificationReference || "");
            setVerificationKind(
              referenceData.accountStatus ===
                UserAccountStatus.PENDING_EDIT_PASSWORD_VERIFICATION
                ? "passwordEdition"
                : "accountActivation"
            );
          }
        })
        .catch((error) => {
          handleError(error.message);
        });

      const interval = setInterval(async () => {
        const isVerified = await getIsVerified(herotag);

        setIsUserVerified(isVerified);

        if (isVerified) clearInterval(interval);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [setIsUserVerified, herotag, setModalKind, handleError]);

  if (!herotag)
    return <HerotagInput setModalKind={setModalKind}></HerotagInput>;

  if (!reference)
    return <CircularProgress size="4rem" style={{ margin: "auto auto" }} />;

  if (verificationKind === "passwordEdition")
    return (
      <PasswordEdition
        handleOnClickToLogin={handleOnClickToLogin}
        isVerified={isUserVerified}
        reference={reference}
        isOnlyPasswordEdit={isOnlyPasswordEdit}
      ></PasswordEdition>
    );

  return (
    <AccountActivation
      handleOnClickToLogin={handleOnClickToLogin}
      isVerified={isUserVerified}
      reference={reference}
      isOnlyPasswordEdit={isOnlyPasswordEdit}
    ></AccountActivation>
  );
};
