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
import { AnimationSettings } from "../AnimationSettings";

interface TextParametersProps {
  handleOnChange: (event: any) => void;
  formData: AlertVariationFormData;
}

const ImageParameters = ({ handleOnChange, formData }: TextParametersProps) => {
  return (
    <Section>
      <SectionTitle>Image</SectionTitle>
      <SectionContent>
        <SectionRow>
          <Upload
            onChange={handleOnChange}
            inputLabel="Upload Image"
            value={formData?.[AlertVariationLenses.image_imagePath]}
            inputName={AlertVariationLenses.image_imagePath}
          ></Upload>
        </SectionRow>
        <SectionRow>
          <Input
            onChange={handleOnChange}
            inputLabel="Width"
            inputName={AlertVariationLenses.image_width}
            value={formData?.[AlertVariationLenses.image_width]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Height"
            inputName={AlertVariationLenses.image_height}
            value={formData?.[AlertVariationLenses.image_height]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
        </SectionRow>
        <AnimationSettings
          key="animation_setting_image"
          formData={formData}
          pathString="image"
          onChange={handleOnChange}
        ></AnimationSettings>
      </SectionContent>
    </Section>
  );
};

export default ImageParameters;
