import React from "react";

import { Emphasize } from "../../../styles/global";
import { FooterModalParagraph, FooterModalTitle } from "../style";

const maiar = (
  <Emphasize>
    <a target="about:blank" href="https://maiar.com/">
      Maiar
    </a>
  </Emphasize>
);

const CreatorPart = () => {
  return (
    <div>
      <FooterModalTitle>StreamParticles is 100% Free</FooterModalTitle>
      <FooterModalParagraph>
        Stream particles is <Emphasize>Free</Emphasize> and{" "}
        <Emphasize>Open source</Emphasize>.
      </FooterModalParagraph>
      <FooterModalParagraph>
        But technically, you will need a tiny quantity of EGLD to
        <Emphasize>create your account</Emphasize>. Indeed, in order to activate
        the latter and prove that your are the owner of the{" "}
        <Emphasize>herotag</Emphasize>, you will need to make a
        <Emphasize>micro-transaction</Emphasize> with a precise data{" "}
        <Emphasize>reference</Emphasize>. Thanks to this, StreamParticles will
        know it is you and automatically activate your account. No need to send
        big amounts, even <Emphasize>0.000001 EGLD</Emphasize> will do, just do
        not forget to type the reference in the data field.
      </FooterModalParagraph>
      <FooterModalParagraph>
        Your <Emphasize>viewers</Emphasize> won’t have to go through this
        process to send donations and tips to your herotag. All they need is a{" "}
        {maiar} wallet with EGLD on it (or even other cryptocurrencies supported
        by {maiar}) and of course you’ll have to let them know your herotag.
      </FooterModalParagraph>
      <FooterModalParagraph>
        Now you can easily receive donations{" "}
        <Emphasize>without any middleman</Emphasize>: you’ll get 100% of what
        your viewers want to tip you. To top it all, you’ll be able to set your
        own <Emphasize>alerts and variations</Emphasize> for great chat
        interaction.
      </FooterModalParagraph>
      <FooterModalParagraph>
        Enjoy StreamParticles and feel free to donate via erd.
      </FooterModalParagraph>
    </div>
  );
};

export default CreatorPart;
