import { DonationBar, InBarAmountDisplay } from "../../../../types/donationBar";

export const computeAmounts = (
  donationBar: DonationBar,
  progression: number
): [string | null, string | null] => {
  const leftToSendProgression = 100 - progression;
  if (donationBar.indicationDisplay === InBarAmountDisplay.EGLD) {
    const sentAmount =
      Math.ceil(donationBar.donationGoalAmount.value * progression) / 100;
    const leftToSendAmount =
      Math.ceil(donationBar.donationGoalAmount.value * leftToSendProgression) /
      100;
    const sent = `${sentAmount === 0.01 ? "<" : ""}${sentAmount.toFixed(
      2
    )} EGLD`;
    const leftToSend = `${
      leftToSendAmount === 0.01 ? "<" : ""
    }${leftToSendAmount.toFixed(2)} EGLD`;

    if (progression === 0) return [null, leftToSend];

    if (progression >= 100) return [sent, null];

    return [sent, leftToSend];
  }

  if (donationBar.indicationDisplay === InBarAmountDisplay.percent) {
    const sent = `${progression.toFixed(1)} %`;
    const leftToSend = `${leftToSendProgression.toFixed(1)} %`;

    if (progression === 0) return [null, leftToSend];

    if (progression >= 100) return [sent, null];

    return [sent, leftToSend];
  }

  return [null, null];
};
