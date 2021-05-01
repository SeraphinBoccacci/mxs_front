import { Button } from "@material-ui/core";
import { useCallback, useContext, useEffect, useState } from "react";
import React from "react";

import ActivationSwitch from "../../components/ActivationSwitch";
import { AuthContext } from "../../components/AuthContext";
import { ErrorHandlingContext } from "../../components/ErrorHandlingContext";
import Input from "../../components/Input";
import LabLayout from "../../components/LabLayout";
import { Tutorial } from "../../components/Tutorial";
import { iftttTutorial } from "../../constants/tutorials";
import { useForm } from "../../hooks/useForm";
import { modifyIftttParticle, toggleIftttParticle } from "../../services/ifttt";
import { ContentContainer, Emphasize } from "../../styles/global";
import {
  FormInputs,
  IftttParticleContainer,
  IftttParticleForm,
  Paragraph,
} from "./style";

const IftttSettings = () => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isParticleActive, setIsParticleActive] = useState(
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
    setIsParticleActive(user?.integrations?.ifttt?.isActive || false);
  }, [setIsParticleActive, user]);

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
          await modifyIftttParticle(
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
      await toggleIftttParticle(user.herotag, !isParticleActive);
      setIsParticleActive((prev) => !prev);

      setIsSubmitting(false);
    }
  }, [setIsSubmitting, setIsParticleActive, isParticleActive, user]);

  return (
    <LabLayout>
      <IftttParticleContainer>
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
            smart bulbs blink everytime you receive a Maiar tip or donation, or
            even other applets that make your Google Assistant speak something
            out loud when you receive eGLD on your Herotag.
          </Paragraph>
          <Paragraph>
            If you only want onstream animations, please switch to the other
            Particles&rsquo; tabs.
          </Paragraph>
        </ContentContainer>

        <ActivationSwitch
          label="Activate Particle"
          isSubmitting={isSubmitting}
          isActive={isParticleActive}
          onChange={handleSwitchChange}
        ></ActivationSwitch>

        <Tutorial
          videoTutorialLink="https://www.youtube.com/watch?v=yMB6Nn3w8Ls&t=96s"
          tutorial={iftttTutorial}
        ></Tutorial>
        <ContentContainer elevation={3} variant="elevation">
          <IftttParticleForm onSubmit={handleSubmit}>
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
              ></Input>
            </FormInputs>

            <Button variant="outlined" color="secondary" type="submit">
              Submit
            </Button>
          </IftttParticleForm>
        </ContentContainer>
      </IftttParticleContainer>
    </LabLayout>
  );
};

export default IftttSettings;
