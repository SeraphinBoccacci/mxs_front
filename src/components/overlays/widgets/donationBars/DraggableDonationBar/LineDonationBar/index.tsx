import { pick } from "lodash";
import React, { useMemo } from "react";

import config from "../../../../../../config/config";
import {
  DonationBar,
  LineDisplaySettings,
} from "../../../../../../types/donationBar";
import { replaceAll } from "../../../../../../utils/string";
import { DonationDescription, StyledParagraph } from "../../styles.donationBar";
import {
  AmountSentPart,
  AmountToSendPart,
  Content,
  CursorContainer,
} from "../../styles.lineDonationBar";
import { computeAmounts } from "../../utils";
import { Cursor, DonationBarContainer, StyledImageScreen } from "./style";

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
        <CursorContainer
          display={donationBar.displaySettings.kind}
          progression={progression}
          containerWidth={donationBar.displaySettings.width}
          containerHeight={
            (donationBar.displaySettings as LineDisplaySettings).height
          }
          scale={donationBar.centerCursorScale}
          duration={donationBar.donationReaction.duration}
        >
          <StyledImageScreen></StyledImageScreen>
          <Cursor
            src={`${config.url}/images/${`${donationBar.centerCursorPath}`}`}
          ></Cursor>
        </CursorContainer>
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
          textColor={donationBar.sentAmountPart?.textColor}
          progression={progression}
        >
          <div>{sentAmountPartText}</div>
        </AmountSentPart>
        <AmountToSendPart
          display={donationBar.displaySettings.kind}
          duration={donationBar.donationReaction.duration}
          color={donationBar.amountToSendPart?.color}
          textColor={donationBar.amountToSendPart?.textColor}
          progression={progression}
        >
          <div>{amountLeftToSendPartText}</div>
        </AmountToSendPart>
      </Content>
      <DonationDescription
        offsetLeft={donationBar.donationBarDescription?.offsetLeft}
        offsetTop={donationBar.donationBarDescription?.offsetTop}
      >
        {replaceAll(
          donationBar?.donationBarDescription?.content || "",
          "{{goal}}",
          String(donationBar.donationGoalAmount.value)
        )
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
                "fontFamily",
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
