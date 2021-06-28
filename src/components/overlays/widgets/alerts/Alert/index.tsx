import { pick } from "lodash";
import React, { useEffect, useMemo, useState } from "react";

import config from "../../../../../config/config";
import { AlertVariation } from "../../../../../types/alerts";
import { replaceManyAll } from "../../../../../utils/string";
import { TransactionData } from "../../../Overlay";
import {
  AnimatedImage,
  StyledContainer,
  StyledParagraph,
  StyledParagraphContainer,
} from "../styles.alerts";

interface AlertProps {
  alert: AlertVariation;
  data: TransactionData;
}

const Alert = ({ alert, data }: AlertProps) => {
  const [shouldImageExit, setShouldImageExit] = useState(false);
  const [isImageDisplayed, setIsImageDisplayed] = useState(false);
  const [shouldTextExit, setShouldTextExit] = useState(false);
  const [isTextDisplayed, setIsTextDisplayed] = useState(false);

  useEffect(() => {
    let enterTimeout: NodeJS.Timeout;
    if (alert.image?.animation?.enter?.delay) {
      const enterDuration = alert.image?.animation?.enter?.delay * 1000;

      enterTimeout = setTimeout(() => {
        setIsImageDisplayed(true);
      }, enterDuration);
    } else {
      setIsImageDisplayed(true);
    }

    const timeBeforeExitProcessStart =
      ((alert.duration || 0) -
        (alert.image?.animation?.exit?.duration || 0) -
        (alert.image?.animation?.exit?.offset || 0)) *
      1000;

    const exitDuration = (alert.image?.animation?.exit?.duration || 0) * 1000;

    const exitTimeout = setTimeout(() => {
      setShouldImageExit(true);

      setTimeout(() => {
        setIsImageDisplayed(false);
      }, exitDuration);
    }, timeBeforeExitProcessStart);

    //clean up
    return () => {
      clearTimeout(exitTimeout);

      if (enterTimeout) clearTimeout(enterTimeout);
    };
  }, [
    setShouldImageExit,
    setIsImageDisplayed,
    alert.duration,
    alert.image?.animation?.exit?.duration,
    alert.image?.animation?.enter?.delay,
    alert.image?.animation?.exit?.offset,
  ]);

  useEffect(() => {
    let enterTimeout: NodeJS.Timeout;

    if (alert.text?.animation?.enter?.delay) {
      const enterDuration = alert.text?.animation?.enter?.delay * 1000;

      enterTimeout = setTimeout(() => {
        setIsTextDisplayed(true);
      }, enterDuration);
    } else {
      setIsTextDisplayed(true);
    }

    const timeBeforeExitProcessStart =
      ((alert.duration || 0) -
        (alert.text?.animation?.exit?.duration || 0) -
        (alert.text?.animation?.exit?.offset || 0)) *
      1000;

    const exitDuration = (alert.text?.animation?.exit?.duration || 0) * 1000;

    const exitTimeout = setTimeout(() => {
      setShouldTextExit(true);

      setTimeout(() => {
        setIsTextDisplayed(false);
      }, exitDuration);
    }, timeBeforeExitProcessStart);

    //clean up
    return () => {
      clearTimeout(exitTimeout);

      if (enterTimeout) clearTimeout(enterTimeout);
    };
  }, [
    setShouldTextExit,
    setIsTextDisplayed,
    alert.duration,
    alert.text?.animation?.exit?.duration,
    alert.text?.animation?.enter?.delay,
    alert.text?.animation?.exit?.offset,
  ]);

  const [audioSrc, imageSrc] = useMemo(() => {
    const now = new Date().getTime();

    return [
      `${config.url}/audios/${`${alert.sound?.soundPath}?ts=${now}`}`,
      `${config.url}/images/${`${alert.image?.imagePath}?ts=${now}`}`,
    ];
  }, [alert.sound, alert.image]);

  return (
    <StyledContainer
      width={alert.width}
      height={alert.heigth}
      offsetTop={alert.offsetTop}
      offsetLeft={alert.offsetLeft}
    >
      {alert.sound?.soundPath && <audio src={audioSrc} autoPlay></audio>}
      {alert.text?.content && (
        <StyledParagraphContainer
          width={alert?.text?.width}
          height={alert?.text?.height}
          offsetLeft={alert?.text?.offsetLeft}
          offsetTop={alert?.text?.offsetTop}
          enterAnimationType={alert?.text?.animation?.enter?.type}
          enterAnimationDuration={alert?.text?.animation?.enter?.duration}
          enterAnimationDelay={alert?.text?.animation?.enter?.delay}
          exitAnimationType={alert?.text?.animation?.exit?.type}
          exitAnimationDuration={alert?.text?.animation?.exit?.duration}
          shouldTextExit={shouldTextExit}
          isVisible={isTextDisplayed}
        >
          {replaceManyAll(alert.text.content, [
            ["{{herotag}}", data?.herotag || ""],
            ["{{amount}}", data?.wordingAmount || ""],
            ["{{message}}", data?.message || ""],
          ])
            .split("\n")
            .map((paragraph, index) => (
              <StyledParagraph
                key={`paragraph_${index}`}
                strokeColor={alert?.text?.stroke?.color}
                strokeWidth={alert?.text?.stroke?.width}
                width={alert?.text?.width}
                height={alert?.text?.height}
                offsetLeft={alert?.text?.offsetLeft}
                offsetTop={alert?.text?.offsetTop}
                {...pick(alert.text, [
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
        </StyledParagraphContainer>
      )}
      {alert.image?.imagePath && (
        <AnimatedImage
          shouldImageExit={shouldImageExit}
          width={alert?.image?.width}
          height={alert?.image?.height}
          isVisible={isImageDisplayed}
          enterAnimationType={alert?.image?.animation?.enter?.type}
          enterAnimationDuration={alert?.image?.animation?.enter?.duration}
          enterAnimationDelay={alert?.image?.animation?.enter?.delay}
          exitAnimationType={alert?.image?.animation?.exit?.type}
          exitAnimationDuration={alert?.image?.animation?.exit?.duration}
          src={imageSrc}
        ></AnimatedImage>
      )}
    </StyledContainer>
  );
};

export default Alert;
