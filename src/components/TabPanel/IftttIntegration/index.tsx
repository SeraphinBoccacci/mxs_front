import {
  ChangeEvent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  ActivateIntegration,
  IftttIntegrationContainer,
  IftttIntegrationForm,
  ActivateSwitch,
  TriggerKeyInput,
  EventNameInput,
  FormInputAndLabel,
  FormLabel,
  Paragraph,
  FormInputs,
} from "./style";

import { ContentContainer } from "../style";

import {
  modifyIftttIntegration,
  toggleIftttIntegration,
} from "../../../services/ifttt";
import { AuthContext } from "../../AuthContext";
import { Tutorial } from "../../Tutorial";
import { Button } from "@material-ui/core";
import { ErrorHandlingContext } from "../../ErrorHandlingContext";
import { iftttTutorial } from "../../../constants/tutorials";

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

  const handleSwitchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsSubmitting(true);

    if (user && user.herotag) {
      await toggleIftttIntegration(user.herotag, !isIntegrationActive);
      setIsIntegrationActive(!isIntegrationActive);

      setIsSubmitting(false);
    }
  };

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
                defaultValue={user?.integrations?.ifttt?.eventName}
                onChange={setFormData}
                placeholder="StreamParticlesEvent"
              ></EventNameInput>
            </FormInputAndLabel>
            <FormInputAndLabel>
              <FormLabel>Trigger Key</FormLabel>
              <TriggerKeyInput
                disabled={isSubmitting}
                name="triggerKey"
                defaultValue={user?.integrations?.ifttt?.triggerKey}
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
    </IftttIntegrationContainer>
  );
};
