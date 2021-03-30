import React from "react";

import { ActivateSwitch, Container } from "./style";

interface ActivationSwitchProps {
  label: string;
  isSubmitting: boolean;
  isActive: boolean;
  onChange: () => void;
}

const ActivationSwitch = ({
  label,
  isSubmitting,
  isActive,
  onChange,
}: ActivationSwitchProps) => {
  return (
    <Container>
      {label}
      <ActivateSwitch
        disabled={isSubmitting}
        checked={isActive}
        onChange={onChange}
        color="primary"
      ></ActivateSwitch>
    </Container>
  );
};

export default ActivationSwitch;
