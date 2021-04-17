import { Button as MaterialButton } from "@material-ui/core";
import styled from "styled-components";

import { colors } from "../../../../constants";

export const Content = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
`;

export const IframeContainer = styled.iframe`
  width: 100%;
  height: 40rem;

  background-color: ${colors.secondary};

  border: none;

  border-radius: 10px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.2);
`;

export const TopButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  height: 3rem;

  margin: 1rem 0;
`;

export const VariationsContainer = styled.div`
  position: relative;
  width: 100%;
  height: max-content;

  margin: 2rem 0;
  padding: 0 0 5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  overflow: scroll;
`;

export const NewVariationButton = styled(MaterialButton)`
  position: absolute !important;
  bottom: 1rem !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
`;

export const TopButton = styled(MaterialButton)`
  margin: 0.6rem 1.3rem !important;
`;
