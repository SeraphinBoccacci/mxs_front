import React, { createRef, useEffect, useState } from "react";

import { useHistoryWithQueryString } from "../../../../hooks/useHistoryWithQuerystring";
import SubSection, { SubSectionProps } from "../SubSection";
import {
  BackgroundBetween,
  BottomBorder,
  LeftInnerCorner,
  RightInnerCorner,
  StyledListItem,
  StyledListItemContent,
  StyledListItemContentContainer,
  StyledListItemTitle,
} from "./style";

export interface SectionProps {
  id: string;
  route: string;
  title: string;
  subSections?: SubSectionProps[];
}

const TabItem = (section: SectionProps) => {
  const [pushHistory, history] = useHistoryWithQueryString();
  const [panelToLeft, setPanelToLeft] = useState(false);
  const tabItemRef = createRef<HTMLLIElement>();

  useEffect(() => {
    const { left, right } = tabItemRef.current?.getBoundingClientRect() || {
      left: 0,
      right: 0,
    };

    setPanelToLeft(left > window.innerWidth - right);
  }, [setPanelToLeft, tabItemRef]);

  return (
    <StyledListItem ref={tabItemRef}>
      <StyledListItemTitle
        onClick={() => {
          if (!section.subSections?.length) pushHistory(section.route);
        }}
      >
        {section.title}
        <LeftInnerCorner className="hoverable-content"></LeftInnerCorner>
        <BackgroundBetween className="hoverable-content"></BackgroundBetween>
        <RightInnerCorner className="hoverable-content"></RightInnerCorner>
        {history.location.pathname.includes(section.route) && (
          <BottomBorder></BottomBorder>
        )}
      </StyledListItemTitle>
      {section.subSections && (
        <StyledListItemContentContainer
          toLeft={panelToLeft}
          className="content-container"
        >
          <StyledListItemContent>
            {section.subSections.map((subSection) => (
              <SubSection {...subSection} key={subSection.route}></SubSection>
            ))}
          </StyledListItemContent>
        </StyledListItemContentContainer>
      )}
    </StyledListItem>
  );
};

export default TabItem;
