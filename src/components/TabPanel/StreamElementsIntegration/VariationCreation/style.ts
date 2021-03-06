import { Button } from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../../constants";
import { invertColor } from "../../../../utils/color";

export const Content = styled.div`
  position: relative;
  width: 50rem;
  display: flex;
  flex-direction: column;

  padding-top: 432px;
`;

export const IframeContainer = styled.iframe`
  position: absolute;
  top: 0;
  left: 50%;
  width: 1920px;
  height: 1080px;

  background-color: ${colors.secondary}ee;

  border: none;

  border-radius: 10px;

  transform: translateX(-50%) scale(0.4);
  transform-origin: top center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

export const VariationsContainer = styled.div`
  position: relative;
  width: 100%;
  height: max-content;

  margin: 2rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;

  overflow: scroll;
`;

export const VariationHeader = styled.div`
  position: absolute;
  top: 0.3rem;
  left: 1rem;
  width: calc(100% - 2rem);
  height: 3rem;
  padding: 0 1rem;

  background-color: ${colors.primary};

  border-radius: 7px;

  overflow-y: scroll;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-family: ${fonts.Roboto};
`;

export const VariationListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  background-color: ${colors.black};

  padding-top: 3.9rem;
  border-radius: 10px;
`;

export const VariationList = styled.div`
  width: 100%;
  height: 15rem;
  margin: 0 0 1rem;
  padding: 0 1rem;

  overflow-y: scroll;
  padding-bottom: 3rem;
`;

export const VariationListItem = styled.div<{ background: string }>`
  width: 100%;
  height: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ background }) => background};
  color: ${({ background }) => invertColor(background)};

  border-radius: 6px;

  margin: 0.5rem 0;
  padding: 1.2rem 1rem;

  font-family: ${fonts.Ubuntu};

  cursor: pointer;
`;

export const VariationLargeContent = styled.div`
  width: 20rem;
`;

export const VariationMediumContent = styled.div`
  width: 6rem;

  text-align: center;
`;

export const VariationSmallContent = styled.div`
  width: 4rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NewVariationButton = styled(Button)`
  position: absolute !important;
  bottom: 1rem !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
`;
