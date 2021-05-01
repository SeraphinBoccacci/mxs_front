import { Radio, RadioGroup } from "@material-ui/core";
import FormatAlignCenterRoundedIcon from "@material-ui/icons/FormatAlignCenterRounded";
import FormatAlignLeftRoundedIcon from "@material-ui/icons/FormatAlignLeftRounded";
import FormatAlignRightRoundedIcon from "@material-ui/icons/FormatAlignRightRounded";
import React, { ChangeEvent, useCallback } from "react";

import { AlertVariationLenses } from "../../../../../types/alerts";
import { SectionRow } from "../../style";

interface TextAlignRadioGroupProps {
  value: string;
  onChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const TextAlignRadioGroup = ({
  onChange,
  value,
}: TextAlignRadioGroupProps) => {
  const handleRadioChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      onChange({
        target: { name: AlertVariationLenses.text_textAlign, value },
      } as ChangeEvent<HTMLInputElement>);
    },
    [onChange]
  );

  return (
    <SectionRow>
      <RadioGroup
        key={AlertVariationLenses.text_textAlign}
        style={{ flexDirection: "row" }}
        value={value || ""}
        onChange={handleRadioChange}
      >
        <Radio
          size="medium"
          icon={<FormatAlignLeftRoundedIcon color="action" />}
          checkedIcon={<FormatAlignLeftRoundedIcon color="secondary" />}
          name={`${AlertVariationLenses.text_textAlign}_left`}
          value="left"
        />
        <Radio
          size="medium"
          icon={<FormatAlignCenterRoundedIcon color="action" />}
          checkedIcon={<FormatAlignCenterRoundedIcon color="secondary" />}
          name={`${AlertVariationLenses.text_textAlign}_center`}
          value="center"
        />
        <Radio
          size="medium"
          icon={<FormatAlignRightRoundedIcon color="action" />}
          checkedIcon={<FormatAlignRightRoundedIcon color="secondary" />}
          name={`${AlertVariationLenses.text_textAlign}_right`}
          value="right"
        />
      </RadioGroup>
    </SectionRow>
  );
};
