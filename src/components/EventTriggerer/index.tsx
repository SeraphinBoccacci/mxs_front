import { Button } from "@material-ui/core";
import React, { createRef, useCallback, useContext } from "react";

import {
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
  const triggeredHerotagRef = createRef<HTMLInputElement>();
  const triggeredAmountRef = createRef<HTMLInputElement>();
  const triggeredMessageRef = createRef<HTMLInputElement>();
  const { herotag } = useAuth();
  const { handleError } = useContext(ErrorHandlingContext);

  const triggerEvent = useCallback(
    async (event) => {
      event.preventDefault();

      const data = {
        herotag: triggeredHerotagRef.current?.value || "test_herotag",
        amount: triggeredAmountRef.current?.value || "0.01",
        data: triggeredMessageRef.current?.value || "test_message",
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
    [
      herotag,
      triggeredEvent,
      handleError,
      triggeredHerotagRef,
      triggeredAmountRef,
      triggeredMessageRef,
    ]
  );

  return (
    <ContentContainer>
      <Form onSubmit={triggerEvent}>
        <FormRow>
          <Input
            inputName={`triggeredHerotag_${triggeredEvent}`}
            inputLabel="Herotag"
            inputRef={triggeredHerotagRef}
          ></Input>
          <Input
            inputName={`triggeredAmount_${triggeredEvent}`}
            inputLabel="Amount"
            inputRef={triggeredAmountRef}
            endAdornment="EGLD"
          ></Input>
        </FormRow>
        <FormRow>
          <Input
            inputName={`triggeredMessage_${triggeredEvent}`}
            inputLabel="Message"
            inputRef={triggeredMessageRef}
            isTextContent
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
