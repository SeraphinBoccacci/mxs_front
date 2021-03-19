import React, { ChangeEvent } from "react";

import Input from "../../../../../Input";
import Select from "../../../../../Select";
import { VariationFormData, VariationLenses } from "../../../interface";
import {
  enterAnimationTypesOptions,
  exitAnimationTypesOptions,
} from "../constants";
import {
  AnimationType,
  SectionRow,
  SubSection,
  SubSectionTitle,
} from "../style";

interface AnimationSettingsProps {
  pathString: "image" | "text";
  formData: VariationFormData;
  onChange: (
    event: ChangeEvent<
      | HTMLTextAreaElement
      | HTMLInputElement
      | { name?: string | undefined; value: unknown }
    >
  ) => void;
}

export const AnimationSettings = ({
  pathString,
  formData,
  onChange,
}: AnimationSettingsProps) => {
  return (
    <SubSection>
      <SubSectionTitle>Animation</SubSectionTitle>
      <SectionRow>
        <AnimationType>Enter</AnimationType>
        <Select
          options={enterAnimationTypesOptions}
          inputName={`${pathString}_animation_enter_type` as VariationLenses}
          inputLabel="Type"
          value={formData?.[`${pathString}_animation_enter_type`]}
          onChange={onChange}
        ></Select>
        <Input
          inputLabel="Duration"
          inputName={
            `${pathString}_animation_enter_duration` as VariationLenses
          }
          value={formData?.[`${pathString}_animation_enter_duration`]}
          endAdornment="seconds"
          onChange={onChange}
          type="number"
        ></Input>
        <Input
          inputLabel="Delay"
          inputName={`${pathString}_animation_enter_delay` as VariationLenses}
          value={formData?.[`${pathString}_animation_enter_delay`]}
          type="number"
          endAdornment="seconds"
          onChange={onChange}
        ></Input>
      </SectionRow>
      <SectionRow>
        <AnimationType>Exit</AnimationType>
        <Select
          options={exitAnimationTypesOptions}
          inputName={`${pathString}_animation_exit_type` as VariationLenses}
          inputLabel="Type"
          value={formData?.[`${pathString}_animation_exit_type`]}
          onChange={onChange}
        ></Select>
        <Input
          inputLabel="Duration"
          inputName={`${pathString}_animation_exit_duration` as VariationLenses}
          value={formData?.[`${pathString}_animation_exit_duration`]}
          type="number"
          endAdornment="seconds"
          onChange={onChange}
        ></Input>
        <Input
          inputLabel="Offset"
          inputName={`${pathString}_animation_exit_offset` as VariationLenses}
          value={formData?.[`${pathString}_animation_exit_offset`]}
          type="number"
          endAdornment="seconds"
          onChange={onChange}
        ></Input>
      </SectionRow>
    </SubSection>
  );
};
