import React, { useCallback } from "react";

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
import { donationBarDisplayOptions, indicationDisplay } from "../constants";

interface GlobalParametersProps {
  handleOnChange: (event: any) => void;
  formData: DonationBarFormData;
}

const GlobalParameters = ({
  handleOnChange,
  formData,
}: GlobalParametersProps) => {
  const changeSize = useCallback(
    (name: string, value: number = 0) => {
      handleOnChange({
        target: {
          name,
          value,
        },
      });
    },
    [handleOnChange]
  );

  const handleDisplayChange = useCallback(
    (event) => {
      const isHeightGreaterThanWidth =
        (formData?.displaySettings_height || 0) >
        (formData?.displaySettings_width || 0);

      const shouldInvertWidthAndHeight =
        (event.target.value === DonationBarDisplays.Horizontal &&
          isHeightGreaterThanWidth) ||
        (event.target.value === DonationBarDisplays.Vertical &&
          !isHeightGreaterThanWidth);

      if (shouldInvertWidthAndHeight) {
        changeSize(
          DonationBarLenses.displaySettings_width,
          formData?.displaySettings_height
        );

        changeSize(
          DonationBarLenses.displaySettings_height,
          formData?.displaySettings_width
        );
      }

      handleOnChange(event);
    },
    [handleOnChange, formData, changeSize]
  );

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

        <SectionRow>
          <Select
            inputName={DonationBarLenses.displaySettings_kind}
            inputLabel="Kind"
            onChange={handleDisplayChange}
            options={donationBarDisplayOptions}
            value={formData.displaySettings_kind}
          ></Select>
          {!formData.displaySettings_kind ||
            ([
              DonationBarDisplays.Vertical,
              DonationBarDisplays.Horizontal,
            ].includes(formData.displaySettings_kind) && (
              <>
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
              </>
            ))}
          {formData.displaySettings_kind === DonationBarDisplays.Circle && (
            <>
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
            </>
          )}
        </SectionRow>
      </SectionContent>
    </Section>
  );
};

export default GlobalParameters;
