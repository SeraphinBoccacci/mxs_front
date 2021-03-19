import { Button } from "@material-ui/core";
import { useCallback, useContext, useEffect, useState } from "react";
import React from "react";

import { iftttTutorial } from "../../../constants/tutorials";
import { useForm } from "../../../hooks/useForm";
import {
  modifyIftttIntegration,
  toggleIftttIntegration,
} from "../../../services/ifttt";
import { ContentContainer, Emphasize } from "../../../styles/global";
import { AuthContext } from "../../AuthContext";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import EventTriggerer from "../../EventTriggerer";
import Input from "../../Input";
import { Tutorial } from "../../Tutorial";
import {
  ActivateIntegration,
  ActivateSwitch,
  FormInputs,
  IftttIntegrationContainer,
  IftttIntegrationForm,
  Paragraph,
} from "./style";

const Ifttt = () => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isIntegrationActive, setIsIntegrationActive] = useState(
    user?.integrations?.ifttt?.isActive || false
  );

  const { handleError } = useContext(ErrorHandlingContext);

  const [formData, setFormData] = useForm<{
    eventName?: string;
    triggerKey?: string;
  }>({});

  useEffect(() => {
    setFormData({
      value: {
        eventName: user?.integrations?.ifttt?.eventName,
        triggerKey: user?.integrations?.ifttt?.triggerKey,
      },
    });
  }, [setFormData, user]);

  useEffect(() => {
    setIsIntegrationActive(user?.integrations?.ifttt?.isActive || false);
  }, [setIsIntegrationActive, user]);

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
        if (formData.eventName && formData.triggerKey && user && user.herotag)
          await modifyIftttIntegration(
            user.herotag,
            formData.eventName,
            formData.triggerKey
          );

        setIsSubmitting(false);
        return;
      } catch (error) {
        handleError(error.message);
      }
    },
    [
      formData.eventName,
      formData.triggerKey,
      user,
      handleError,
      setIsSubmitting,
    ]
  );

  const handleSwitchChange = useCallback(async () => {
    setIsSubmitting(true);

    if (user && user.herotag) {
      await toggleIftttIntegration(user.herotag, !isIntegrationActive);
      setIsIntegrationActive((prev) => !prev);

      setIsSubmitting(false);
    }
  }, [setIsSubmitting, setIsIntegrationActive, isIntegrationActive, user]);

  return (
    <IftttIntegrationContainer>
      <ContentContainer elevation={3} variant="elevation">
        <Paragraph>
          <Emphasize>
            <a target="about:blank" href="https://ifttt.com/">
              IFTTT
            </a>
          </Emphasize>
          is a free platform that helps all your products and services work
          better together.
        </Paragraph>
        <Paragraph>
          For example, you can easily create special applets that make your
          smart bulbs blink everytime you receive a Maiar donation, or even
          other applets that make your Google Assistant speak something out loud
          when you receive eGLD on your Herotag.
        </Paragraph>
        <Paragraph>
          If you only want onstream animations, please switch to the other
          Particles&rsquo; tabs.
        </Paragraph>
      </ContentContainer>
      <Tutorial tutorial={iftttTutorial}></Tutorial>
      <ContentContainer elevation={3} variant="elevation">
        <IftttIntegrationForm onSubmit={handleSubmit}>
          <FormInputs>
            <Input
              isDisabled={isSubmitting}
              inputName="eventName"
              inputLabel="Event Name"
              value={formData.eventName}
              onChange={handleOnChange}
            ></Input>
            <Input
              isDisabled={isSubmitting}
              inputName="triggerKey"
              inputLabel="Trigger Key"
              value={formData.triggerKey}
              onChange={handleOnChange}
              // placeholder="e1eFH71X84ljX-0AFjNdjYJ2B4TfY8whL5j3fkLAc6F"
            ></Input>
          </FormInputs>

          <Button variant="outlined" color="secondary" type="submit">
            Submit
          </Button>
        </IftttIntegrationForm>
      </ContentContainer>

      <EventTriggerer></EventTriggerer>

      <ActivateIntegration>
        Activate Integration
        <ActivateSwitch
          disabled={isSubmitting}
          checked={isIntegrationActive}
          onChange={handleSwitchChange}
          color="primary"
        ></ActivateSwitch>
      </ActivateIntegration>
    </IftttIntegrationContainer>
  );
};

export default Ifttt;
