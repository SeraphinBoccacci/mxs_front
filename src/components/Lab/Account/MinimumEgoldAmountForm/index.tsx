import { Button } from "@material-ui/core";
import React, { useCallback, useContext, useEffect, useState } from "react";

import { useForm } from "../../../../hooks/useForm";
import {
  getEgldPrice,
  updateMinimumRequiredAmount,
} from "../../../../services/user";
import { ContentContainer, FlexColumn } from "../../../../styles/global";
import { useAuth } from "../../../AuthContext";
import { ErrorHandlingContext } from "../../../ErrorHandlingContext";
import Input from "../../../Input";
import { Comment, Form, FormCaption } from "../style";

interface MinimumEgoldAmountFormProps {
  setIsSubmitting: (isSubmitting: boolean) => void;
  isSubmitting: boolean;
}

const MinimumEgoldAmountForm = ({
  setIsSubmitting,
  isSubmitting,
}: MinimumEgoldAmountFormProps) => {
  const { user } = useAuth();
  const [currentPrice, setCurrentPrice] = useState(150);
  const { handleError } = useContext(ErrorHandlingContext);

  useEffect(() => {
    getEgldPrice()
      .then((data) => {
        if (!data) return;

        setCurrentPrice(data.price);
      })
      .catch((error) => {
        handleError(error.message);
      });
  }, [handleError]);

  const [formData, setFormData] = useForm<{
    minimumRequiredAmount?: number;
  }>({});

  useEffect(() => {
    if (user?.integrations?.minimumRequiredAmount)
      setFormData({
        value: {
          minimumRequiredAmount: user?.integrations?.minimumRequiredAmount,
        },
      });
  }, [setFormData, user]);

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
        if (formData.minimumRequiredAmount && user?.herotag)
          await updateMinimumRequiredAmount(
            user.herotag,
            formData.minimumRequiredAmount
          );

        setIsSubmitting(false);
        return;
      } catch (error) {
        handleError(error.message);
      }
    },
    [formData.minimumRequiredAmount, user, handleError, setIsSubmitting]
  );

  return (
    <ContentContainer>
      <Form onSubmit={handleSubmit}>
        <FlexColumn>
          <FormCaption>
            If you want to prevent animation spamming on your stream (because
            technically, people can tip microcents), you can set a minimum
            required amount. If someone sends you a tip that is smaller than the
            minimum required amount, you will still receive the tip on your
            Herotag but it won’t trigger onstream animations or IFTTT actions.
            <br></br>
            <br></br>
            When unset, or set to “0”, there is no minimum.
          </FormCaption>
          <Input
            isDisabled={isSubmitting}
            inputName="minimumRequiredAmount"
            inputLabel="Min. required amount"
            value={formData.minimumRequiredAmount}
            onChange={handleOnChange}
            type="number"
            centered
          ></Input>
          <Comment>
            {formData.minimumRequiredAmount &&
              `Won't react to transactions with amount below ~$
            ${(currentPrice * formData.minimumRequiredAmount).toFixed(2)}`}
          </Comment>
        </FlexColumn>

        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </ContentContainer>
  );
};

export default MinimumEgoldAmountForm;
