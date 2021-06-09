import React from "react";

import SliderInput from "../../../../../components/SliderInput";
import Upload from "../../../../../components/Upload";
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

interface CursorParametersProps {
  handleOnChange: (event: any) => void;
  formData: DonationBarFormData;
}

const CursorParameters = ({
  handleOnChange,
  formData,
}: CursorParametersProps) => {
  return (
    <Section>
      <SectionTitle>Donation Cursor</SectionTitle>
      <SectionContent>
        <SectionRow>
          <Upload
            onChange={handleOnChange}
            inputLabel="Upload Image"
            value={formData?.[DonationBarLenses.centerCursorPath]}
            inputName={DonationBarLenses.centerCursorPath}
          ></Upload>
        </SectionRow>
        <SectionRow>
          <SliderInput
            onChange={handleOnChange}
            inputLabel="Image Scale"
            value={formData?.[DonationBarLenses.centerCursorScale]}
            inputName={DonationBarLenses.centerCursorScale}
            sliderProps={{
              valueLabelDisplay: "auto",
              step: 0.1,
              min: 0.5,
              max: 3,
            }}
            width="15rem"
          ></SliderInput>
        </SectionRow>
      </SectionContent>
    </Section>
  );
};

export default CursorParameters;
