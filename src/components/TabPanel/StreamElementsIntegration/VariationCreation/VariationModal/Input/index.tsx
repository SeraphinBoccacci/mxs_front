import {
  createStyles,
  FormControl,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Theme,
  Tooltip,
} from "@material-ui/core";
import React, { RefObject } from "react";

import { VariationLenses } from "../../../interface";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      padding: theme.spacing(0),
      margin: theme.spacing(1),
    },
    textContent: {
      width: "100%",
      margin: "0 2rem",
    },
  })
);

interface InputProps {
  inputName: VariationLenses;
  inputLabel: string;
  inputRef: RefObject<HTMLInputElement>;
  value: string | number;
  isTypeNumber?: boolean;
  isTextContent?: boolean;
  endAdornment?: string;
  tooltipText?: string;
}

const Input = ({
  inputName,
  inputLabel,
  inputRef,
  value,
  isTypeNumber,
  endAdornment,
  isTextContent,
  tooltipText,
}: InputProps) => {
  const classes = useStyles();

  const input = (
    <FormControl
      size="small"
      color="secondary"
      className={isTextContent ? classes.textContent : classes.formControl}
      variant="outlined"
    >
      <InputLabel htmlFor={inputName}>{inputLabel}</InputLabel>
      <OutlinedInput
        rows={3}
        rowsMax={3}
        multiline={isTextContent}
        inputRef={inputRef}
        id={inputName}
        name={inputName}
        defaultValue={value}
        type={isTypeNumber ? "number" : "normal"}
        endAdornment={
          endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : (
            ""
          )
        }
      />
    </FormControl>
  );

  return tooltipText ? <Tooltip title={tooltipText}>{input}</Tooltip> : input;
};

export default Input;
