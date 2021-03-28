import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import React, { useCallback, useMemo, useState } from "react";

import {
  Accordion,
  AccordionDetails,
  Accordions,
  AccordionSummary,
  FaqContainer,
  FaqHeader,
  FaqTitle,
} from "./style";

const questionsAndAnswers = [
  {
    id: "panel_1",
    question: "Why would I need to send my tips and donations via Maiar?",
    answer: (
      <div>
        When you support a creator via a platform, there is a middleman between
        you and the creator, the platform which charges you. StreamParticles is
        a free and open source project that aims to let you support the creators
        without middlemen (via Maiar) and notify him about your tip or donation
        (StreamParticles).
      </div>
    ),
  },
  {
    id: "panel_2",
    question:
      "How will the creator I send my EGLD to be notified of the transaction?",
    answer: (
      <div>
        We have developped a webhook &quot;watching&quot; Elrond&rsquo;s
        blockchain, that detects every new transaction sent to a creator. The
        creator only needs to signup on StreamParticles and create his very own
        particles to connect with the blockchain. Customized experiences
        guaranteed!
      </div>
    ),
  },
  {
    id: "panel_3",
    question: "It is safe?",
    answer: (
      <div>
        It is 100% safe, all you have to do is to keep safe and secret your
        mnemonic phrase that Maiar gives you when you create a wallet. Then your
        EGLDs are secured by a state of the art blockchain technology developped
        by Elrond!
      </div>
    ),
  },
  {
    id: "panel_4",
    question: "As a viewer, do I have to create an account on StreamParticles?",
    answer: (
      <div>
        Absolutely not! Only creators need to create an account on
        StreamParticles! We, by the way, do no retain any data about you (no
        cookies either!)
      </div>
    ),
  },
  {
    id: "panel_5",
    question: "Can I send a personnalized message to the creator?",
    answer: (
      <div>
        When processing a transaction on Maiar Wallet, you will be able to write
        your very own message to your creators, without any limit!
      </div>
    ),
  },
];

const FrequentlyAskedQuestions = () => {
  const [expandedPanel, setExpandedPanel] = useState<string>("");

  const handleChange = useCallback(
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panel : "");
    },
    [setExpandedPanel]
  );

  const accordions = useMemo(
    () =>
      questionsAndAnswers.map(({ question, answer, id }, index) => (
        <Accordion
          color="primary"
          key={`frequently-asked-questions-${index}`}
          expanded={expandedPanel === id}
          onChange={handleChange(id)}
        >
          <AccordionSummary expandIcon={<AddOutlinedIcon />}>
            {question}
          </AccordionSummary>
          <AccordionDetails>{answer}</AccordionDetails>
        </Accordion>
      )),
    [expandedPanel, handleChange]
  );

  return (
    <FaqContainer id="community">
      <FaqHeader>
        <FaqTitle>Frequently Asked Questions</FaqTitle>
      </FaqHeader>
      <Accordions>{accordions}</Accordions>
    </FaqContainer>
  );
};

export default FrequentlyAskedQuestions;
