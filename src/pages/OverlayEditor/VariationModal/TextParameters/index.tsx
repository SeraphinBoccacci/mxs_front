import React from "react";

import Input from "../../../../components/Input";
import { SubSectionTitle } from "../../../../components/LabLayout/LabNav/SubSection/style";
import Select from "../../../../components/Select";
import {
  AlertVariationFormData,
  AlertVariationLenses,
  TextStyles,
} from "../../../../interfaces/alerts";
import { AnimationSettings } from "../AnimationSettings";
import { textPositionsOptions } from "../constants";
import {
  Comment,
  Section,
  SectionContent,
  SectionRow,
  SectionTitle,
  SubSection,
} from "../style";
import { TextAlignRadioGroup } from "./TextAlignRadioGroup";
import { TextStylesCheckboxes } from "./TextStylesCheckboxes";

interface TextParametersProps {
  handleOnChange: (event: any) => void;
  formData: AlertVariationFormData;
}

const TextParameters = ({ handleOnChange, formData }: TextParametersProps) => {
  return (
    <Section>
      <SectionTitle>Text</SectionTitle>
      <SectionContent>
        <SectionRow>
          <Select
            onChange={handleOnChange}
            options={textPositionsOptions}
            inputName={AlertVariationLenses.text_position}
            inputLabel="Text Position"
            size="large"
            value={formData?.[AlertVariationLenses.text_position]}
          ></Select>
        </SectionRow>
        <SectionRow>
          <Input
            onChange={handleOnChange}
            inputLabel="Text Content"
            inputName={AlertVariationLenses.text_content}
            value={formData?.[AlertVariationLenses.text_content]}
            isTextContent
            width="30rem"
          ></Input>
          <Comment>
            You can use the variables <i>{"{{herotag}}"}</i>,{"  "}
            <i>{"{{amount}}"}</i> and <i>{"{{message}}"}</i> in your text
          </Comment>
        </SectionRow>
        <SectionRow>
          <Input
            onChange={handleOnChange}
            inputLabel="Width"
            inputName={AlertVariationLenses.text_width}
            value={formData?.[AlertVariationLenses.text_width]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Height"
            inputName={AlertVariationLenses.text_height}
            value={formData?.[AlertVariationLenses.text_height]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Font Size"
            inputName={AlertVariationLenses.text_size}
            value={formData?.[AlertVariationLenses.text_size]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Font Color"
            inputName={AlertVariationLenses.text_color}
            value={formData?.[AlertVariationLenses.text_color]}
            width="8rem"
          ></Input>
        </SectionRow>
        <SectionRow>
          <Input
            onChange={handleOnChange}
            inputLabel="Line Height"
            inputName={AlertVariationLenses.text_lineHeight}
            value={formData?.[AlertVariationLenses.text_lineHeight]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Letter Spacing"
            inputName={AlertVariationLenses.text_letterSpacing}
            value={formData?.[AlertVariationLenses.text_letterSpacing]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Word Spacing"
            inputName={AlertVariationLenses.text_wordSpacing}
            value={formData?.[AlertVariationLenses.text_wordSpacing]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
        </SectionRow>
        <TextAlignRadioGroup
          value={formData?.[AlertVariationLenses.text_textAlign] as string}
          onChange={handleOnChange}
        ></TextAlignRadioGroup>
        <TextStylesCheckboxes
          value={
            formData?.[AlertVariationLenses.text_textStyle] as TextStyles[]
          }
          onChange={handleOnChange}
        ></TextStylesCheckboxes>
        <SubSection>
          <SubSectionTitle>Text Stroke</SubSectionTitle>
          <SectionRow>
            <Input
              onChange={handleOnChange}
              inputLabel="Stroke Width"
              inputName={AlertVariationLenses.text_stroke_width}
              value={formData?.[AlertVariationLenses.text_stroke_width]}
              type="number"
              endAdornment="px"
              width="8rem"
            ></Input>
            <Input
              onChange={handleOnChange}
              inputLabel="Stroke Color"
              inputName={AlertVariationLenses.text_stroke_color}
              value={formData?.[AlertVariationLenses.text_stroke_color]}
              width="8rem"
            ></Input>
          </SectionRow>
        </SubSection>
        <AnimationSettings
          onChange={handleOnChange}
          key="animation_setting_text"
          formData={formData}
          pathString="text"
        ></AnimationSettings>
      </SectionContent>
    </Section>
  );
};

export default TextParameters;
