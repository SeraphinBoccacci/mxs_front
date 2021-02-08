import { OutlinedButton, RegularButton, ReversedButton } from "./style";
import { ReactNode } from "react";

export const Button = ({
  onClick,
  children,
  type,
  isFormButton,
  disabled,
}: {
  onClick?: () => void;
  children: ReactNode;
  type?: string;
  isFormButton?: boolean;
  disabled?: boolean;
}) => {
  switch (type) {
    case "outlined":
      return (
        <OutlinedButton
          type={isFormButton ? "submit" : "button"}
          onClick={onClick}
          size="large"
          disabled={disabled}
        >
          {children}
        </OutlinedButton>
      );
    case "reversed":
      return (
        <ReversedButton
          type={isFormButton ? "submit" : "button"}
          onClick={onClick}
          size="large"
          disabled={disabled}
        >
          {children}
        </ReversedButton>
      );
    default:
      return (
        <RegularButton
          type={isFormButton ? "submit" : "button"}
          onClick={onClick}
          size="large"
          disabled={disabled}
        >
          {children}
        </RegularButton>
      );
  }
};
