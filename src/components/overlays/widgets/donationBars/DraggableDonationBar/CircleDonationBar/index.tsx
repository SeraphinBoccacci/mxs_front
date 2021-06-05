import { pick } from "lodash";
import React, {
  createRef,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
} from "react";

import config from "../../../../../../config/config";
import {
  CircleDisplaySettings,
  DonationBar,
} from "../../../../../../types/donationBar";
import {
  AmountToSendCircle,
  Cursor,
  SentAmountCircle,
  SubPartContainer,
  Svg,
} from "../../styles.circleDonationBar";
import { DonationDescription, StyledParagraph } from "../../styles.donationBar";
import { computeAmounts } from "../../utils";
import {
  DonationBarContainer,
  StyledImageContainer,
  StyledImageScreen,
} from "./style";

interface CircleDonationBarProps {
  progression: number;
  donationBar: DonationBar;
}

const CircleDonationBar = ({
  donationBar,
  progression,
}: CircleDonationBarProps) => {
  const amountSent = createRef<HTMLDivElement>();
  const amountLeftToSend = createRef<HTMLDivElement>();

  const radius = useMemo(
    () => (donationBar?.displaySettings?.width || 2) / 2,
    [donationBar?.displaySettings?.width]
  );

  const updateAmountPosition = useCallback(
    (
      ref: RefObject<HTMLDivElement>,
      { isSentAmount }: { isSentAmount: boolean }
    ) => {
      if (ref.current) {
        const sentPartRadians = (progression / 100) * Math.PI;
        const sin = Math.sin(sentPartRadians) * 0.95;
        const cos = Math.cos(sentPartRadians) * 0.95;

        if (isSentAmount) {
          if (progression < 50) {
            ref.current.style.transform = "translate(0, 0)";
          } else {
            ref.current.style.transform = "translate(0, -100%)";
          }

          ref.current.style.top = `${radius - cos * radius}px`;
          ref.current.style.left = `${radius - sin * radius}px`;
        } else {
          if (progression < 50) {
            ref.current.style.transform = "translate(-100%, -100%)";
          } else {
            ref.current.style.transform = "translate(-100%, 0)";
          }

          ref.current.style.top = `${radius + cos * radius}px`;
          ref.current.style.left = `${radius + sin * radius}px`;
        }
      }
    },
    [radius, progression]
  );

  useEffect(() => {
    updateAmountPosition(amountSent, { isSentAmount: true });
    updateAmountPosition(amountLeftToSend, { isSentAmount: false });
  }, [amountSent, amountLeftToSend, updateAmountPosition]);

  const [sentAmountPartText, amountLeftToSendPartText] = useMemo(() => {
    return computeAmounts(donationBar, progression);
  }, [donationBar, progression]);

  return (
    <DonationBarContainer contentWidth={donationBar.displaySettings.width}>
      {!!sentAmountPartText && (
        <SubPartContainer
          ref={amountSent}
          textColor={donationBar.sentAmountPart?.textColor}
          backgroundColor={donationBar.sentAmountPart?.color}
        >
          {sentAmountPartText}
        </SubPartContainer>
      )}
      {!!amountLeftToSendPartText && (
        <SubPartContainer
          ref={amountLeftToSend}
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
          color={donationBar.amountToSendPart?.color}
          progression={progression}
          fill="transparent"
          cx="50"
          cy="50"
          r="50"
        />
      </Svg>
      {donationBar.centerCursorPath && (
        <StyledImageContainer>
          <StyledImageScreen></StyledImageScreen>
          <Cursor
            src={`${config.url}/images/${`${donationBar.centerCursorPath}`}`}
          ></Cursor>
        </StyledImageContainer>
      )}

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

export default CircleDonationBar;
