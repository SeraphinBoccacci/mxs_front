import React, { ChangeEvent } from "react";

import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import {
  AlertVariationFormData,
  AlertVariationLenses,
} from "../../../../interfaces/alerts";
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
  formData: AlertVariationFormData;
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
          inputName={
            `${pathString}_animation_enter_type` as AlertVariationLenses
          }
          inputLabel="Type"
          value={formData?.[`${pathString}_animation_enter_type`]}
          onChange={onChange}
        ></Select>
        <Input
          inputLabel="Duration"
          inputName={
            `${pathString}_animation_enter_duration` as AlertVariationLenses
          }
          value={formData?.[`${pathString}_animation_enter_duration`]}
          endAdornment="seconds"
          onChange={onChange}
          type="number"
          width="8rem"
        ></Input>
        <Input
          inputLabel="Delay"
          inputName={
            `${pathString}_animation_enter_delay` as AlertVariationLenses
          }
          value={formData?.[`${pathString}_animation_enter_delay`]}
          type="number"
          endAdornment="seconds"
          onChange={onChange}
          width="8rem"
        ></Input>
      </SectionRow>
      <SectionRow>
        <AnimationType>Exit</AnimationType>
        <Select
          options={exitAnimationTypesOptions}
          inputName={
            `${pathString}_animation_exit_type` as AlertVariationLenses
          }
          inputLabel="Type"
          value={formData?.[`${pathString}_animation_exit_type`]}
          onChange={onChange}
        ></Select>
        <Input
          inputLabel="Duration"
          inputName={
            `${pathString}_animation_exit_duration` as AlertVariationLenses
          }
          value={formData?.[`${pathString}_animation_exit_duration`]}
          type="number"
          endAdornment="seconds"
          onChange={onChange}
          width="8rem"
        ></Input>
        <Input
          inputLabel="Offset"
          inputName={
            `${pathString}_animation_exit_offset` as AlertVariationLenses
          }
          value={formData?.[`${pathString}_animation_exit_offset`]}
          type="number"
          endAdornment="seconds"
          onChange={onChange}
          width="8rem"
        ></Input>
      </SectionRow>
    </SubSection>
  );
};
