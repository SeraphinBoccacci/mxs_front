import {
  EnterAnimationTypes,
  ExitAnimationTypes,
  TextPositions,
  VariationPositions,
} from "../../interface";

export const variationPositionOptions = [
  { label: "Top Left", value: VariationPositions.TopLeft },
  { label: "Top Center", value: VariationPositions.TopCenter },
  { label: "Top Right", value: VariationPositions.TopRight },
  { label: "Bottom Left", value: VariationPositions.BottomLeft },
  { label: "Bottom Center", value: VariationPositions.BottomCenter },
  { label: "Bottom Right", value: VariationPositions.BottomRight },
  { label: "Center Left", value: VariationPositions.CenterLeft },
  { label: "Center Center", value: VariationPositions.CenterCenter },
  { label: "Center Right", value: VariationPositions.CenterRight },
];

export const textPositionsOptions = [
  { label: "On top", value: TextPositions.top },
  { label: "On bottom", value: TextPositions.bottom },
  { label: "At right", value: TextPositions.right },
  { label: "At left", value: TextPositions.left },
  { label: "Over", value: TextPositions.over },
];

export const enterAnimationTypesOptions = [
  { label: "Slide up", value: EnterAnimationTypes.slideUp },
  { label: "Slide right", value: EnterAnimationTypes.slideRight },
  { label: "Slide left", value: EnterAnimationTypes.slideLeft },
  { label: "Slide down", value: EnterAnimationTypes.slideDown },
  { label: "Fade in", value: EnterAnimationTypes.fadeIn },
  { label: "Growth", value: EnterAnimationTypes.growth },
];

export const exitAnimationTypesOptions = [
  { label: "Slide up", value: ExitAnimationTypes.slideUp },
  { label: "Slide right", value: ExitAnimationTypes.slideRight },
  { label: "Slide left", value: ExitAnimationTypes.slideLeft },
  { label: "Slide down", value: ExitAnimationTypes.slideDown },
  { label: "Fade out", value: ExitAnimationTypes.fadeOut },
  { label: "Shrink", value: ExitAnimationTypes.shrink },
];
