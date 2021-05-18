import React from "react";

import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
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
import { indicationDisplay } from "../constants";

interface GlobalParametersProps {
  handleOnChange: (event: any) => void;
  formData: DonationBarFormData;
}

const GlobalParameters = ({
  handleOnChange,
  formData,
}: GlobalParametersProps) => {
  return (
    <Section>
      <SectionTitle>Donation Bar</SectionTitle>
      <SectionContent>
        <SectionRow>
          <Input
            inputLabel="Donation Goal"
            inputName={DonationBarLenses.donationGoalAmount_value}
            onChange={handleOnChange}
            value={formData?.donationGoalAmount_value}
            type="number"
            endAdornment="eGLD"
            width="15rem"
          ></Input>
          <Select
            onChange={handleOnChange}
            options={indicationDisplay}
            inputName={DonationBarLenses.indicationDisplay}
            inputLabel="Indication"
            size="large"
            value={formData?.indicationDisplay}
          ></Select>
        </SectionRow>
        <SectionRow>
          <Input
            inputLabel="Top"
            inputName={DonationBarLenses.offsetTop}
            onChange={handleOnChange}
            value={formData?.offsetTop}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            inputLabel="Left"
            inputName={DonationBarLenses.offsetLeft}
            onChange={handleOnChange}
            value={formData?.offsetLeft}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
        </SectionRow>
      </SectionContent>
    </Section>
  );
};

export default GlobalParameters;
