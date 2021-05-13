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
            width="10rem"
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
      </SectionContent>
    </Section>
  );
};

export default BorderParameters;
