import { FormControl } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { ChangeEvent, memo } from "react";
import { useState } from "react";
import { useCallback } from "react";

import { StyledTextField } from "./style";

export interface Option {
  label: string;
  value: string;
}

interface SelectAutocompleteProps {
  options: Option[];
  inputName: string;
  inputLabel: string;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  width?: string;
  value?: any;
}

const SelectAutocomplete = ({
  options,
  width,
  inputName,
  inputLabel,
  onChange,
  value = "",
}: SelectAutocompleteProps) => {
  const [selectedValue, setSelectedValue] = useState<Option | null>(
    options.find(({ value: optionValue }) => optionValue === value) || null
  );

  const handleOnChange = useCallback(
    (event, value) => {
      onChange({
        target: {
          name: inputName,
          value,
        },
      } as ChangeEvent<HTMLInputElement>);
    },
    [onChange, inputName]
  );

  return (
    <FormControl key={`${inputName}_FormControl`} variant="outlined">
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label || ""}
        getOptionSelected={(option, selected) => {
          return option.value == selected?.value;
        }}
        style={{ width, height: "2.5rem" }}
        clearOnBlur={false}
        value={selectedValue || null}
        onChange={(event, newValue) => {
          setSelectedValue(newValue);
        }}
        inputValue={value || ""}
        onInputChange={handleOnChange}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            label={inputLabel}
            variant="outlined"
            color="secondary"
          />
        )}
      />
    </FormControl>
  );
};

export default memo(SelectAutocomplete);
