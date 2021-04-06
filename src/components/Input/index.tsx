import { Tooltip } from "@material-ui/core";
import React, { memo } from "react";

import Base, { BaseProps } from "./Base";

type InputProps = BaseProps & {
  tooltipText?: string;
};

const Input = ({ tooltipText, ...inputProps }: InputProps) => {
  return tooltipText ? (
    <Tooltip title={tooltipText}>
      <div>
        <Base {...inputProps}></Base>
      </div>
    </Tooltip>
  ) : (
    <Base {...inputProps}></Base>
  );
};

export default memo(Input);
