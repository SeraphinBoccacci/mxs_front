import React from "react";

import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import {
  DonationBarDisplays,
  DonationBarFormData,
  DonationBarLenses,
} from "../../../../../types/donationBar";
import {
  Section,
  SectionContent,
  SectionRow,
  SectionTitle,
} from "../../styles";
import { donationBarDisplayOptions } from "../constants";

interface DisplayParametersProps {
  handleOnChange: (event: any) => void;
  formData: DonationBarFormData;
}

const DisplayParameters = ({
  handleOnChange,
  formData,
}: DisplayParametersProps) => {
  return (
    <Section>
      <SectionTitle>Display</SectionTitle>

      <SectionContent>
        <SectionRow>
          <Select
            inputName={DonationBarLenses.displaySettings_kind}
            inputLabel="Kind"
            onChange={handleOnChange}
            options={donationBarDisplayOptions}
            value={formData.displaySettings_kind}
          ></Select>
        </SectionRow>
        {!formData.displaySettings_kind ||
        [DonationBarDisplays.Vertical, DonationBarDisplays.Horizontal].includes(
          formData.displaySettings_kind
        ) ? (
          <SectionRow>
            <Input
              inputLabel="Width"
              inputName={DonationBarLenses.displaySettings_width}
              onChange={handleOnChange}
              value={formData?.displaySettings_width}
              width="8rem"
              endAdornment="px"
            ></Input>
            <Input
              inputLabel="Height"
              inputName={DonationBarLenses.displaySettings_height}
              onChange={handleOnChange}
              value={formData?.displaySettings_height}
              width="8rem"
              endAdornment="px"
            ></Input>
          </SectionRow>
        ) : null}
        {formData.displaySettings_kind === DonationBarDisplays.Circle ? (
          <SectionRow>
            <Input
              inputLabel="Width"
              inputName={DonationBarLenses.displaySettings_width}
              onChange={handleOnChange}
              value={formData?.displaySettings_width}
              width="8rem"
              endAdornment="px"
            ></Input>
            <Input
              inputLabel="Stroke Width"
              inputName={DonationBarLenses.displaySettings_strokeWidth}
              onChange={handleOnChange}
              value={formData?.displaySettings_strokeWidth}
              width="11rem"
              endAdornment="px"
            ></Input>
          </SectionRow>
        ) : null}
      </SectionContent>
    </Section>
  );
};

export default DisplayParameters;
