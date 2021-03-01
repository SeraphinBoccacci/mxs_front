import { Button } from "@material-ui/core";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import React from "react";

import { iftttTutorial } from "../../../constants/tutorials";
import {
  modifyIftttIntegration,
  toggleIftttIntegration,
} from "../../../services/ifttt";
import { triggerIftttEvent } from "../../../services/user";
import { AuthContext } from "../../AuthContext";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import { Tutorial } from "../../Tutorial";
import { ContentContainer } from "../style";
import {
  ActivateIntegration,
  ActivateSwitch,
  EventNameInput,
  FormInputAndLabel,
  FormInputs,
  FormLabel,
  IftttIntegrationContainer,
  IftttIntegrationForm,
  Paragraph,
  TriggerKeyInput,
} from "./style";

interface IftttIntegrationState {
  triggerKey?: string;
  eventName?: string;
}

export const IftttIntegration = () => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isIntegrationActive, setIsIntegrationActive] = useState(
    user?.integrations?.ifttt?.isActive || false
  );
  const { handleError } = useContext(ErrorHandlingContext);

  useEffect(() => {
    setIsIntegrationActive(user?.integrations?.ifttt?.isActive || false);
  }, [setIsIntegrationActive, user]);

  const formReducer = (
    state: IftttIntegrationState,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const initialState = {
    ...(user?.integrations?.ifttt?.triggerKey && {
      triggerKey: user?.integrations?.ifttt.triggerKey,
    }),
    ...(user?.integrations?.ifttt?.eventName && {
      eventName: user?.integrations?.ifttt.eventName,
    }),
  };

  const [formData, setFormData] = useReducer(formReducer, initialState);

  useEffect(() => {
    setFormData({
      target: {
        name: "eventName",
        value: user?.integrations?.ifttt?.eventName || "",
      },
    } as ChangeEvent<HTMLInputElement>);
    setFormData({
      target: {
        name: "triggerKey",
        value: user?.integrations?.ifttt?.triggerKey || "",
      },
    } as ChangeEvent<HTMLInputElement>);
  }, [
    setFormData,
    user?.integrations?.ifttt?.eventName,
    user?.integrations?.ifttt?.triggerKey,
  ]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
      handleError("Erreur inconnue");
    }
  };

  const handleSwitchChange = async () => {
    setIsSubmitting(true);

    if (user && user.herotag) {
      await toggleIftttIntegration(user.herotag, !isIntegrationActive);
      setIsIntegrationActive(!isIntegrationActive);

      setIsSubmitting(false);
    }
  };

  const triggerEvent = useCallback(async () => {
    try {
      if (user?.herotag) await triggerIftttEvent(user.herotag);
    } catch (error) {
      handleError(error?.response?.data?.data);
    }
  }, [user?.herotag, handleError]);

  return (
    <IftttIntegrationContainer>
      <ContentContainer elevation={3} variant="elevation">
        <Paragraph>
          IFTTT is a free platform that helps all your products and services
          work better together.
        </Paragraph>
      </ContentContainer>
      <Tutorial tutorial={iftttTutorial}></Tutorial>
      <ContentContainer elevation={3} variant="elevation">
        <IftttIntegrationForm onSubmit={handleSubmit}>
          <FormInputs>
            <FormInputAndLabel>
              <FormLabel>Event Name</FormLabel>
              <EventNameInput
                disabled={isSubmitting}
                name="eventName"
                value={user?.integrations?.ifttt?.eventName}
                onChange={setFormData}
                placeholder="StreamParticlesEvent"
              ></EventNameInput>
            </FormInputAndLabel>
            <FormInputAndLabel>
              <FormLabel>Trigger Key</FormLabel>
              <TriggerKeyInput
                disabled={isSubmitting}
                name="triggerKey"
                value={user?.integrations?.ifttt?.triggerKey}
                onChange={setFormData}
                placeholder="e1eFH71X84ljX-0AFjNdjYJ2B4TfY8whL5j3fkLAc6F"
              ></TriggerKeyInput>
            </FormInputAndLabel>
          </FormInputs>

          <Button variant="outlined" color="secondary" type="submit">
            Submit
          </Button>
        </IftttIntegrationForm>
      </ContentContainer>

      <ActivateIntegration>
        Activate Integration
        <ActivateSwitch
          disabled={isSubmitting}
          checked={isIntegrationActive}
          onChange={handleSwitchChange}
          color="primary"
        ></ActivateSwitch>
      </ActivateIntegration>
      <ContentContainer>
        <Button variant="contained" onClick={triggerEvent}>
          Trigger Ifttt event
        </Button>
      </ContentContainer>
    </IftttIntegrationContainer>
  );
};
