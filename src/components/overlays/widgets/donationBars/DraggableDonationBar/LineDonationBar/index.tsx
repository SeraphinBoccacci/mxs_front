import { pick } from "lodash";
import React, { useMemo } from "react";

import config from "../../../../../../config/config";
import {
  DonationBar,
  LineDisplaySettings,
} from "../../../../../../types/donationBar";
import { DonationDescription, StyledParagraph } from "../../styles.donationBar";
import {
  AmountSentPart,
  AmountToSendPart,
  Content,
} from "../../styles.lineDonationBar";
import { computeAmounts } from "../../utils";
import {
  Cursor,
  DonationBarContainer,
  StyledImageContainer,
  StyledImageScreen,
} from "./style";

interface LineDonationBarProps {
  progression: number;
  donationBar: DonationBar;
}

const LineDonationBar = ({
  donationBar,
  progression,
}: LineDonationBarProps) => {
  const [sentAmountPartText, amountLeftToSendPartText] = useMemo(() => {
    return computeAmounts(donationBar, progression);
  }, [donationBar, progression]);

  return (
    <DonationBarContainer
      width={donationBar.displaySettings.width}
      height={(donationBar.displaySettings as LineDisplaySettings).height}
      offsetLeft={donationBar.offsetLeft}
      offsetTop={donationBar.offsetTop}
    >
      {donationBar.centerCursorPath && (
        <StyledImageContainer
          display={donationBar.displaySettings.kind}
          progression={progression}
        >
          <StyledImageScreen></StyledImageScreen>
          <Cursor
            src={`${config.url}/images/${`${donationBar.centerCursorPath}`}`}
          ></Cursor>
        </StyledImageContainer>
      )}
      <Content
        display={donationBar.displaySettings.kind}
        borderWidth={donationBar.border?.width}
        borderColor={donationBar.border?.color}
        borderRadius={donationBar.border?.radius}
      >
        <AmountSentPart
          display={donationBar.displaySettings.kind}
          duration={donationBar.donationReaction.duration}
          color={donationBar.sentAmountPart?.color}
          progression={progression}
        >
          <div>{sentAmountPartText}</div>
        </AmountSentPart>
        <AmountToSendPart
          display={donationBar.displaySettings.kind}
          duration={donationBar.donationReaction.duration}
          color={donationBar.amountToSendPart?.color}
          progression={progression}
        >
          <div>{amountLeftToSendPartText}</div>
        </AmountToSendPart>
      </Content>
      <DonationDescription
        position={donationBar.donationBarDescription?.position}
      >
        {donationBar?.donationBarDescription?.content
          ?.replaceAll("{{goal}}", String(donationBar.donationGoalAmount.value))
          .split("\n")
          .map((paragraph, index) => (
            <StyledParagraph
              key={`paragraph_${index}`}
              strokeColor={donationBar.donationBarDescription?.stroke?.color}
              strokeWidth={donationBar.donationBarDescription?.stroke?.width}
              {...pick(donationBar.donationBarDescription, [
                "size",
                "color",
                "lineHeight",
                "letterSpacing",
                "wordSpacing",
                "textAlign",
                "textStyle",
              ])}
            >
              {paragraph}
            </StyledParagraph>
          ))}
      </DonationDescription>
    </DonationBarContainer>
  );
};

export default LineDonationBar;
