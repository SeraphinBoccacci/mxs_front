import React from "react";

import Input from "../../../../../components/Input";
import {
  DonationBarFormData,
  DonationBarLenses,
} from "../../../../../types/donationBar";
import {
  Section,
  SectionContent,
  SectionRow,
  SectionTitle,
} from "../../styles";
import { RowTitle } from "./style";

interface BorderParametersProps {
  handleOnChange: (event: any) => void;
  formData: DonationBarFormData;
}

const BorderParameters = ({
  handleOnChange,
  formData,
}: BorderParametersProps) => {
  return (
    <Section>
      <SectionTitle>Border & Background</SectionTitle>
      <SectionContent>
        <SectionRow>
          <Input
            inputLabel="Border Width"
            inputName={DonationBarLenses.border_width}
            onChange={handleOnChange}
            value={formData?.border_width}
            type="number"
            endAdornment="px"
            width="10rem"
          ></Input>
          <Input
            inputLabel="Border Color"
            inputName={DonationBarLenses.border_color}
            onChange={handleOnChange}
            value={formData?.border_color}
            width="11rem"
            isColorPicker
          ></Input>
          <Input
            inputLabel="Border Radius"
            inputName={DonationBarLenses.border_radius}
            onChange={handleOnChange}
            value={formData?.border_radius}
            type="number"
            endAdornment="px"
            width="10rem"
          ></Input>
        </SectionRow>
        <SectionRow>
          <RowTitle>Sent Amount Part</RowTitle>
          <Input
            inputLabel="Background Color"
            inputName={DonationBarLenses.sentAmountPart_color}
            onChange={handleOnChange}
            value={formData?.sentAmountPart_color}
            isColorPicker
            width="11rem"
          ></Input>
          <Input
            inputLabel="Text Color"
            inputName={DonationBarLenses.sentAmountPart_textColor}
            onChange={handleOnChange}
            value={formData?.sentAmountPart_textColor}
            isColorPicker
            width="11rem"
          ></Input>
        </SectionRow>
        <SectionRow>
          <RowTitle>Amount Left To Send Part</RowTitle>
          <Input
            inputLabel="Background Color"
            inputName={DonationBarLenses.amountToSendPart_color}
            onChange={handleOnChange}
            value={formData?.amountToSendPart_color}
            isColorPicker
            width="11rem"
          ></Input>
          <Input
            inputLabel="Text Color"
            inputName={DonationBarLenses.amountToSendPart_textColor}
            onChange={handleOnChange}
            value={formData?.amountToSendPart_textColor}
            isColorPicker
            width="11rem"
          ></Input>
        </SectionRow>
      </SectionContent>
    </Section>
  );
};

export default BorderParameters;
