import React from "react";

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
      </SectionContent>
    </Section>
  );
};

export default CursorParameters;
