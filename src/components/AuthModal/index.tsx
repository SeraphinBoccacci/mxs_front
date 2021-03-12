import { Fade } from "@material-ui/core";
import React, { useCallback } from "react";

import { useQueryString } from "../../hooks/useQueryString";
import { useAuth } from "../AuthContext";
import { AccountCreation } from "./AccountCreation";
import { HerotagInput } from "./HerotagInput";
import { Login } from "./Login";
import { PasswordEdit } from "./PasswordEdit";
import { PendingVerification } from "./PendingVerification";
import { ModalContainer, ModalContent } from "./style";

export enum ModalKinds {
  AccountCreation = "AccountCreation",
  Login = "Login",
  HerotagInput = "HerotagInput",
  PasswordEdit = "PasswordEdit",
  PendingVerification = "PendingVerification",
}

interface ModalConnectProps {
  handleClose: () => void;
  isConnectModalOpenned: boolean;
  defaultModalKind?: ModalKinds;
  isOnlyPasswordEdit?: boolean;
}

const AuthModal = ({
  handleClose: handleOnClose,
  isConnectModalOpenned,
  defaultModalKind,
  isOnlyPasswordEdit,
}: ModalConnectProps) => {
  const { herotag, setHerotag } = useAuth();
  const [modalKind, setModalKind] = useQueryString("modalKind");

  const handleClose = useCallback(() => {
    setModalKind(null);
    handleOnClose();
  }, [setModalKind, handleOnClose]);

  const setModalKindWithGuards = useCallback(
    (kind: ModalKinds) => {
      if (
        [
          ModalKinds.AccountCreation,
          ModalKinds.Login,
          ModalKinds.HerotagInput,
        ].includes(kind)
      )
        setHerotag("");

      if (
        isOnlyPasswordEdit &&
        [ModalKinds.AccountCreation, ModalKinds.Login].includes(kind)
      )
        setModalKind(ModalKinds.PasswordEdit);

      setModalKind(kind);
    },
    [herotag, setHerotag, setModalKind, isOnlyPasswordEdit]
  );

  const modalsMapper = {
    [ModalKinds.Login]: (
      <Login
        handleClose={handleClose}
        setModalKind={setModalKindWithGuards}
      ></Login>
    ),
    [ModalKinds.AccountCreation]: (
      <AccountCreation
        handleClose={handleClose}
        setModalKind={setModalKindWithGuards}
      ></AccountCreation>
    ),
    [ModalKinds.HerotagInput]: (
      <HerotagInput
        setModalKind={setModalKindWithGuards}
        isOnlyPasswordEdit={isOnlyPasswordEdit}
      ></HerotagInput>
    ),
    [ModalKinds.PasswordEdit]: (
      <PasswordEdit
        setModalKind={setModalKindWithGuards}
        isOnlyPasswordEdit={isOnlyPasswordEdit}
      ></PasswordEdit>
    ),
    [ModalKinds.PendingVerification]: (
      <PendingVerification
        setModalKind={setModalKindWithGuards}
        isOnlyPasswordEdit={isOnlyPasswordEdit}
      ></PendingVerification>
    ),
  };

  const defaultModal =
    defaultModalKind && !!modalsMapper[defaultModalKind as ModalKinds]
      ? modalsMapper[defaultModalKind as ModalKinds]
      : modalsMapper[ModalKinds.Login];

  return (
    <>
      <ModalContainer open={!!isConnectModalOpenned} onClose={handleClose}>
        <Fade in={!!isConnectModalOpenned}>
          <ModalContent>
            {modalKind && !!modalsMapper[modalKind as ModalKinds]
              ? modalsMapper[modalKind as ModalKinds]
              : defaultModal}
          </ModalContent>
        </Fade>
      </ModalContainer>
    </>
  );
};

export default AuthModal;
