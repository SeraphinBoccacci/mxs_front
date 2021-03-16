import { Button } from "@material-ui/core";
import React, { ChangeEvent, useCallback, useContext } from "react";

import { useForm } from "../../hooks/useForm";
import {
  EventData,
  triggerIftttEvent,
  triggerStreamElementsEvent,
} from "../../services/user";
import { ContentContainer } from "../../styles/global";
import { useAuth } from "../AuthContext";
import { ErrorHandlingContext } from "../ErrorHandlingContext";
import Input from "../Input";
import { Form, FormRow } from "./style";

interface EventTriggererProps {
  triggeredEvent: "ifttt" | "streamElements";
}

const EventTriggerer = ({ triggeredEvent }: EventTriggererProps) => {
  const { herotag } = useAuth();
  const { handleError } = useContext(ErrorHandlingContext);

  const [formData, setFormData] = useForm({
    herotag: "test_herotag",
    amount: "0.01",
    data: "test_message",
  });

  const triggerEvent = useCallback(
    async (event) => {
      event.preventDefault();

      const data: EventData = {
        herotag: formData.herotag,
        amount: formData.amount,
        data: formData.data,
      };

      try {
        if (herotag) {
          if (triggeredEvent === "ifttt")
            await triggerIftttEvent(herotag, data);
          if (triggeredEvent === "streamElements")
            await triggerStreamElementsEvent(herotag, data);
        }
      } catch (error) {
        handleError(error.message);
      }
    },
    [herotag, triggeredEvent, handleError, formData]
  );

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(event);
    },
    [setFormData]
  );

  return (
    <ContentContainer>
      <Form onSubmit={triggerEvent}>
        <FormRow>
          <Input
            inputName="herotag"
            inputLabel="Herotag"
            onChange={handleOnChange}
            value={formData.herotag}
          ></Input>
          <Input
            inputName="amount"
            inputLabel="Amount"
            endAdornment="EGLD"
            onChange={handleOnChange}
            value={formData.amount}
          ></Input>
        </FormRow>
        <FormRow>
          <Input
            inputName="data"
            inputLabel="Message"
            isTextContent
            onChange={handleOnChange}
            value={formData.data}
          ></Input>
        </FormRow>
        <Button variant="outlined" color="secondary" type="submit">
          Trigger Event
        </Button>
      </Form>
    </ContentContainer>
  );
};

export default EventTriggerer;
