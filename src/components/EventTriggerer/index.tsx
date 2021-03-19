import { Button } from "@material-ui/core";
import React, { ChangeEvent, useCallback, useContext, useEffect } from "react";

import { useForm } from "../../hooks/useForm";
import {
  EventData,
  triggerEvent as postTriggerEvent,
} from "../../services/user";
import { ContentContainer } from "../../styles/global";
import { useAuth } from "../AuthContext";
import { ErrorHandlingContext } from "../ErrorHandlingContext";
import Input from "../Input";
import { Form, FormRow } from "./style";

const EventTriggerer = () => {
  const { herotag } = useAuth();
  const { handleError } = useContext(ErrorHandlingContext);

  const [formData, setFormData] = useForm({
    herotag: "test_herotag",
    amount: "0.01",
    message: "test_message",
  });

  useEffect(() => {
    setFormData({
      value: {
        herotag: "test_herotag",
        amount: "0.01",
        message: "test_message",
      },
    });
  }, [setFormData]);

  const triggerEvent = useCallback(
    async (event) => {
      event.preventDefault();

      const data: EventData = {
        herotag: formData.herotag,
        amount: formData.amount,
        data: formData.message,
      };

      try {
        if (herotag) {
          await postTriggerEvent(herotag, data);
        }
      } catch (error) {
        handleError(error.message);
      }
    },
    [herotag, handleError, formData]
  );

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(event);
    },
    [setFormData]
  );

  return (
    <ContentContainer>
      <Form>
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
            type="number"
          ></Input>
        </FormRow>
        <FormRow>
          <Input
            inputName="message"
            inputLabel="Message"
            isTextContent
            onChange={handleOnChange}
            value={formData.message}
          ></Input>
        </FormRow>
        <Button
          variant="outlined"
          color="secondary"
          type="button"
          onClick={triggerEvent}
        >
          Trigger Event
        </Button>
      </Form>
    </ContentContainer>
  );
};

export default EventTriggerer;
