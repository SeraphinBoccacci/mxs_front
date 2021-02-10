import {
  ChangeEvent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Button } from "../../Button";
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
  HideButton,
} from "./style";

import { ContentContainer } from "../style";

import {
  modifyIftttIntegration,
  toggleIftttIntegration,
} from "../../../services/ifttt";
import { AuthContext } from "../../AuthContext";
import { FlexRow } from "../../../styles/global";
import { Tutorial } from "./Tutorial";

interface IftttIntegrationState {
  triggerKey?: string;
  eventName?: string;
}

export const IftttIntegration = () => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTutorialVisible, setIsTutorialVisible] = useState(true);
  const [isIntegrationActive, setIsIntegrationActive] = useState(
    user?.integrations?.ifttt?.isActive || false
  );

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

  const [formData, setFormData] = useReducer(formReducer, {
    ...(user &&
      user?.integrations?.ifttt?.triggerKey && {
        triggerKey: user?.integrations?.ifttt.triggerKey,
      }),
    ...(user &&
      user?.integrations?.ifttt?.eventName && {
        eventName: user?.integrations?.ifttt.eventName,
      }),
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (formData.eventName && formData.triggerKey && user && user.herotag)
      await modifyIftttIntegration(
        user.herotag,
        formData.eventName,
        formData.triggerKey
      );

    setIsSubmitting(false);
    return;
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
      <HideButton
        onClick={() => setIsTutorialVisible((prevState) => !prevState)}
        variant="contained"
        color="secondary"
      >
        {isTutorialVisible ? "Hide" : "Show"} tutorial
      </HideButton>
      {isTutorialVisible ? <Tutorial></Tutorial> : null}

      <ContentContainer elevation={3} variant="elevation">
        <IftttIntegrationForm onSubmit={handleSubmit}>
          <FlexRow>
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
          </FlexRow>

          <Button isFormButton>Submit</Button>
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
