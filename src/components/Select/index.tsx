import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select as MaterialSelect,
  Theme,
} from "@material-ui/core";
import React, { memo } from "react";

import {
  AlertPositions,
  AlertVariationLenses,
  EnterAnimationTypes,
  ExitAnimationTypes,
  TextPositions,
} from "../../interfaces/alerts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 100,
    },
    largeFormControl: {
      margin: theme.spacing(2),
      minWidth: 150,
    },
    textContent: {
      width: "100%",
      margin: "0 2rem",
    },
    numberInput: {
      width: 100,
    },
  })
);

export interface Option {
  label: string;
  value:
    | AlertPositions
    | TextPositions
    | EnterAnimationTypes
    | ExitAnimationTypes
    | string;
}

interface SelectProps {
  options: Option[];
  size?: "large";
  inputName: AlertVariationLenses;
  inputLabel: string;
  onChange:
    | ((
        event: React.ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>,
        child: React.ReactNode
      ) => void)
    | undefined;
  value?: any;
}

const Select = ({
  options,
  size,
  inputName,
  inputLabel,
  onChange,
  value = "",
}: SelectProps) => {
  const classes = useStyles();

  return (
    <FormControl
      key={`${inputName}_FormControl`}
      className={
        size === "large" ? classes.largeFormControl : classes.formControl
      }
      size="small"
      variant="outlined"
    >
      <InputLabel color="secondary">{inputLabel}</InputLabel>
      <MaterialSelect onChange={onChange} value={value || ""} name={inputName}>
        {options.map((option, index) => (
          <MenuItem
            key={`select_options_${inputName}_${index}`}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};

export default memo(Select);
