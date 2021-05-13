import { Text, TextStyles } from "./style";

export enum DonationBarDisplays {
  "Vertical" = "Vertical",
  "Horizontal" = "Horizontal",
  "Circle" = "Circle",
  "Blur" = "Blur",
}

export const isCircleDisplay = (
  displaySettings?: CircleDisplaySettings | LineDisplaySettings
): displaySettings is CircleDisplaySettings => {
  return displaySettings?.kind === DonationBarDisplays.Circle;
};

export interface CircleDisplaySettings {
  kind: DonationBarDisplays.Circle;
  width?: number;
  strokeWidth?: number;
}

export const isLineDisplay = (
  displaySettings?: CircleDisplaySettings | LineDisplaySettings
): displaySettings is LineDisplaySettings => {
  return (
    !!displaySettings?.kind &&
    [DonationBarDisplays.Vertical, DonationBarDisplays.Horizontal].includes(
      displaySettings?.kind
    )
  );
};

export interface LineDisplaySettings {
  kind: DonationBarDisplays.Vertical | DonationBarDisplays.Horizontal;
  width?: number;
  height?: number;
}

interface AmountPart {
  color?: string;
}

export enum InBarAmountDisplay {
  "EGLD" = "EGLD",
  "percent" = "percent",
  "none" = "none",
}

export enum TextPositions {
  TopLeft = "TopLeft",
  TopCenter = "TopCenter",
  TopRight = "TopRight",
  BottomLeft = "BottomLeft",
  BottomCenter = "BottomCenter",
  BottomRight = "BottomRight",
}

interface DonationBarText extends Text {
  position?: TextPositions;
}

export enum LogoAnimations {
  "bounce" = "bounce",
  "rotate" = "rotate",
  "shake" = "shake",
}

export enum BarDisplayAnimations {
  "bounce" = "bounce",
  "lighten" = "lighten",
  "center" = "center",
}

interface DonationReaction {
  soundPath?: string;
  duration?: number;
  fillSentAmountPart?: {
    color?: string;
  };
  animateLogo?: {
    kind?: LogoAnimations;
  };
  animateBarDisplay?: {
    kind?: BarDisplayAnimations;
  };
}

export interface DonationBar {
  _id: string;
  offsetTop?: number;
  offsetLeft?: number;
  indicationDisplay: InBarAmountDisplay;
  displaySettings: CircleDisplaySettings | LineDisplaySettings;
  centerCursorPath?: string;
  donationGoalAmount: {
    value: number;
  };
  donationBarDescription?: DonationBarText;
  border?: {
    color?: string;
    width?: number;
    radius?: number;
  };
  sentAmountPart?: AmountPart;
  amountToSendPart?: AmountPart;
  donationReaction: DonationReaction;
}

export enum DonationBarLenses {
  "offsetTop" = "offsetTop",
  "offsetLeft" = "offsetLeft",
  "indicationDisplay" = "indicationDisplay",
  "displaySettings_kind" = "displaySettings_kind",
  "displaySettings_width" = "displaySettings_width",
  "displaySettings_strokeWidth" = "displaySettings_strokeWidth",
  "displaySettings_height" = "displaySettings_height",
  "centerCursorPath" = "centerCursorPath",
  "donationGoalAmount_value" = "donationGoalAmount_value",
  "donationBarDescription_position" = "donationBarDescription_position",
  "donationBarDescription_content" = "donationBarDescription_content",
  "donationBarDescription_width" = "donationBarDescription_width",
  "donationBarDescription_height" = "donationBarDescription_height",
  "donationBarDescription_size" = "donationBarDescription_size",
  "donationBarDescription_color" = "donationBarDescription_color",
  "donationBarDescription_lineHeight" = "donationBarDescription_lineHeight",
  "donationBarDescription_letterSpacing" = "donationBarDescription_letterSpacing",
  "donationBarDescription_wordSpacing" = "donationBarDescription_wordSpacing",
  "donationBarDescription_textAlign" = "donationBarDescription_textAlign",
  "donationBarDescription_textStyle" = "donationBarDescription_textStyle",
  "donationBarDescription_stroke_width" = "donationBarDescription_stroke_width",
  "donationBarDescription_stroke_color" = "donationBarDescription_stroke_color",
  "border_color" = "border_color",
  "border_width" = "border_width",
  "border_radius" = "border_radius",
  "sentAmountPart_color" = "sentAmountPart_color",
  "amountToSendPart_color" = "amountToSendPart_color",
  "donationReaction_soundPath" = "donationReaction_soundPath",
  "donationReaction_duration" = "donationReaction_duration",
  "donationReaction_fillSentAmountPart_color" = "donationReaction_fillSentAmountPart_color",
  "donationReaction_animateLogo_kind" = "donationReaction_animateLogo_kind",
  "donationReaction_animateBarDisplay_kind" = "donationReaction_animateBarDisplay_kind",
}

export interface DonationBarData {
  offsetTop?: number; //done line circle
  offsetLeft?: number; //done line circle
  indicationDisplay?: number;
  displaySettings_kind?: DonationBarDisplays; //done line circle
  displaySettings_width?: number; //done line circle
  displaySettings_strokeWidth?: number; // done circle
  displaySettings_height?: number; //done line circle
  centerCursorPath?: string; //done line circle
  donationGoalAmount_value?: number;
  donationBarDescription_position?: TextPositions; //done line circle
  donationBarDescription_content?: string; //done line circle
  donationBarDescription_width?: number; //done line circle
  donationBarDescription_height?: number; //done line circle
  donationBarDescription_size?: string; //done line circle
  donationBarDescription_color?: string; //done line circle
  donationBarDescription_lineHeight?: string; //done line circle
  donationBarDescription_letterSpacing?: string; //done line circle
  donationBarDescription_wordSpacing?: string; //done line circle
  donationBarDescription_textAlign?: string; //done line circle
  donationBarDescription_textStyle?: TextStyles[]; //done line circle
  donationBarDescription_stroke_width?: number; //done line circle
  donationBarDescription_stroke_color?: string; //done line circle
  border_color?: string; //done line
  border_width?: number; //done line
  border_radius?: number; //done line
  sentAmountPart_color?: string; //done line circle
  amountToSendPart_color?: string; //done line circle
  donationReaction_soundPath?: string;
  donationReaction_duration?: number;
  donationReaction_fillSentAmountPart_color?: string;
  donationReaction_animateLogo_kind?: LogoAnimations;
  donationReaction_animateBarDisplay_kind?: BarDisplayAnimations;
}

export type DonationBarFormData = DonationBarData & {
  [x: string]: string;
};
