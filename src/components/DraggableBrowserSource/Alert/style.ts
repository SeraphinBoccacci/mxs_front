import styled, { css } from "styled-components";

import {
  EnterAnimationTypes,
  ExitAnimationTypes,
  TextPositions,
  TextStyles,
} from "../../../types/alerts";

const displayMapper = (position?: TextPositions) => {
  const mapper = {
    [TextPositions.over]: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    [TextPositions.bottom]: css`
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    `,
    [TextPositions.top]: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    [TextPositions.left]: css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `,
    [TextPositions.right]: css`
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
    `,
  };

  return mapper[position || TextPositions.bottom];
};

interface StyledContainerProps {
  textPosition?: TextPositions;
  width?: number;
  height?: number;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  width: ${({ width }) => (width ? `${width}px` : "max-content")};
  height: ${({ height }) => (height ? `${height}px` : "max-content")};

  padding: 0;
  overflow: hidden;
  font-family: "Noto Sans JP", sans-serif;

  ${({ textPosition }) => displayMapper(textPosition)};
`;

interface StyledImageProps {
  width?: number;
  height?: number;
  isVisible?: boolean;
  shouldImageExit?: boolean;
  enterAnimationType?: EnterAnimationTypes;
  enterAnimationDuration?: number;
  enterAnimationDelay?: number;
  exitAnimationType?: ExitAnimationTypes;
  exitAnimationDuration?: number;
}

export const StyledImageContainer = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
  margin: 0;
  padding: 0;
`;

export const StyledImageScreen = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const StyledImage = styled.img<StyledImageProps>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : "max-content")};
  height: ${({ height }) => (height ? `${height}px` : "max-content")};
  margin: auto;
`;

interface StyledTextContainerProps {
  width?: number;
  height?: number;
  isVisible?: boolean;
  shouldTextExit?: boolean;
  enterAnimationType?: EnterAnimationTypes;
  enterAnimationDuration?: number;
  enterAnimationDelay?: number;
  exitAnimationType?: ExitAnimationTypes;
  exitAnimationDuration?: number;
}

export const StyledTextContainer = styled.div<StyledTextContainerProps>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : "max-content")};
  height: ${({ height }) => (height ? `${height}px` : "max-content")};
  overflow: hidden;
  margin: 1.3rem;
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
