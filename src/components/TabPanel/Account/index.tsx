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
import Input from "../../Input";
import ActivationSwitch from "../ActivationSwitch";
import { Paragraph } from "../style";
import {
  AccountContainer,
  Button,
  Column,
  Comment,
  Form,
  FormCaption,
} from "./style";

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
            <Column>
              <FormCaption>
                If you want to prevent animation spamming on your stream
                (because technically, people can tip microcents), you can set a
                minimum required amount. If someone sends you a tip that is
                smaller than the minimum required amount, you will still receive
                the tip on your Herotag but it won’t trigger onstream animations
                or IFTTT actions.
                <br></br>
                <br></br>
                When unset, or set to “0”, there is no minimum.
              </FormCaption>
              <Input
                isDisabled={isSubmitting}
                inputName="minimumRequiredAmount"
                inputLabel="Min. required amount"
                value={formData.minimumRequiredAmount}
                onChange={handleOnChange}
                type="number"
              ></Input>
              <Comment>
                {formData.minimumRequiredAmount &&
                  `Won't react to transactions with amount below ~$
                  ${(currentPrice * formData.minimumRequiredAmount).toFixed(
                    2
                  )}`}
              </Comment>
            </Column>

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
