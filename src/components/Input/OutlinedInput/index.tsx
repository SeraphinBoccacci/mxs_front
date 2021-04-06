import React, { ChangeEvent, createRef } from "react";

import { VariationLenses } from "../../Lab/StreamElements/interface";
import { OutlinedInput as StyledOutlinedInput } from "./style";

export type OutlinedInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  inputName: string | VariationLenses;
  value?: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  width?: string;
};

const OutlinedInput = ({
  value = "",
  inputName,
  onChange,
  isDisabled,
  width,
  ...props
}: OutlinedInputProps) => {
  const inputRef = createRef<HTMLInputElement>();

  return (
    <StyledOutlinedInput
      {...props}
      name={inputName}
      id={inputName}
      disabled={isDisabled}
      width={width}
      onChange={onChange}
      placeholder=" "
      value={value}
      ref={inputRef}
    ></StyledOutlinedInput>
  );
};

export default OutlinedInput;
