import React from "react";

import Input from "../../../../../components/Input";
import Upload from "../../../../../components/Upload";
import {
  AlertVariationFormData,
  AlertVariationLenses,
} from "../../../../../types/alerts";
import {
  Section,
  SectionContent,
  SectionRow,
  SectionTitle,
} from "../../styles";

interface TextParametersProps {
  handleOnChange: (event: any) => void;
  formData: AlertVariationFormData;
}

const SoundParameters = ({ handleOnChange, formData }: TextParametersProps) => {
  return (
    <Section>
      <SectionTitle>Sound</SectionTitle>
      <SectionContent>
        <SectionRow>
          <Upload
            inputLabel="Upload Audio"
            inputName={AlertVariationLenses.sound_soundPath}
            value={formData?.[AlertVariationLenses.sound_soundPath]}
            onChange={handleOnChange}
            isAudio
          ></Upload>
        </SectionRow>
        <SectionRow>
          <Input
            inputLabel="Sound Delay"
            inputName={AlertVariationLenses.sound_soundDelay}
            onChange={handleOnChange}
            value={formData?.[AlertVariationLenses.sound_soundDelay]}
            type="number"
            endAdornment="seconds"
            tooltipText="Time between alert end and alert start"
            width="8rem"
          ></Input>
          <Input
            inputLabel="Sound Offset"
            inputName={AlertVariationLenses.sound_soundOffset}
            onChange={handleOnChange}
            value={formData?.[AlertVariationLenses.sound_soundOffset]}
            type="number"
            endAdornment="seconds"
            tooltipText="Time between alert end and alert end"
            width="8rem"
          ></Input>
        </SectionRow>
      </SectionContent>
    </Section>
  );
};

export default SoundParameters;
