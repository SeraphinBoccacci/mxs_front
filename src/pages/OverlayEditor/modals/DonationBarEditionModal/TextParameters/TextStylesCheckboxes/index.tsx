import { Checkbox } from "@material-ui/core";
import FormatBoldRoundedIcon from "@material-ui/icons/FormatBoldRounded";
import FormatItalicRoundedIcon from "@material-ui/icons/FormatItalicRounded";
import FormatUnderlinedRoundedIcon from "@material-ui/icons/FormatUnderlinedRounded";
import React, { ChangeEvent, useCallback } from "react";

import { DonationBarLenses } from "../../../../../../types/donationBar";
import { TextStyles } from "../../../../../../types/style";
import { SectionRow } from "../../../styles";

interface TextStylesProps {
  value: TextStyles[];
  onChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const TextStylesCheckboxes = ({ onChange, value }: TextStylesProps) => {
  const handleTextStyleChange = useCallback(
    (checkedValue: TextStyles) => (
      event: React.ChangeEvent<HTMLInputElement>,
      checked: boolean
    ) => {
      const updatedField: TextStyles[] = checked
        ? [...(value || []), checkedValue]
        : value?.filter((field) => field !== checkedValue) || [];

      onChange(({
        target: {
          name: DonationBarLenses.donationBarDescription_textStyle,
          value: updatedField,
        },
      } as unknown) as ChangeEvent<HTMLInputElement>);
    },
    [value, onChange]
  );

  return (
    <SectionRow>
      <Checkbox
        key={`${DonationBarLenses.donationBarDescription_textStyle}_bold`}
        size="medium"
        icon={<FormatBoldRoundedIcon color="action" />}
        checkedIcon={<FormatBoldRoundedIcon color="secondary" />}
        name={`${DonationBarLenses.donationBarDescription_textStyle}_bold`}
        checked={value?.some((field) => field === TextStyles.bold) || false}
        onChange={handleTextStyleChange(TextStyles.bold)}
      />
      <Checkbox
        key={`${DonationBarLenses.donationBarDescription_textStyle}_italic`}
        size="medium"
        icon={<FormatItalicRoundedIcon color="action" />}
        checkedIcon={<FormatItalicRoundedIcon color="secondary" />}
        name={`${DonationBarLenses.donationBarDescription_textStyle}_italic`}
        checked={value?.some((field) => field === TextStyles.italic) || false}
        onChange={handleTextStyleChange(TextStyles.italic)}
      />
      <Checkbox
        key={`${DonationBarLenses.donationBarDescription_textStyle}_underline`}
        size="medium"
        icon={<FormatUnderlinedRoundedIcon color="action" />}
        checkedIcon={<FormatUnderlinedRoundedIcon color="secondary" />}
        name={`${DonationBarLenses.donationBarDescription_textStyle}_underline`}
        checked={
          value?.some((field) => field === TextStyles.underline) || false
        }
        onChange={handleTextStyleChange(TextStyles.underline)}
      />
    </SectionRow>
  );
};
