import React from "react";

import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import {
  DonationBarFormData,
  DonationBarLenses,
} from "../../../../../types/donationBar";
import { TextStyles } from "../../../../../types/style";
import {
  Section,
  SectionContent,
  SectionRow,
  SectionTitle,
  SubSection,
  SubSectionTitle,
} from "../../styles";
import { textPositionsOptions } from "../constants";
import { TextAlignRadioGroup } from "./TextAlignRadioGroup";
import { TextStylesCheckboxes } from "./TextStylesCheckboxes";

interface TextParametersProps {
  handleOnChange: (event: any) => void;
  formData: DonationBarFormData;
}

const TextParameters = ({ handleOnChange, formData }: TextParametersProps) => {
  return (
    <Section>
      <SectionTitle>Donation Bar Text Style</SectionTitle>
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
        <SectionRow>
          <Select
            onChange={handleOnChange}
            options={textPositionsOptions}
            inputName={DonationBarLenses.donationBarDescription_position}
            inputLabel="Text Position"
            size="large"
            value={
              formData?.[DonationBarLenses.donationBarDescription_position]
            }
          ></Select>
        </SectionRow>
        <SectionRow>
          <Input
            onChange={handleOnChange}
            inputLabel="Width"
            inputName={DonationBarLenses.donationBarDescription_width}
            value={formData?.[DonationBarLenses.donationBarDescription_width]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Height"
            inputName={DonationBarLenses.donationBarDescription_height}
            value={formData?.[DonationBarLenses.donationBarDescription_height]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Font Size"
            inputName={DonationBarLenses.donationBarDescription_size}
            value={formData?.[DonationBarLenses.donationBarDescription_size]}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Font Color"
            inputName={DonationBarLenses.donationBarDescription_color}
            value={formData?.[DonationBarLenses.donationBarDescription_color]}
            isColorPicker
            width="11rem"
          ></Input>
        </SectionRow>
        <SectionRow>
          <Input
            onChange={handleOnChange}
            inputLabel="Line Height"
            inputName={DonationBarLenses.donationBarDescription_lineHeight}
            value={
              formData?.[DonationBarLenses.donationBarDescription_lineHeight]
            }
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Letter Spacing"
            inputName={DonationBarLenses.donationBarDescription_letterSpacing}
            value={
              formData?.[DonationBarLenses.donationBarDescription_letterSpacing]
            }
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            onChange={handleOnChange}
            inputLabel="Word Spacing"
            inputName={DonationBarLenses.donationBarDescription_wordSpacing}
            value={
              formData?.[DonationBarLenses.donationBarDescription_wordSpacing]
            }
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
        </SectionRow>
        <TextAlignRadioGroup
          value={
            formData?.[
              DonationBarLenses.donationBarDescription_textAlign
            ] as string
          }
          onChange={handleOnChange}
        ></TextAlignRadioGroup>
        <TextStylesCheckboxes
          value={
            formData?.[
              DonationBarLenses.donationBarDescription_textStyle
            ] as TextStyles[]
          }
          onChange={handleOnChange}
        ></TextStylesCheckboxes>
        <SubSection>
          <SubSectionTitle>Text Stroke</SubSectionTitle>
          <SectionRow>
            <Input
              onChange={handleOnChange}
              inputLabel="Stroke Width"
              inputName={DonationBarLenses.donationBarDescription_stroke_width}
              value={
                formData?.[
                  DonationBarLenses.donationBarDescription_stroke_width
                ]
              }
              type="number"
              endAdornment="px"
              width="9rem"
            ></Input>
            <Input
              onChange={handleOnChange}
              inputLabel="Stroke Color"
              inputName={DonationBarLenses.donationBarDescription_stroke_color}
              value={
                formData?.[
                  DonationBarLenses.donationBarDescription_stroke_color
                ]
              }
              isColorPicker
              width="11rem"
            ></Input>
          </SectionRow>
        </SubSection>
      </SectionContent>
    </Section>
  );
};

export default TextParameters;
