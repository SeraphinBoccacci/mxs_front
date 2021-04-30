import { Checkbox } from "@material-ui/core";
import FormatBoldRoundedIcon from "@material-ui/icons/FormatBoldRounded";
import FormatItalicRoundedIcon from "@material-ui/icons/FormatItalicRounded";
import FormatUnderlinedRoundedIcon from "@material-ui/icons/FormatUnderlinedRounded";
import React, { ChangeEvent, useCallback } from "react";

import { AlertVariationLenses, TextStyles } from "../../../../../types/alerts";
import { SectionRow } from "../../style";

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
          name: AlertVariationLenses.text_textStyle,
          value: updatedField,
        },
      } as unknown) as ChangeEvent<HTMLInputElement>);
    },
    [value, onChange]
  );

  return (
    <SectionRow>
      <Checkbox
        key={`${AlertVariationLenses.text_textStyle}_bold`}
        size="medium"
        icon={<FormatBoldRoundedIcon color="action" />}
        checkedIcon={<FormatBoldRoundedIcon color="secondary" />}
        name={`${AlertVariationLenses.text_textStyle}_bold`}
        checked={value?.some((field) => field === TextStyles.bold)}
        onChange={handleTextStyleChange(TextStyles.bold)}
      />
      <Checkbox
        key={`${AlertVariationLenses.text_textStyle}_italic`}
        size="medium"
        icon={<FormatItalicRoundedIcon color="action" />}
        checkedIcon={<FormatItalicRoundedIcon color="secondary" />}
        name={`${AlertVariationLenses.text_textStyle}_italic`}
        checked={value?.some((field) => field === TextStyles.italic)}
        onChange={handleTextStyleChange(TextStyles.italic)}
      />
      <Checkbox
        key={`${AlertVariationLenses.text_textStyle}_underline`}
        size="medium"
        icon={<FormatUnderlinedRoundedIcon color="action" />}
        checkedIcon={<FormatUnderlinedRoundedIcon color="secondary" />}
        name={`${AlertVariationLenses.text_textStyle}_underline`}
        checked={value?.some((field) => field === TextStyles.underline)}
        onChange={handleTextStyleChange(TextStyles.underline)}
      />
    </SectionRow>
  );
};
