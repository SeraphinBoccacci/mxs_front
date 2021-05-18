import {
  BarDisplayAnimations,
  DonationBarDisplays,
  InBarAmountDisplay,
  LogoAnimations,
  TextPositions,
} from "../../../../types/donationBar";

export const donationBarDisplayOptions = [
  { label: "Vertical", value: DonationBarDisplays.Vertical },
  { label: "Horizontal", value: DonationBarDisplays.Horizontal },
  { label: "Circle", value: DonationBarDisplays.Circle },
];

export const indicationDisplay = [
  { label: "None", value: InBarAmountDisplay.none },
  { label: "eGLD", value: InBarAmountDisplay.EGLD },
  { label: "Percentage", value: InBarAmountDisplay.percent },
];

export const textPositionsOptions = [
  { label: "None", value: "" },
  { label: "Top Left", value: TextPositions.TopLeft },
  { label: "Top Center", value: TextPositions.TopCenter },
  { label: "Top Right", value: TextPositions.TopRight },
  { label: "Bottom Left", value: TextPositions.BottomLeft },
  { label: "Bottom Center", value: TextPositions.BottomCenter },
  { label: "Bottom Right", value: TextPositions.BottomRight },
];

export const logoAnimationsOptions = [
  { label: "None", value: "" },
  { label: "Bounce", value: LogoAnimations.bounce },
  { label: "Rotate", value: LogoAnimations.rotate },
  { label: "Shake", value: LogoAnimations.shake },
];

export const barDisplayAnimationsOptions = [
  { label: "None", value: "" },
  // { label: "Bounce", value: BarDisplayAnimations.bounce },
  // { label: "Lighten", value: BarDisplayAnimations.lighten },
  { label: "Center", value: BarDisplayAnimations.center },
];
