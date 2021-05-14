import React from "react";

import Input from "../../../../../components/Input";
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

const VariationParameters = ({
  handleOnChange,
  formData,
}: TextParametersProps) => {
  return (
    <Section>
      <SectionTitle>Variation</SectionTitle>
      <SectionContent>
        <SectionRow>
          <Input
            inputLabel="Name"
            inputName={AlertVariationLenses.name}
            onChange={handleOnChange}
            value={formData?.name}
            width="10rem"
          ></Input>
          <Input
            inputLabel="Duration"
            tooltipText="Variation duration"
            inputName={AlertVariationLenses.duration}
            onChange={handleOnChange}
            value={formData?.duration}
            type="number"
            endAdornment="seconds"
            width="10rem"
          ></Input>
          <Input
            inputLabel="Required Amount"
            tooltipText="Required amount to display variation"
            inputName={AlertVariationLenses.requiredAmount}
            onChange={handleOnChange}
            value={formData?.requiredAmount}
            endAdornment="EGLD"
            type="number"
            width="9rem"
          ></Input>
          <Input
            inputLabel="Chances"
            tooltipText="To randomly use variation if amount sent match required one"
            inputName={AlertVariationLenses.chances}
            onChange={handleOnChange}
            value={formData?.chances}
            type="number"
            width="8rem"
          ></Input>
        </SectionRow>
        <SectionRow>
          <Input
            inputLabel="Background Color"
            inputName={AlertVariationLenses.backgroundColor}
            onChange={handleOnChange}
            value={formData?.backgroundColor || "#ffffff"}
            width="8rem"
          ></Input>
          <Input
            inputLabel="Width"
            inputName={AlertVariationLenses.width}
            onChange={handleOnChange}
            value={formData?.width}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            inputLabel="Height"
            inputName={AlertVariationLenses.heigth}
            onChange={handleOnChange}
            value={formData?.heigth}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            inputLabel="Top"
            inputName={AlertVariationLenses.offsetTop}
            onChange={handleOnChange}
            value={formData?.offsetTop}
            type="number"
            endAdornment="px"
            width="8rem"
          ></Input>
          <Input
            inputLabel="Left"
            inputName={AlertVariationLenses.offsetLeft}
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

export default VariationParameters;
