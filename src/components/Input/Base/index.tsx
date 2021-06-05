import React, { ReactNode, useMemo } from "react";

import { AlertVariationLenses } from "../../../types/alerts";
import OutlinedColorPicker, {
  OutlinedColorPickerProps,
} from "./OutlinedColorPicker";
import OutlinedInput, { OutlinedInputProps } from "./OutlinedInput";
import OutlinedTextArea, { OutlinedTextareaProps } from "./OutlinedTextarea";
import { Adornment, InputContainer, InputLabel } from "./style";

type BaseInputType =
  | OutlinedInputProps
  | OutlinedTextareaProps
  | OutlinedColorPickerProps;

export type BaseProps = BaseInputType & {
  inputName: string | AlertVariationLenses;
  inputLabel: string;
  value?: string | number;
  endAdornment?: string | ReactNode;
  isDisabled?: boolean;
  centered?: boolean;
  width?: string;
  withoutMargin?: boolean;
};

const isTextArea = (props: BaseInputType): props is OutlinedTextareaProps => {
  return !!(props as OutlinedTextareaProps).isTextContent;
};

const isColorPicker = (
  props: BaseInputType
): props is OutlinedTextareaProps => {
  return !!(props as OutlinedColorPickerProps).isColorPicker;
};

const Base = (props: BaseProps) => {
  const {
    width,
    value,
    centered,
    inputName,
    inputLabel,
    endAdornment,
    withoutMargin,
  } = props;

  const component = useMemo(() => {
    if (isTextArea(props)) {
      return <OutlinedTextArea {...props} value={value}></OutlinedTextArea>;
    }

    if (isColorPicker(props)) {
      return (
        <OutlinedColorPicker
          {...props}
          value={value as string}
        ></OutlinedColorPicker>
      );
    }

    return <OutlinedInput {...props} value={value}></OutlinedInput>;
  }, [props, value]);

  return (
    <InputContainer
      withoutMargin={withoutMargin}
      width={width}
      isEmpty={!value}
      centered={centered}
    >
      {component}
      <InputLabel htmlFor={inputName}>{inputLabel}</InputLabel>
      {!!endAdornment && (
        <Adornment isVisible={!!value}>{endAdornment}</Adornment>
      )}
    </InputContainer>
  );
};

export default Base;
