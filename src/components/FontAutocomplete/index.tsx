import { FormControl } from "@material-ui/core";
import { Autocomplete as MaterialAutocomplete } from "@material-ui/lab";
import React, { ChangeEvent, memo, useMemo } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Helmet } from "react-helmet";

import { formatGoogleFontsUrl } from "../../utils/fonts";
import FontOption from "./FontOption";
import { StyledTextField } from "./style";

export interface Option {
  label: string;
  value: string;
}

interface AutocompleteProps {
  options: Option[];
  inputName: string;
  inputLabel: string;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  width?: string;
  value?: any;
}

const Autocomplete = ({
  options,
  width,
  inputName,
  inputLabel,
  onChange,
  value = "",
}: AutocompleteProps) => {
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

  const googleFontsHref = useMemo<string | null>(
    () =>
      options.some((option) => option.value === value)
        ? formatGoogleFontsUrl([value])
        : null,
    [options, value]
  );

  return (
    <>
      {googleFontsHref && (
        <Helmet>
          <link href={googleFontsHref} rel="stylesheet" />
        </Helmet>
      )}

      <FormControl key={`${inputName}_FormControl`} variant="outlined">
        <MaterialAutocomplete
          options={options}
          getOptionLabel={(option) => option.label || ""}
          getOptionSelected={(option, selected) =>
            option.value == selected?.value
          }
          style={{ width, height: "2.5rem" }}
          clearOnBlur={false}
          value={selectedValue || null}
          onChange={(event, newValue) => {
            setSelectedValue(newValue);
          }}
          renderOption={(option) => <FontOption option={option}></FontOption>}
          inputValue={value || ""}
          onInputChange={handleOnChange}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              fontFamily={value}
              label={inputLabel}
              variant="outlined"
              color="secondary"
            />
          )}
        />
      </FormControl>
    </>
  );
};

export default memo(Autocomplete);
