import {
  BarDisplayAnimations,
  DonationBarDisplays,
  InBarAmountDisplay,
  LogoAnimations,
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
