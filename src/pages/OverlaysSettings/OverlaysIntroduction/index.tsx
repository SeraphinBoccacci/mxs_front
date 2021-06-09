import React from "react";

import { ContentContainer, Emphasize, Paragraph } from "../../../styles/global";

const OverlaysIntroduction = () => {
  return (
    <ContentContainer elevation={3} variant="elevation">
      <Paragraph>
        <Emphasize>StreamParticles</Emphasize>
        allows you to create your own alerts and other on stream features.
      </Paragraph>
      <Paragraph>
        You can either choose a base template which is the basic StreamParticles
        animation and sound or go with your own GIFs and sounds that will be
        triggered depending on the variations you set
      </Paragraph>
    </ContentContainer>
  );
};

export default OverlaysIntroduction;
