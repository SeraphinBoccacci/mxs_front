import React, { ChangeEvent, createRef, useCallback, useEffect } from "react";

import { AlertVariationLenses } from "../../../../interfaces/alerts";
import { OutlinedTextArea } from "./style";

export type OutlinedTextareaProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  inputName: string | AlertVariationLenses;
  value?: string | number;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isTextContent?: boolean;
  isDisabled?: boolean;
};

const OutlinedTextarea = ({
  value = "",
  isDisabled,
  onChange,
  inputName,
  ...props
}: OutlinedTextareaProps) => {
  const textarea = createRef<HTMLTextAreaElement>();

  const handleResize = useCallback(() => {
    if (textarea.current) {
      textarea.current.style.cssText = "height: 0;";
      textarea.current.style.cssText = `height: ${textarea.current.scrollHeight}px`;
    }
  }, [textarea]);

  useEffect(() => {
    setTimeout(() => {
      handleResize();
    }, 500);
  }, [handleResize]);

  const handleTextAreaOnChange = useCallback(
    (event) => {
      handleResize();

      onChange(event);
    },
    [onChange, handleResize]
  );

  return (
    <OutlinedTextArea
      {...props}
      disabled={isDisabled}
      name={inputName}
      id={inputName}
      value={value}
      ref={textarea}
      onChange={handleTextAreaOnChange}
      onFocus={handleResize}
      placeholder=" "
    ></OutlinedTextArea>
  );
};

export default OutlinedTextarea;
