import styled from "styled-components";

import { FlexColumn } from "../../styles/global";

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: max-content;
  min-height: 7rem;
`;

export const ImagePreviewContainer = styled.div`
  width: 5rem;
  height: 5rem;
  background-image: url("/background_transparent.png");
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 25rem) {
    width: 10rem;
    height: 10rem;
  }
`;

export const ImagePreview = styled.img`
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
`;

export const Controllers = styled(FlexColumn)`
  justify-content: space-evenly;
  height: 7rem;
`;
