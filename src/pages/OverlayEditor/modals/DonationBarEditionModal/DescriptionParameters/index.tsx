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

interface DescriptionParametersProps {
  handleOnChange: (event: any) => void;
  formData: DonationBarFormData;
}

const DescriptionParameters = ({
  handleOnChange,
  formData,
}: DescriptionParametersProps) => {
  return (
    <Section>
      <SectionTitle>Donation Bar Description</SectionTitle>
      <SectionContent>
        <SectionRow>
          <Input
            onChange={handleOnChange}
            inputLabel="Text Content"
            inputName={DonationBarLenses.donationBarDescription_content}
            value={formData?.[DonationBarLenses.donationBarDescription_content]}
            isTextContent
            width="30rem"
          ></Input>
        </SectionRow>
      </SectionContent>
    </Section>
  );
};

export default DescriptionParameters;
