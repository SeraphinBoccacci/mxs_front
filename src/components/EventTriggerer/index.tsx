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
import { MockedEventData } from "../../types/ifttt";
import { useAuth } from "../AuthContext";
import { ErrorHandlingContext } from "../ErrorHandlingContext";
import Input from "../Input";
import {
  Form,
  FormRow,
  StyledAlert,
  StyledButton,
  StyledModal,
  StyledPaper,
} from "./style";

const EventTriggerer = (props: ButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { herotag, getUser } = useAuth();
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

      const data: MockedEventData = {
        herotag: formData.herotag,
        amount: Number(formData.amount),
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
        getUser();
      }
    },
    [herotag, handleError, formData, handleClose, getUser]
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

            <StyledAlert severity="warning">
              Don&apos;t forget to refresh your OBS browser source cache before
              (double click your source and click refresh)
            </StyledAlert>

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
