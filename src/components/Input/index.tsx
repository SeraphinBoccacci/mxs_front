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
import React, { ChangeEvent, memo } from "react";

import { VariationLenses } from "../TabPanel/StreamElements/interface";

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

type InputProps = OutlinedInputProps & {
  inputName: string | VariationLenses;
  inputLabel: string;
  value?: string | number;
  onChange:
    | ((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void)
    | ((event: ChangeEvent<HTMLInputElement>) => void);
  isTextContent?: boolean;
  endAdornment?: string;
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
      color="secondary"
      className={isTextContent ? classes.textContent : classes.formControl}
      variant="outlined"
    >
      {!!inputLabel && (
        <InputLabel htmlFor={inputName}>{inputLabel}</InputLabel>
      )}
      <OutlinedInput
        type={type}
        disabled={isDisabled}
        onChange={onChange}
        rows={3}
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
