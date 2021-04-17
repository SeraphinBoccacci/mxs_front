import React, { ReactNode } from "react";

import { VariationLenses } from "../../../pages/OverlaysSettings/interface";
import OutlinedInput, { OutlinedInputProps } from "./OutlinedInput";
import OutlinedTextArea, { OutlinedTextareaProps } from "./OutlinedTextarea";
import { Adornment, InputContainer, InputLabel } from "./style";

export type BaseProps = (OutlinedInputProps | OutlinedTextareaProps) & {
  inputName: string | VariationLenses;
  inputLabel: string;
  value?: string | number;
  endAdornment?: string | ReactNode;
  isDisabled?: boolean;
  centered?: boolean;
  width?: string;
};

const isTextArea = (
  props: OutlinedTextareaProps | OutlinedInputProps
): props is OutlinedTextareaProps => {
  return !!(props as OutlinedTextareaProps).isTextContent;
};

const Base = (props: BaseProps) => {
  const { width, value, centered, inputName, inputLabel, endAdornment } = props;

  return (
    <InputContainer width={width} isEmpty={!value} centered={centered}>
      {isTextArea(props) ? (
        <OutlinedTextArea {...props} value={value}></OutlinedTextArea>
      ) : (
        <OutlinedInput {...props} value={value}></OutlinedInput>
      )}
      <InputLabel htmlFor={inputName}>{inputLabel}</InputLabel>
      {!!endAdornment && (
        <Adornment isVisible={!!value}>{endAdornment}</Adornment>
      )}
    </InputContainer>
  );
};

export default Base;
