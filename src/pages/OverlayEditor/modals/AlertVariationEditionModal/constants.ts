import { TextPositions } from "../../../../types/alerts";
import {
  EnterAnimationTypes,
  ExitAnimationTypes,
} from "../../../../types/style";

export const textPositionsOptions = [
  { label: "None", value: "" },
  { label: "On top", value: TextPositions.top },
  { label: "On bottom", value: TextPositions.bottom },
  { label: "At right", value: TextPositions.right },
  { label: "At left", value: TextPositions.left },
  { label: "Over", value: TextPositions.over },
];

export const enterAnimationTypesOptions = [
  { label: "None", value: "" },
  { label: "Slide up", value: EnterAnimationTypes.slideUp },
  { label: "Slide right", value: EnterAnimationTypes.slideRight },
  { label: "Slide left", value: EnterAnimationTypes.slideLeft },
  { label: "Slide down", value: EnterAnimationTypes.slideDown },
  { label: "Fade in", value: EnterAnimationTypes.fadeIn },
  { label: "Growth", value: EnterAnimationTypes.growth },
];

export const exitAnimationTypesOptions = [
  { label: "None", value: "" },
  { label: "Slide up", value: ExitAnimationTypes.slideUp },
  { label: "Slide right", value: ExitAnimationTypes.slideRight },
  { label: "Slide left", value: ExitAnimationTypes.slideLeft },
  { label: "Slide down", value: ExitAnimationTypes.slideDown },
  { label: "Fade out", value: ExitAnimationTypes.fadeOut },
  { label: "Shrink", value: ExitAnimationTypes.shrink },
];