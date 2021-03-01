import { Checkbox } from "@material-ui/core";
import FormatBoldRoundedIcon from "@material-ui/icons/FormatBoldRounded";
import FormatItalicRoundedIcon from "@material-ui/icons/FormatItalicRounded";
import FormatUnderlinedRoundedIcon from "@material-ui/icons/FormatUnderlinedRounded";
import React, { RefObject, useCallback, useState } from "react";

import { TextStyles, VariationLenses } from "../../../interface";
import { SectionRow } from "../style";

interface TextStylesProps {
  inputRef: RefObject<{ textStyles: TextStyles[] }>;
}

export const TextStylesCheckboxes = ({ inputRef }: TextStylesProps) => {
  const [textStyles, setTextStyles] = useState<TextStyles[]>(
    inputRef.current?.textStyles || []
  );
  const handleTextStyleChange = useCallback(
    (checkedValue: TextStyles) => (
      event: React.ChangeEvent<HTMLInputElement>,
      checked: boolean
    ) => {
      const updatedField: TextStyles[] = checked
        ? [...(textStyles || []), checkedValue]
        : textStyles.filter((field) => field !== checkedValue) || [];

      setTextStyles(updatedField);

      if (inputRef.current) {
        inputRef.current.textStyles = updatedField;
      }
    },
    [textStyles]
  );

  return (
    <SectionRow>
      <Checkbox
        key={`${VariationLenses.text_textStyle}_bold`}
        size="medium"
        icon={<FormatBoldRoundedIcon color="action" />}
        checkedIcon={<FormatBoldRoundedIcon color="secondary" />}
        name={`${VariationLenses.text_textStyle}_bold`}
        checked={textStyles.some((field) => field === TextStyles.bold)}
        onChange={handleTextStyleChange(TextStyles.bold)}
      />
      <Checkbox
        key={`${VariationLenses.text_textStyle}_italic`}
        size="medium"
        icon={<FormatItalicRoundedIcon color="action" />}
        checkedIcon={<FormatItalicRoundedIcon color="secondary" />}
        name={`${VariationLenses.text_textStyle}_italic`}
        checked={textStyles.some((field) => field === TextStyles.italic)}
        onChange={handleTextStyleChange(TextStyles.italic)}
      />
      <Checkbox
        key={`${VariationLenses.text_textStyle}_underline`}
        size="medium"
        icon={<FormatUnderlinedRoundedIcon color="action" />}
        checkedIcon={<FormatUnderlinedRoundedIcon color="secondary" />}
        name={`${VariationLenses.text_textStyle}_underline`}
        checked={textStyles.some((field) => field === TextStyles.underline)}
        onChange={handleTextStyleChange(TextStyles.underline)}
      />
    </SectionRow>
  );
};
