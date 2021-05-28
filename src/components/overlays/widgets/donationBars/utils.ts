import { DonationBar, InBarAmountDisplay } from "../../../../types/donationBar";

export const computeAmounts = (
  donationBar: DonationBar,
  progression: number
) => {
  if (donationBar.indicationDisplay === InBarAmountDisplay.EGLD) {
    if (progression > 0)
      return [
        `${((progression / 100) * donationBar.donationGoalAmount.value).toFixed(
          2
        )} EGLD`,
        `${(
          (1 - progression / 100) *
          donationBar.donationGoalAmount.value
        ).toFixed(2)} EGLD`,
      ];

    if (progression === 100)
      return [
        `${((progression / 100) * donationBar.donationGoalAmount.value).toFixed(
          2
        )} EGLD`,
        null,
      ];

    return [
      null,
      `${(
        (1 - progression / 100) *
        donationBar.donationGoalAmount.value
      ).toFixed(2)} EGLD`,
    ];
  }

  if (donationBar.indicationDisplay === InBarAmountDisplay.percent) {
    if (progression > 0)
      return [
        `${progression.toFixed(1)} %`,
        `${(100 - progression).toFixed(1)} %`,
      ];

    if (progression === 100) return [`${progression.toFixed(1)} %`, null];

    return [null, `${(100 - progression).toFixed(1)} %`];
  }

  return [null, null];
};
