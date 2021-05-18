import { pick } from "lodash";
import React, { useEffect, useMemo, useState } from "react";

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
import { Cursor, DonationBarContainer } from "./style";

interface LineDonationBarProps {
  progression: number;
  donationBar: DonationBar;
}

const LineDonationBar = ({
  donationBar,
  progression,
}: LineDonationBarProps) => {
  const [shouldReact, setShouldReact] = useState(false);

  useEffect(() => {
    setShouldReact(true);
    setTimeout(() => {
      setShouldReact(false);
    }, (donationBar.donationReaction.duration || 0.3) * 1000);
  }, [progression, donationBar]);

  const [sentAmountPartText, amountLeftToSendPartText] = useMemo(() => {
    return computeAmounts(donationBar, progression);
  }, [donationBar, progression]);

  return (
    <DonationBarContainer
      duration={donationBar.donationReaction.duration}
      width={donationBar.displaySettings.width}
      height={(donationBar.displaySettings as LineDisplaySettings).height}
      offsetLeft={donationBar.offsetLeft}
      offsetTop={donationBar.offsetTop}
      shouldReact={shouldReact}
      animation={donationBar.donationReaction.animateBarDisplay?.kind}
    >
      {shouldReact && donationBar?.donationReaction?.soundPath && (
        <audio
          autoPlay
          src={`${config.url}/audios/${`${
            donationBar.donationReaction.soundPath
          }?ts=${Date.now()}`}`}
        ></audio>
      )}
      {donationBar.centerCursorPath && (
        <Cursor
          display={donationBar.displaySettings.kind}
          duration={donationBar.donationReaction.duration}
          progression={progression}
          animation={donationBar.donationReaction.animateLogo?.kind}
          shouldReact={shouldReact}
          src={`${config.url}/images/${`${donationBar.centerCursorPath}`}`}
          containerWidth={donationBar.displaySettings.width}
          containerHeight={
            (donationBar.displaySettings as LineDisplaySettings).height
          }
        ></Cursor>
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
          shouldOverrideColor={shouldReact}
          overrideColor={
            donationBar?.donationReaction?.fillSentAmountPart?.color
          }
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
