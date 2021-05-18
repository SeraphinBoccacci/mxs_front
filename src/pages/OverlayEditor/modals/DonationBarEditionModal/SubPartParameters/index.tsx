import React from "react";

import Input from "../../../../../components/Input";
import { DonationBarFormData } from "../../../../../types/donationBar";
import {
  Section,
  SectionContent,
  SectionRow,
  SectionTitle,
} from "../../styles";

interface DonationBarSubPartProps {
  handleOnChange: (event: any) => void;
  formData: DonationBarFormData;
  title: string;
  colorLense: string;
}

const DonationBarSubPart = ({
  handleOnChange,
  formData,
  title,
  colorLense,
}: DonationBarSubPartProps) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>
        <SectionRow>
          <Input
            inputLabel="Color"
            inputName={colorLense}
            onChange={handleOnChange}
            value={formData?.[colorLense]}
            isColorPicker
            width="11rem"
          ></Input>
        </SectionRow>
      </SectionContent>
    </Section>
  );
};

export default DonationBarSubPart;
