import styled, { css, keyframes } from "styled-components";

import { TextPositions } from "../../../../types/alerts";
import {
  EnterAnimationTypes,
  ExitAnimationTypes,
  TextStyles,
} from "../../../../types/style";

const slideLeftEnter = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }`;

const slideRightEnter = keyframes`
    from {
    transform: translateX(100%);
    }
    to {
    transform: translateX(0);
    }`;

const slideUpEnter = keyframes`
    from {
    transform: translateY(-100%);
    }
    to {
    transform: translateY(0);
    }`;

const slideDownEnter = keyframes`
    from {
    transform: translateY(100%);
    }
    to {
    transform: translateY(0);
    }`;

const fadeIn = keyframes`
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }`;

const grow = keyframes`
    from {
    transform: scale(0);
    }
    to {
    transform: scale(1);
    }`;

const enterAnimationMapper = (animation?: EnterAnimationTypes) => {
  const mapper = {
    [EnterAnimationTypes.slideLeft]: slideLeftEnter,
    [EnterAnimationTypes.slideRight]: slideRightEnter,
    [EnterAnimationTypes.slideDown]: slideDownEnter,
    [EnterAnimationTypes.slideUp]: slideUpEnter,
    [EnterAnimationTypes.fadeIn]: fadeIn,
    [EnterAnimationTypes.growth]: grow,
  };

  return mapper[animation || EnterAnimationTypes.slideLeft];
};

const slideLeftExit = keyframes`
    from {
    transform: translateX(0);
    }
    to {
    transform: translateX(-100%);
    }`;

const slideRightExit = keyframes`
    from {
    transform: translateX(0);
    }
    to {
    transform: translateX(100%);
    }`;

const slideUpExit = keyframes`
    from {
    transform: translateY(0);
    }
    to {
    transform: translateY(-100%);
    }`;

const slideDownExit = keyframes`
    from {
    transform: translateY(100%);
    }
    to {
    transform: translateY(0);
    }`;

const fadeOut = keyframes`
    from {
    opacity: 1;
    }
    to {
    opacity: 0;
    }`;

const shrink = keyframes`
    from {
    transform: scale(1);
    }
    to {
    transform: scale(0);
    }`;

const exitAnimationMapper = (animation?: ExitAnimationTypes) => {
  const mapper = {
    [ExitAnimationTypes.slideLeft]: slideLeftExit,
    [ExitAnimationTypes.slideRight]: slideRightExit,
    [ExitAnimationTypes.slideDown]: slideDownExit,
    [ExitAnimationTypes.slideUp]: slideUpExit,
    [ExitAnimationTypes.fadeOut]: fadeOut,
    [ExitAnimationTypes.shrink]: shrink,
  };

  return mapper[animation || ExitAnimationTypes.slideLeft];
};

const displayMapper = (position?: TextPositions) => {
  const mapper = {
    [TextPositions.over]: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    [TextPositions.bottom]: css`
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    `,
    [TextPositions.top]: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    [TextPositions.left]: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `,
    [TextPositions.right]: css`
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
    `,
  };

  return mapper[position || TextPositions.bottom];
};

interface StyledContainerProps {
  textPosition?: TextPositions;
  width?: number;
  height?: number;
  offsetTop?: number;
  offsetLeft?: number;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: absolute;
  top: ${({ offsetTop }) => `${offsetTop}px`};
  left: ${({ offsetLeft }) => `${offsetLeft}px`};
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}px` : "max-content")};
  height: ${({ height }) => (height ? `${height}px` : "max-content")};
  padding: 0;
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

export const StyledImage = styled.img<StyledImageProps>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : "max-content")};
  height: ${({ height }) => (height ? `${height}px` : "max-content")};
  margin: auto;
`;

export const AnimatedImage = styled(StyledImage)`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  ${({ enterAnimationType, enterAnimationDuration, enterAnimationDelay }) =>
    css`
      animation: ${enterAnimationMapper(enterAnimationType)}
        ${enterAnimationDuration || 0}s 1 ${enterAnimationDelay || 0}s;
    `};
  ${({ shouldImageExit, exitAnimationType, exitAnimationDuration }) =>
    shouldImageExit
      ? css`
          animation: ${exitAnimationMapper(exitAnimationType)}
            ${exitAnimationDuration || 0}s 1;
        `
      : ""};
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
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}px` : "max-content")};
  height: ${({ height }) => (height ? `${height}px` : "max-content")};
  margin: 1.3rem;
`;

export const AnimatedTextContainer = styled(StyledTextContainer)`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  ${({ enterAnimationType, enterAnimationDuration, enterAnimationDelay }) =>
    css`
      animation: ${enterAnimationMapper(enterAnimationType)}
        ${enterAnimationDuration || 0}s 1 ${enterAnimationDelay || 0}s;
    `};
  ${({ shouldTextExit, exitAnimationType, exitAnimationDuration }) =>
    shouldTextExit
      ? css`
          animation: ${exitAnimationMapper(exitAnimationType)}
            ${exitAnimationDuration || 0}s 1;
        `
      : ""};
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
  color: ${({ color }) => color || "#000000"};
  font-weight: ${({ textStyle }) =>
    textStyle?.some((style) => style === TextStyles.bold) ? "800" : "normal"};
  font-style: ${({ textStyle }) =>
    textStyle?.some((style) => style === TextStyles.italic)
      ? "italic"
      : "normal"};
  font-size: ${({ size }) => (size ? `${size}px` : "normal")};
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
