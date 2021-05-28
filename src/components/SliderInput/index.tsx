import { Slider, SliderProps } from "@material-ui/core";
import React, { ChangeEvent, memo, useCallback } from "react";

import { Label, SliderInputContainer } from "./style";

interface SliderInputProps {
  inputName: string;
  inputLabel: string;
  value?: number;
  onChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  sliderProps?: SliderProps;
  width?: string;
}

const SliderInput = ({
  inputName,
  inputLabel,
  onChange,
  sliderProps,
  width,
  value = 0,
}: SliderInputProps) => {
  const handleChange = useCallback(
    (_, value) => {
      onChange({
        target: {
          name: inputName,
          value: value,
        },
      } as ChangeEvent<HTMLInputElement>);
    },
    [inputName, onChange]
  );
  return (
    <SliderInputContainer
      width={width}
      key={`${inputName}_SliderInputContainer`}
    >
      <Label>{inputLabel}</Label>
      <Slider
        {...sliderProps}
        onChange={handleChange}
        color="primary"
        value={value}
      ></Slider>
    </SliderInputContainer>
  );
};

export default memo(SliderInput);
