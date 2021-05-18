import React from "react";

import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
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
import {
  barDisplayAnimationsOptions,
  logoAnimationsOptions,
} from "../constants";

interface ReactionParametersProps {
  handleOnChange: (event: any) => void;
  formData: DonationBarFormData;
}

const ReactionParameters = ({
  handleOnChange,
  formData,
}: ReactionParametersProps) => {
  return (
    <Section>
      <SectionTitle>Donation Reaction</SectionTitle>
      <SectionContent>
        <SectionRow>
          <Upload
            inputLabel="Upload Audio"
            inputName={DonationBarLenses.donationReaction_soundPath}
            value={formData?.[DonationBarLenses.donationReaction_soundPath]}
            onChange={handleOnChange}
            isAudio
          ></Upload>
        </SectionRow>
        <SectionRow>
          <Input
            inputLabel="Duration"
            inputName={DonationBarLenses.donationReaction_duration}
            value={formData?.donationReaction_duration}
            onChange={handleOnChange}
            width="7rem"
            endAdornment="s"
          ></Input>
        </SectionRow>
        <SectionRow>
          <Input
            inputLabel="Sent amount part Color"
            inputName={
              DonationBarLenses.donationReaction_fillSentAmountPart_color
            }
            value={formData?.donationReaction_fillSentAmountPart_color}
            onChange={handleOnChange}
            width="14rem"
          ></Input>
          <Select
            inputName={
              DonationBarLenses.donationReaction_animateBarDisplay_kind
            }
            inputLabel="Bar Animation"
            onChange={handleOnChange}
            options={barDisplayAnimationsOptions}
            value={formData.donationReaction_animateBarDisplay_kind}
            size="large"
          ></Select>
          <Select
            inputName={DonationBarLenses.donationReaction_animateLogo_kind}
            inputLabel="Logo Animation"
            onChange={handleOnChange}
            options={logoAnimationsOptions}
            value={formData.donationReaction_animateLogo_kind}
            size="large"
          ></Select>
        </SectionRow>
      </SectionContent>
    </Section>
  );
};

export default ReactionParameters;
