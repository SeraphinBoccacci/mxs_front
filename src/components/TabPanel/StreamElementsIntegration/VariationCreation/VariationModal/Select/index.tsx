import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select as MaterialSelect,
  Theme,
} from "@material-ui/core";
import React, { RefObject, useCallback } from "react";

import {
  EnterAnimationTypes,
  ExitAnimationTypes,
  TextPositions,
  VariationLenses,
  VariationPositions,
} from "../../../interface";

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
    | VariationPositions
    | TextPositions
    | EnterAnimationTypes
    | ExitAnimationTypes;
}

interface SelectProps {
  options: Option[];
  size?: "large";
  inputName: VariationLenses;
  inputLabel: string;
  inputRef: RefObject<{
    value:
      | VariationPositions
      | TextPositions
      | EnterAnimationTypes
      | ExitAnimationTypes;
  }>;
  value: any;
}

const Select = ({
  options,
  size,
  inputName,
  inputLabel,
  inputRef,
  value,
}: SelectProps) => {
  const classes = useStyles();

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
      }>
    ) => {
      e.preventDefault();

      if (inputRef.current)
        inputRef.current.value = e.target.value as
          | VariationPositions
          | TextPositions
          | EnterAnimationTypes
          | ExitAnimationTypes;
    },
    [inputRef]
  );

  return (
    <FormControl
      key={`${inputName}_FormControl`}
      className={
        size === "large" ? classes.largeFormControl : classes.formControl
      }
      size="small"
      variant="outlined"
      color="secondary"
    >
      <InputLabel>{inputLabel}</InputLabel>
      <MaterialSelect
        onChange={handleChange}
        defaultValue={value}
        name={inputName}
      >
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

export default Select;
