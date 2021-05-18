import React, { ChangeEvent, useCallback, useState } from "react";
import { ColorResult } from "react-color";

import OutlinedInput from "../OutlinedInput";
import { Converters, converters, DEFAULT_CONVERTER } from "./converters";
import PickerDialog from "./PickerDialog";

export interface OutlinedColorPickerProps {
  inputName: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  isColorPicker?: boolean;
  defaultColor?: string;
  inputLabel: string;
  convert?: Converters;
}

const ColorPicker = ({
  onChange,
  convert = DEFAULT_CONVERTER,
  inputName,
  value,
}: OutlinedColorPickerProps) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleTextChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      onChange({
        target: {
          name: inputName,
          value,
        },
      } as ChangeEvent<HTMLInputElement>);
    },
    [onChange, inputName]
  );

  const handleOnChange = useCallback(
    (value) => {
      onChange({
        target: {
          name: inputName,
          value,
        },
      } as ChangeEvent<HTMLInputElement>);
    },
    [onChange, inputName]
  );

  const handleChangeColorPicker = useCallback(
    (c: ColorResult) => {
      const newValue = converters[convert](c);

      handleOnChange(newValue);
    },
    [handleOnChange, convert]
  );

  return (
    <>
      <OutlinedInput
        inputName={inputName}
        onClick={() => setShowPicker(true)}
        onChange={handleTextChange}
        value={value}
      ></OutlinedInput>
      {showPicker && (
        <PickerDialog
          value={value}
          showPicker={showPicker}
          onClick={() => setShowPicker(false)}
          onChange={handleChangeColorPicker}
        />
      )}
    </>
  );
};

export default ColorPicker;
