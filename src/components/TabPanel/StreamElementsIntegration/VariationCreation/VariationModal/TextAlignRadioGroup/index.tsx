import { Radio, RadioGroup } from "@material-ui/core";
import FormatAlignCenterRoundedIcon from "@material-ui/icons/FormatAlignCenterRounded";
import FormatAlignLeftRoundedIcon from "@material-ui/icons/FormatAlignLeftRounded";
import FormatAlignRightRoundedIcon from "@material-ui/icons/FormatAlignRightRounded";
import React, { RefObject, useCallback, useState } from "react";

import { VariationLenses } from "../../../interface";
import { SectionRow } from "../style";

interface TextAlignRadioGroupProps {
  inputRef: RefObject<{ textAlign: string }>;
}

export const TextAlignRadioGroup = ({ inputRef }: TextAlignRadioGroupProps) => {
  const [textAlign, setTextAlign] = useState<string>(
    inputRef.current?.textAlign || ""
  );
  const handleRadioChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setTextAlign(value);

      if (inputRef.current) inputRef.current.textAlign = value;
    },
    [textAlign, inputRef]
  );

  return (
    <SectionRow>
      <RadioGroup
        key={VariationLenses.text_textAlign}
        style={{ flexDirection: "row" }}
        value={textAlign || "left"}
        onChange={handleRadioChange}
      >
        <Radio
          key={`${VariationLenses.text_textAlign}_left`}
          size="medium"
          icon={<FormatAlignLeftRoundedIcon color="action" />}
          checkedIcon={<FormatAlignLeftRoundedIcon color="secondary" />}
          name={`${VariationLenses.text_textAlign}_left`}
          value="left"
        />
        <Radio
          key={`${VariationLenses.text_textAlign}_center`}
          size="medium"
          icon={<FormatAlignCenterRoundedIcon color="action" />}
          checkedIcon={<FormatAlignCenterRoundedIcon color="secondary" />}
          name={`${VariationLenses.text_textAlign}_center`}
          value="center"
        />
        <Radio
          key={`${VariationLenses.text_textAlign}_right`}
          size="medium"
          icon={<FormatAlignRightRoundedIcon color="action" />}
          checkedIcon={<FormatAlignRightRoundedIcon color="secondary" />}
          name={`${VariationLenses.text_textAlign}_right`}
          value="right"
        />
      </RadioGroup>
    </SectionRow>
  );
};
