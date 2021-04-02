import styled from "styled-components";

import { FlexColumn } from "../../styles/global";

export const UploadContainer = styled.div`
  min-height: 7rem;
  height: max-content;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImagePreviewContainer = styled.div`
  width: 5rem;
  height: 5rem;

  background: url("/background_transparent.png");
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 25rem) {
    width: 10rem;
    height: 10rem;
  }
`;

export const ImagePreview = styled.img`
  position: relative;
  width: 100%;
  height: auto;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Controllers = styled(FlexColumn)`
  justify-content: space-evenly;

  height: 7rem;
`;
