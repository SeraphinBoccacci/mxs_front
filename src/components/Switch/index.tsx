import React from "react";

import { CheckBackground, OffValue, OnValue, SwitchContainer } from "./style";

interface SwitchProps {
  onLabel: string;
  offLabel: string;
  isActive: boolean;
  setIsActive: (b: boolean) => void;
  variant?: "inverted";
}

const Switch = ({
  onLabel,
  offLabel,
  isActive,
  setIsActive,
  variant,
}: SwitchProps) => {
  return (
    <SwitchContainer variant={variant}>
      <CheckBackground variant={variant} isActive={isActive}></CheckBackground>
      <OffValue
        variant={variant}
        onClick={() => setIsActive(false)}
        isActive={isActive}
      >
        {offLabel}
      </OffValue>
      <OnValue
        variant={variant}
        onClick={() => setIsActive(true)}
        isActive={isActive}
      >
        {onLabel}
      </OnValue>
    </SwitchContainer>
  );
};

export default Switch;
