import React, { RefObject } from "react";

import {
  EnterAnimationTypes,
  ExitAnimationTypes,
  Variation,
  VariationLenses,
} from "../../../interface";
import {
  enterAnimationTypesOptions,
  exitAnimationTypesOptions,
} from "../constants";
import Input from "../Input";
import Select from "../Select";
import {
  AnimationSection,
  AnimationTitle,
  AnimationType,
  SectionRow,
} from "../style";

interface inputRefs {
  enter_animationRef: RefObject<{
    value: EnterAnimationTypes | ExitAnimationTypes;
  }>;
  enter_durationRef: RefObject<HTMLInputElement>;
  enter_delayRef: RefObject<HTMLInputElement>;
  exit_animationRef: RefObject<{
    value: EnterAnimationTypes | ExitAnimationTypes;
  }>;
  exit_durationRef: RefObject<HTMLInputElement>;
  exit_offsetRef: RefObject<HTMLInputElement>;
}

interface AnimationSettingsProps {
  pathString: "image" | "text";
  variation: Variation;
  inputRefs: inputRefs;
}

export const AnimationSettings = ({
  pathString,
  variation,
  inputRefs,
}: AnimationSettingsProps) => {
  return (
    <AnimationSection>
      <AnimationTitle>Animation</AnimationTitle>
      <SectionRow>
        <AnimationType>Enter</AnimationType>
        <Select
          inputRef={inputRefs.enter_animationRef}
          key={`${pathString}_animation_enter_type`}
          options={enterAnimationTypesOptions}
          inputName={`${pathString}_animation_enter_type` as VariationLenses}
          inputLabel="Type"
          value={variation?.[pathString]?.animation?.enter?.type || ""}
        ></Select>
        <Input
          inputRef={inputRefs.enter_durationRef}
          key={`${pathString}_animation_enter_duration`}
          inputLabel="Duration"
          inputName={
            `${pathString}_animation_enter_duration` as VariationLenses
          }
          value={variation?.[pathString]?.animation?.enter?.duration || ""}
          isTypeNumber
          endAdornment="seconds"
        ></Input>
        <Input
          inputRef={inputRefs.enter_delayRef}
          key={`${pathString}_animation_enter_delay`}
          inputLabel="Delay"
          inputName={`${pathString}_animation_enter_delay` as VariationLenses}
          value={variation?.[pathString]?.animation?.enter?.delay || ""}
          isTypeNumber
          endAdornment="seconds"
        ></Input>
      </SectionRow>
      <SectionRow>
        <AnimationType>Exit</AnimationType>
        <Select
          inputRef={inputRefs.exit_animationRef}
          key={`${pathString}_animation_exit_type`}
          options={exitAnimationTypesOptions}
          inputName={`${pathString}_animation_exit_type` as VariationLenses}
          inputLabel="Type"
          value={variation?.[pathString]?.animation?.exit?.type || ""}
        ></Select>
        <Input
          inputRef={inputRefs.exit_durationRef}
          key={`${pathString}_animation_exit_duration`}
          inputLabel="Duration"
          inputName={`${pathString}_animation_exit_duration` as VariationLenses}
          value={variation?.[pathString]?.animation?.exit?.duration || ""}
          isTypeNumber
          endAdornment="seconds"
        ></Input>
        <Input
          inputRef={inputRefs.exit_offsetRef}
          key={`${pathString}_animation_exit_offset`}
          inputLabel="Offset"
          inputName={`${pathString}_animation_exit_offset` as VariationLenses}
          value={variation?.[pathString]?.animation?.exit?.offset || ""}
          isTypeNumber
          endAdornment="seconds"
        ></Input>
      </SectionRow>
    </AnimationSection>
  );
};
