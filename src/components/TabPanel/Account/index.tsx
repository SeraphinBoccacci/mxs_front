import { useCallback, useContext, useEffect, useState } from "react";
import React from "react";
import { useHistory } from "react-router";

import { useForm } from "../../../hooks/useForm";
import {
  getEgldPrice,
  toggleStreamingActivation,
  updateMinimumRequiredAmount,
} from "../../../services/user";
import { ContentContainer } from "../../../styles/global";
import { useAuth } from "../../AuthContext";
import AuthModal, { ModalKinds } from "../../AuthModal";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import { Form } from "../../EventTriggerer/style";
import Input from "../../Input";
import ActivationSwitch from "../ActivationSwitch";
import { Comment } from "../StreamElements/VariationCreation/VariationModal/style";
import { Paragraph } from "../style";
import { AccountContainer, Button } from "./style";

const Account = () => {
  const { user, setTokenData, setHerotag } = useAuth();
  const { handleError } = useContext(ErrorHandlingContext);
  const history = useHistory();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isStreamActive, setIsStreamActive] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpened] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(150);

  const [formData, setFormData] = useForm<{
    minimumRequiredAmount?: number;
  }>({});

  useEffect(() => {
    getEgldPrice()
      .then((data) => {
        if (!data) return;

        setCurrentPrice(data.price);
      })
      .catch((error) => {
        handleError(error.message);
      });
  }, [handleError]);

  useEffect(() => {
    setIsStreamActive(user?.isStreaming || false);
  }, [setIsStreamActive, user]);

  useEffect(() => {
    if (user?.integrations?.minimumRequiredAmount)
      setFormData({
        value: {
          minimumRequiredAmount: user?.integrations?.minimumRequiredAmount,
        },
      });
  }, [setFormData, user]);

  const handleSwitchChange = useCallback(async () => {
    setIsSubmitting(true);

    if (user && user.herotag)
      await toggleStreamingActivation(user?.herotag, !isStreamActive);

    setIsStreamActive(!isStreamActive);
    setIsSubmitting(false);
  }, [setIsSubmitting, user, isStreamActive, setIsStreamActive]);

  const handleModalOpen = useCallback(() => {
    setIsAuthModalOpened(true);
  }, [setIsAuthModalOpened]);

  const handleModalClose = useCallback(() => {
    setIsAuthModalOpened(false);
  }, [setIsAuthModalOpened]);

  const handleOnChange = useCallback(
    (data) => {
      setFormData(data);
    },
    [setFormData]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        setIsSubmitting(true);
        if (formData.minimumRequiredAmount && user?.herotag)
          await updateMinimumRequiredAmount(
            user.herotag,
            formData.minimumRequiredAmount
          );

        setIsSubmitting(false);
        return;
      } catch (error) {
        handleError(error.message);
      }
    },
    [formData.minimumRequiredAmount, user, handleError, setIsSubmitting]
  );

  const handleDisconnect = useCallback(() => {
    setTokenData(null);
    setHerotag("");

    history.push("/");
  }, [setTokenData, setHerotag, history]);

  return (
    <>
      <AccountContainer>
        <ContentContainer>
          <Paragraph>
            Activate particles in your streaming content by switching on the
            toggle below.
          </Paragraph>
        </ContentContainer>
        <ContentContainer>
          <ActivationSwitch
            label="Start Streaming"
            isSubmitting={isSubmitting}
            isActive={isStreamActive}
            onChange={handleSwitchChange}
          ></ActivationSwitch>
        </ContentContainer>
        <ContentContainer>
          <Form onSubmit={handleSubmit}>
            <div>
              <Input
                isDisabled={isSubmitting}
                inputName="minimumRequiredAmount"
                inputLabel="Min. required amount"
                value={formData.minimumRequiredAmount}
                onChange={handleOnChange}
                tooltipText="To prevent spams"
                type="number"
              ></Input>
              {formData.minimumRequiredAmount && (
                <Comment>
                  Will allow amounts above ~$
                  {(currentPrice * formData.minimumRequiredAmount).toFixed(2)}
                </Comment>
              )}
            </div>

            <Button variant="outlined" color="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </ContentContainer>

        <ContentContainer>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleModalOpen}
          >
            Modify Password
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleDisconnect}
          >
            Disconnect
          </Button>
        </ContentContainer>
      </AccountContainer>
      <AuthModal
        isConnectModalOpenned={isAuthModalOpen}
        handleClose={handleModalClose}
        defaultModalKind={ModalKinds.PasswordEdit}
        isOnlyPasswordEdit
      ></AuthModal>
    </>
  );
};

export default Account;
