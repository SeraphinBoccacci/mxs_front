import React, { useCallback, useContext, useEffect, useState } from "react";

import { useAuth } from "../../../components/AuthContext";
import { ErrorHandlingContext } from "../../../components/ErrorHandlingContext";
import Input from "../../../components/Input";
import { useForm } from "../../../hooks/useForm";
import {
  getEgldPrice,
  updateMinimumRequiredAmount,
  updateTinyAmountsWording,
} from "../../../services/user";
import { ContentContainer, Paragraph } from "../../../styles/global";
import { Comment, FormCaption } from "../style";
import { Inputs, StyledButton } from "./style";

interface MinimumEgoldAmountFormProps {
  setIsSubmitting: (isSubmitting: boolean) => void;
  isSubmitting: boolean;
}

const TinyAmounts = ({
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
    ceilAmount?: number;
    wording?: string;
  }>({});

  useEffect(() => {
    setFormData({
      value: {
        minimumRequiredAmount: user?.integrations?.minimumRequiredAmount,
        ceilAmount: user?.integrations?.tinyAmountWording?.ceilAmount,
        wording: user?.integrations?.tinyAmountWording?.wording,
      },
    });
  }, [setFormData, user]);

  const handleOnChange = useCallback(
    (data) => {
      setFormData(data);
    },
    [setFormData]
  );

  const handleClick = useCallback(async () => {
    try {
      setIsSubmitting(true);

      await Promise.all(
        [
          formData.minimumRequiredAmount &&
            user?.herotag &&
            updateMinimumRequiredAmount(
              user.herotag,
              formData.minimumRequiredAmount
            ),
          formData.ceilAmount &&
            formData.wording &&
            user?.herotag &&
            updateTinyAmountsWording(
              user.herotag,
              formData.ceilAmount,
              formData.wording
            ),
        ].filter(Boolean)
      );

      setIsSubmitting(false);
      return;
    } catch (error) {
      handleError(error.message);
    }
  }, [formData, user, handleError, setIsSubmitting]);

  return (
    <ContentContainer>
      <Inputs>
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
          endAdornment="EGLD"
          centered
        ></Input>
        <Comment>
          {formData.minimumRequiredAmount &&
            `Won't react to transactions with amount below ~$${(
              currentPrice * formData.minimumRequiredAmount
            ).toFixed(2)}`}
        </Comment>
        <Paragraph>
          If the amount of ¤ is under{" "}
          <Input
            isDisabled={isSubmitting}
            inputName="ceilAmount"
            inputLabel="amount"
            value={formData.ceilAmount}
            onChange={handleOnChange}
            type="number"
            endAdornment="EGLD"
            width="10rem"
            withoutMargin
          ></Input>{" "}
          , display{" "}
          <Input
            isDisabled={isSubmitting}
            inputName="wording"
            inputLabel="wording"
            value={formData.wording}
            onChange={handleOnChange}
            width="10rem"
            withoutMargin
          ></Input>{" "}
          instead
        </Paragraph>
        <Comment>
          {formData.ceilAmount &&
            formData.wording &&
            `If the amount of ¤ is under ~$${(
              currentPrice * formData.ceilAmount
            ).toFixed(2)}, display "${formData.wording}" instead`}
        </Comment>
      </Inputs>
      <StyledButton variant="outlined" color="secondary" onClick={handleClick}>
        Submit
      </StyledButton>
    </ContentContainer>
  );
};

export default TinyAmounts;
