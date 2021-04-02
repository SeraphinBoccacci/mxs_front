import {
  createStyles,
  FormControl,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  OutlinedInputProps,
  Theme,
  Tooltip,
} from "@material-ui/core";
import React, { ChangeEvent, memo, ReactNode } from "react";

import { VariationLenses } from "../Lab/StreamElements/interface";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      padding: theme.spacing(0),
      margin: theme.spacing(1),
    },
    textContent: {
      width: "100%",
      margin: theme.spacing(1),
    },
  })
);

type InputProps = OutlinedInputProps & {
  inputName: string | VariationLenses;
  inputLabel: string;
  value?: string | number;
  onChange:
    | ((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void)
    | ((event: ChangeEvent<HTMLInputElement>) => void);
  isTextContent?: boolean;
  endAdornment?: string | ReactNode;
  tooltipText?: string;
  isDisabled?: boolean;
};

const Input = ({
  inputName,
  inputLabel,
  value = "",
  onChange,
  endAdornment,
  isTextContent,
  tooltipText,
  isDisabled,
  type,
}: InputProps) => {
  const classes = useStyles();

  const input = (
    <FormControl
      size="small"
      className={isTextContent ? classes.textContent : classes.formControl}
      variant="outlined"
      color="primary"
    >
      <InputLabel variant="outlined" color="secondary" htmlFor={inputName}>
        {inputLabel}
      </InputLabel>
      <OutlinedInput
        type={type}
        disabled={isDisabled}
        onChange={onChange}
        notched
        rowsMin={3}
        multiline={isTextContent}
        name={inputName}
        value={value || ""}
        endAdornment={
          !!endAdornment ? (
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

export default memo(Input);
