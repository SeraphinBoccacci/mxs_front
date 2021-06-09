import React, { ReactNode, useCallback } from "react";

import { useHistoryWithQueryString } from "../../../../hooks/useHistoryWithQuerystring";
import {
  Container,
  StyledSubSection,
  SubSectionImageContainer,
  SubSectionImageContent,
  SubSectionTitle,
} from "./style";

export interface SubSectionProps {
  route: string;
  title: string;
  image: ReactNode;
}

const SubSection = ({ route, title, image }: SubSectionProps) => {
  const [pushHistory] = useHistoryWithQueryString();

  const goTo = useCallback(
    (path: string) => {
      pushHistory(path);
    },
    [pushHistory]
  );

  return (
    <Container className="sub-section">
      <StyledSubSection onClick={() => goTo(route)}>
        <SubSectionTitle>{title}</SubSectionTitle>
        <SubSectionImageContainer>
          <SubSectionImageContent>{image}</SubSectionImageContent>
        </SubSectionImageContainer>
      </StyledSubSection>
    </Container>
  );
};

export default SubSection;
