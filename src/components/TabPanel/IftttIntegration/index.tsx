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
} from "./style";
import {
  modifyIftttIntegration,
  toggleIftttIntegration,
} from "../../../services/ifttt";
import { AuthContext } from "../../AuthContext";

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
      <IftttIntegrationForm onSubmit={handleSubmit}>
        <FormInputAndLabel>
          <FormLabel>Event Name</FormLabel>
          <EventNameInput
            disabled={isSubmitting}
            name="eventName"
            defaultValue={user?.integrations?.ifttt?.eventName}
            onChange={setFormData}
            placeholder="MaiarTest2x"
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

        <Button isFormButton type="outlined">
          Submit
        </Button>
      </IftttIntegrationForm>
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
