import { pick } from "lodash";
import React, { useMemo } from "react";

import config from "../../../../../config/config";
import { AlertVariation } from "../../../../../types/alerts";
import { EventData } from "../../../../../types/ifttt";
import { replaceManyAll } from "../../../../../utils/string";
import { StyledImage, StyledParagraph } from "../styles.alerts";
import { Container, StyledImageContainer, StyledImageScreen } from "./style";

interface AlertProps {
  alert: AlertVariation;
  data: EventData;
}

const Alert = ({ alert, data }: AlertProps) => {
  const imageSrc = useMemo(() => {
    const now = new Date().getTime();

    return `${config.url}/images/${`${alert.image?.imagePath}?ts=${now}`}`;
  }, [alert.image]);

  return (
    <Container
      width={alert.width}
      height={alert.heigth}
    >
      {alert.text?.content &&
        replaceManyAll(alert.text.content, [
          ["{{herotag}}", data?.herotag || ""],
          ["{{amount}}", String(data?.amount || "")],
          ["{{message}}", data?.data || ""],
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
              isVisible
              enterAnimationType={alert?.text?.animation?.enter?.type}
              enterAnimationDuration={alert?.text?.animation?.enter?.duration}
              enterAnimationDelay={alert?.text?.animation?.enter?.delay}
              exitAnimationType={alert?.text?.animation?.exit?.type}
              exitAnimationDuration={alert?.text?.animation?.exit?.duration}
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
      {alert.image?.imagePath && (
        <StyledImageContainer>
          <StyledImageScreen></StyledImageScreen>
          <StyledImage
            width={alert?.image?.width}
            height={alert?.image?.height}
            src={imageSrc}
          ></StyledImage>
        </StyledImageContainer>
      )}
    </Container>
  );
};

export default Alert;
