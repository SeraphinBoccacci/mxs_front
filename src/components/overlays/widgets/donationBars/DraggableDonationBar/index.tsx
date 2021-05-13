import React from "react";

import {
  DonationBar as IDonationBar,
  DonationBarDisplays,
} from "../../../../../types/donationBar";
import CircleDonationBar from "./CircleDonationBar";
import LineDonationBar from "./LineDonationBar";

interface DonationBarProps {
  progression: number;
  donationBar: IDonationBar;
}

const DonationBar = ({ progression, donationBar }: DonationBarProps) => {
  if (donationBar.displaySettings.kind === DonationBarDisplays.Circle)
    return (
      <CircleDonationBar
        donationBar={donationBar}
        progression={progression}
      ></CircleDonationBar>
    );

  if ([DonationBarDisplays.Vertical, DonationBarDisplays.Horizontal])
    return (
      <LineDonationBar
        donationBar={donationBar}
        progression={progression}
      ></LineDonationBar>
    );

  return null;
};

export default DonationBar;
