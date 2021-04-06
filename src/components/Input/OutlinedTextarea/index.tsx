import React, { ChangeEvent, createRef, useCallback, useEffect } from "react";

import { VariationLenses } from "../../Lab/StreamElements/interface";
import { OutlinedTextArea } from "./style";

export type OutlinedTextareaProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  inputName: string | VariationLenses;
  value?: string | number;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isTextContent?: boolean;
  isDisabled?: boolean;
  width?: string;
};

const OutlinedTextarea = ({
  value = "",
  isDisabled,
  onChange,
  inputName,
  width,
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
    const inteval = setInterval(() => {
      handleResize();
    }, 500);

    return () => {
      clearInterval(inteval);
    };
  }, [textarea, handleResize]);

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
      width={width}
      value={value}
      ref={textarea}
      onChange={handleTextAreaOnChange}
      onFocus={handleResize}
    ></OutlinedTextArea>
  );
};

export default OutlinedTextarea;
