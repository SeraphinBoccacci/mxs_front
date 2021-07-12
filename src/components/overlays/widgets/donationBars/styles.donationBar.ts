import styled, { css, keyframes } from "styled-components";

import { LogoAnimations } from "../../../../types/donationBar";
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
    20% { transform: translate(-3px, 0) rotate(1deg); }
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

interface DonationDescriptionProps {
  offsetTop?: number;
  offsetLeft?: number;
}

export const DonationDescription = styled.div<DonationDescriptionProps>`
  position: absolute;
  top: ${({ offsetTop }) => `${offsetTop}px`};
  left: ${({ offsetLeft }) => `${offsetLeft}px`};
  width: max-content;
  height: max-content;
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
  fontFamily?: string;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  width: 100%;
  height: max-content;
  min-height: ${({ size = 20, lineHeight }) => `${lineHeight || size}px`};
  margin: 0;
  color: ${({ color }) => color || "#000000"};
  font-weight: ${({ textStyle }) =>
    textStyle?.some((style) => style === TextStyles.bold) ? "800" : "normal"};
  font-style: ${({ textStyle }) =>
    textStyle?.some((style) => style === TextStyles.italic)
      ? "italic"
      : "normal"};
  font-size: ${({ size }) => (size ? `${size}px` : "normal")};
  font-family: ${({ fontFamily = "Noto Sans JP" }) => fontFamily};
  line-height: ${({ lineHeight }) =>
    lineHeight ? `${lineHeight}px` : "normal"};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : "normal"};
  text-align: ${({ textAlign }) => textAlign || "normal"};
  text-decoration: ${({ textStyle }) =>
    textStyle?.some((style) => style === TextStyles.underline)
      ? "underline"
      : "normal"};
  word-spacing: ${({ wordSpacing }) =>
    wordSpacing ? `${wordSpacing}px` : "normal"};
  -webkit-text-stroke: ${({ strokeWidth, strokeColor }) =>
    strokeColor && strokeWidth && `${strokeWidth}px ${strokeColor}`};
`;
