import React from "react";

import { Emphasize } from "../../../../styles/global";
import {
  FooterModalParagraph,
  FooterModalTitle,
  StyledComment,
  StyledLi,
  StyledUl,
  StyledUlParagraph,
} from "../style";

const maiar = (
  <Emphasize>
    <a target="about:blank" href="https://maiar.com/">
      Maiar
    </a>
  </Emphasize>
);

const ViewerPart = ({ currentPrice }: { currentPrice: number }) => {
  const EGLDPer30Dollars = (30 / currentPrice).toFixed(2);
  const feesInDollars = (0.00005 * currentPrice).toFixed(4);

  const receivedDollars = (30 - Number(feesInDollars)).toFixed(4);
  const receivedEGLD = (Number(EGLDPer30Dollars) - 0.00005).toFixed(5);

  return (
    <div>
      <FooterModalTitle>StreamParticles is 100% Free</FooterModalTitle>
      <FooterModalParagraph>
        Stream particles is <Emphasize>Free</Emphasize> and{" "}
        <Emphasize>Open source</Emphasize>.
      </FooterModalParagraph>
      <FooterModalParagraph>
        In spite of this, you have to know that every transaction has a cost on
        the blockchain.
      </FooterModalParagraph>
      <FooterModalParagraph>
        Whereas many blockchains have a prohibitive transaction fee, the Elrond
        blockchain which is used by the {maiar} app has a cost of{" "}
        <Emphasize>0.00005 EGLD per transaction</Emphasize> (low additionnal
        fees may be charged based on transaction data length, which means the
        longer the message associated with the transaction, the higher the
        transactions fees). Those fees are used to pay people around the world
        who are <Emphasize>staking</Emphasize> and{" "}
        <Emphasize>delegating</Emphasize> their ELGD in order to{" "}
        <Emphasize>secure</Emphasize> the Elrond blockchain.
      </FooterModalParagraph>
      <FooterModalParagraph>
        Streamparticles will not receive anything from those fees.
      </FooterModalParagraph>
      <StyledUlParagraph>
        To make it more understandable, let’s take the example below:
      </StyledUlParagraph>
      <StyledUl>
        <StyledLi>
          Currently, 1 EGLD is worth <Emphasize>${currentPrice}</Emphasize>
        </StyledLi>
        <StyledLi>
          If you send your favorite streamer <Emphasize>$30</Emphasize> (
          {EGLDPer30Dollars} EGLD)
        </StyledLi>
        <StyledLi>
          The transaction fee will be <Emphasize>${feesInDollars}</Emphasize>{" "}
          (0.00005 EGLD) <br></br>
          <StyledComment>
            (low additionnal fees may be charged based on transaction data
            length, which means the longer the message associated with the
            transaction, the higher the transactions fees)
          </StyledComment>
        </StyledLi>
        <StyledLi>
          They will receive <Emphasize>${receivedDollars}</Emphasize> (
          {receivedEGLD} EGLD)
        </StyledLi>
      </StyledUl>
    </div>
  );
};

export default ViewerPart;
