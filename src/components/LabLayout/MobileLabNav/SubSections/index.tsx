import React, { ReactNode } from "react";

import { useHistoryWithQueryString } from "../../../../hooks/useHistoryWithQuerystring";
import { Container, ItemContainer } from "./style";

interface SubSection {
  route: string;
  title: string;
  image: ReactNode;
}

const SubSections = ({ subSections }: { subSections: SubSection[] }) => {
  const [pushHistory] = useHistoryWithQueryString();

  return (
    <Container className="content">
      {subSections.map((subSection, index) => (
        <ItemContainer
          onClick={() => {
            pushHistory(subSection.route);
          }}
          key={`${subSection.title}_${index}`}
        >
          {subSection.title}
          {subSection.image}
        </ItemContainer>
      ))}
    </Container>
  );
};

export default SubSections;
