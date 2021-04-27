import React from "react";

import { ContentContainer, Emphasize, Paragraph } from "../../../styles/global";

const OverlaysIntroduction = () => {
  return (
    <ContentContainer elevation={3} variant="elevation">
      <Paragraph>
        <Emphasize>
          <a target="about:blank" href="https://streamelements.com/">
            Stream Elements
          </a>
        </Emphasize>
        is an all-in-one platform that helps creators along all their content
        management.
      </Paragraph>
      <Paragraph>
        For instance, it lets you create customized overlays to react to
        viewers&rsquo; support. That&rsquo;s what we&rsquo;ll be working on in
        this particle.
      </Paragraph>
      <Paragraph>
        You can either choose a base template which is the basic StreamParticles
        animation and sound or go with your own GIFs and sounds that will be
        triggered depending on the variations you set.
      </Paragraph>
    </ContentContainer>
  );
};

export default OverlaysIntroduction;
