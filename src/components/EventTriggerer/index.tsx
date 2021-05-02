import { Button, ButtonProps } from "@material-ui/core";
import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { useForm } from "../../hooks/useForm";
import { triggerEvent as postTriggerEvent } from "../../services/user";
import { EventData } from "../../types/ifttt";
import { useAuth } from "../AuthContext";
import { ErrorHandlingContext } from "../ErrorHandlingContext";
import Input from "../Input";
import { Form, FormRow, StyledButton, StyledModal, StyledPaper } from "./style";

const EventTriggerer = (props: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

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
      } finally {
        handleClose();
      }
    },
    [herotag, handleError, formData, handleClose]
  );

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(event);
    },
    [setFormData]
  );

  return (
    <>
      <StyledButton {...props} onClick={handleOpen}>
        Trigger
      </StyledButton>
      <StyledModal open={isOpen} onClose={handleClose}>
        <StyledPaper>
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
        </StyledPaper>
      </StyledModal>
    </>
  );
};

export default EventTriggerer;
