import { pick } from "lodash";
import React, {
  createRef,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import config from "../../../../../../config/config";
import {
  CircleDisplaySettings,
  DonationBar,
} from "../../../../../../types/donationBar";
import { replaceAll } from "../../../../../../utils/string";
import {
  AmountToSendCircle,
  Cursor,
  SentAmountCircle,
  SubPartContainer,
  Svg,
} from "../../styles.circleDonationBar";
import { DonationDescription, StyledParagraph } from "../../styles.donationBar";
import { computeAmounts } from "../../utils";
import { DonationBarContainer } from "./style";

interface CircleDonationBarProps {
  progression: number;
  donationBar: DonationBar;
}

const CircleDonationBar = ({
  donationBar,
  progression,
}: CircleDonationBarProps) => {
  const amountSentPartRef = createRef<HTMLDivElement>();
  const amountLeftToSendPartRef = createRef<HTMLDivElement>();
  const [shouldReact, setShouldReact] = useState(false);
  const cappedProgression = progression > 100 ? 100 : progression;

  useEffect(() => {
    setShouldReact(true);
    setTimeout(() => {
      setShouldReact(false);
    }, (donationBar.donationReaction.duration || 0.3) * 1000);
  }, [progression, donationBar]);

  const radius = useMemo(() => (donationBar?.displaySettings?.width || 2) / 2, [
    donationBar?.displaySettings?.width,
  ]);

  const updateAmountPosition = useCallback(
    (
      ref: RefObject<HTMLDivElement>,
      { isSentAmount }: { isSentAmount: boolean }
    ) => {
      if (ref.current) {
        const sentPartRadians = (cappedProgression / 100) * Math.PI;
        const sin = Math.sin(sentPartRadians) * 0.95;
        const cos = Math.cos(sentPartRadians) * 0.95;

        if (isSentAmount) {
          if (cappedProgression < 50) {
            ref.current.style.transform = "translate(0, 0)";
          } else {
            ref.current.style.transform = "translate(0, -100%)";
          }

          ref.current.style.top = `${radius - cos * radius}px`;
          ref.current.style.left = `${radius - sin * radius}px`;
        } else {
          if (cappedProgression < 50) {
            ref.current.style.transform = "translate(-100%, -100%)";
          } else {
            ref.current.style.transform = "translate(-100%, 0)";
          }

          ref.current.style.top = `${radius + cos * radius}px`;
          ref.current.style.left = `${radius + sin * radius}px`;
        }
      }
    },
    [radius, cappedProgression]
  );

  useEffect(() => {
    updateAmountPosition(amountSentPartRef, { isSentAmount: true });
    updateAmountPosition(amountLeftToSendPartRef, { isSentAmount: false });
  }, [amountSentPartRef, amountLeftToSendPartRef, updateAmountPosition]);

  const [sentAmountPartText, amountLeftToSendPartText] = useMemo(() => {
    return computeAmounts(donationBar, progression);
  }, [donationBar, progression]);

  return (
    <DonationBarContainer
      shouldReact={shouldReact}
      contentWidth={donationBar.displaySettings.width}
      duration={donationBar.donationReaction.duration}
      animation={donationBar.donationReaction.animateBarDisplay?.kind}
      offsetLeft={donationBar.offsetLeft}
      offsetTop={donationBar.offsetTop}
    >
      {shouldReact && donationBar?.donationReaction?.soundPath && (
        <audio
          autoPlay
          src={`${config.url}/audios/${`${
            donationBar.donationReaction.soundPath
          }?ts=${Date.now()}`}`}
        ></audio>
      )}
      {!!sentAmountPartText && (
        <SubPartContainer
          ref={amountSentPartRef}
          textColor={donationBar.sentAmountPart?.textColor}
          backgroundColor={donationBar.sentAmountPart?.color}
        >
          {sentAmountPartText}
        </SubPartContainer>
      )}
      {!!amountLeftToSendPartText && (
        <SubPartContainer
          ref={amountLeftToSendPartRef}
          textColor={donationBar.amountToSendPart?.textColor}
          backgroundColor={donationBar.amountToSendPart?.color}
        >
          {amountLeftToSendPartText}
        </SubPartContainer>
      )}
      <Svg
        contentWidth={donationBar.displaySettings.width}
        viewBox="-25 25 150 150"
      >
        <SentAmountCircle
          shouldOverrideColor={shouldReact}
          overrideColor={
            donationBar?.donationReaction?.fillSentAmountPart?.color
          }
          strokeWidth={
            (donationBar.displaySettings as CircleDisplaySettings).strokeWidth
          }
          color={donationBar.sentAmountPart?.color}
          progression={progression}
          fill="transparent"
          cx="50"
          cy="50"
          r="50"
        />
        <AmountToSendCircle
          strokeWidth={
            (donationBar.displaySettings as CircleDisplaySettings).strokeWidth
          }
          duration={donationBar.donationReaction.duration}
          color={donationBar.amountToSendPart?.color}
          progression={progression}
          fill="transparent"
          cx="50"
          cy="50"
          r="50"
        />
      </Svg>
      {donationBar?.centerCursorPath && (
        <Cursor
          shouldReact={shouldReact}
          animation={donationBar.donationReaction.animateLogo?.kind}
          src={`${config.url}/images/${`${donationBar.centerCursorPath}`}`}
        ></Cursor>
      )}
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

export default CircleDonationBar;
