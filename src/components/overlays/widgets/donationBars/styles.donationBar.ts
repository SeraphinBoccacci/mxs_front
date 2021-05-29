import styled, { css, keyframes } from "styled-components";

import { LogoAnimations, TextPositions } from "../../../../types/donationBar";
import { TextStyles } from "../../../../types/style";

const bounce = keyframes`
  0% { transform: perspective(500px) translateZ(0) ; }
  20% { transform: perspective(500px) translateZ(-20px);  }
  50% { transform: perspective(500px) translateZ(0) ; }
  40% {  transform: perspective(500px) translateZ(100px);  }
  60% { transform: perspective(500px) translateZ(50px);  }
  80% { transform: perspective(500px) translateZ(-20px);  }
  100% { transform: perspective(500px) translateZ(0) ; }
`;

const rotate = keyframes`
  from {
  transform: rotateZ(0deg);
  }
  to {
  transform: rotateZ(1080deg);
  }
  `;

const shake = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const logoAnimationsMapper = (animation?: LogoAnimations) => {
  const mapper = {
    [LogoAnimations.bounce]: css`
      animation: ${bounce} 2s infinite;
    `,
    [LogoAnimations.rotate]: css`
      animation: ${rotate} 3s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `,
    [LogoAnimations.shake]: css`
      animation: ${shake} 1s infinite;
    `,
  };

  return mapper[animation || LogoAnimations.bounce];
};

const descriptionPositionMapper = (position?: TextPositions) => {
  const mapper = {
    [TextPositions.TopLeft]: css`
      top: -2rem;
      left: 0;
      transform: translateY(-100%);
    `,
    [TextPositions.TopCenter]: css`
      top: -2rem;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
    `,
    [TextPositions.TopRight]: css`
      top: -2rem;
      right: 0;
      transform: translateY(-100%);
    `,
    [TextPositions.BottomRight]: css`
      bottom: -2rem;
      right: 0;
      transform: translateY(100%);
    `,
    [TextPositions.BottomCenter]: css`
      bottom: -2rem;
      left: 50%;
      transform: translateX(-50%) translateY(100%);
    `,
    [TextPositions.BottomLeft]: css`
      bottom: -2rem;
      left: 0;
      transform: translateY(100%);
    `,
  };

  return mapper[position || TextPositions.TopLeft];
};

interface DonationDescriptionProps {
  position?: TextPositions;
}

export const DonationDescription = styled.div<DonationDescriptionProps>`
  position: absolute;

  width: max-content;
  height: max-content;

  font-family: "Noto Sans JP", sans-serif;

  ${({ position }) => descriptionPositionMapper(position)};
`;

interface StyledParagraphProps {
  strokeColor?: string;
  strokeWidth?: number;
  size?: string;
  color?: string;
  lineHeight?: string;
  letterSpacing?: string;
  wordSpacing?: string;
  textAlign?: string;
  textStyle?: TextStyles[];
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  width: 100%;
  height: max-content;
  margin: 0;

  -webkit-text-stroke: ${({ strokeWidth, strokeColor }) =>
    strokeColor && strokeWidth && `${strokeWidth}px ${strokeColor}`};
  color: ${({ color }) => color || "#000000"};

  font-size: ${({ size }) => (size ? `${size}px` : "normal")};
  line-height: ${({ lineHeight }) =>
    lineHeight ? `${lineHeight}px` : "normal"};

  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : "normal"};
  word-spacing: ${({ wordSpacing }) =>
    wordSpacing ? `${wordSpacing}px` : "normal"};

  text-align: ${({ textAlign }) => textAlign || "normal"};

  font-weight: ${({ textStyle }) =>
    textStyle?.some((style) => style === TextStyles.bold) ? "800" : "normal"};
  text-decoration: ${({ textStyle }) =>
    textStyle?.some((style) => style === TextStyles.underline)
      ? "underline"
      : "normal"};
  font-style: ${({ textStyle }) =>
    textStyle?.some((style) => style === TextStyles.italic)
      ? "italic"
      : "normal"};
`;
