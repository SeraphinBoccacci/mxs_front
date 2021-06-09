import React, { ChangeEvent, createRef } from "react";

import { OutlinedInput as StyledOutlinedInput } from "./style";

export type OutlinedInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  inputName: string;
  value?: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
};

const OutlinedInput = ({
  value,
  inputName,
  onChange,
  isDisabled,
  ...props
}: OutlinedInputProps) => {
  const inputRef = createRef<HTMLInputElement>();

  return (
    <StyledOutlinedInput
      {...props}
      name={inputName}
      id={inputName}
      disabled={isDisabled}
      onChange={onChange}
      placeholder=" "
      value={value || ""}
      ref={inputRef}
    ></StyledOutlinedInput>
  );
};

export default OutlinedInput;
