import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import {
  FaqContainer,
  FaqHeader,
  FaqTitle,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Accordions,
} from "./style";

const questionsAndAnswers = [
  {
    question: "Why would I need to send my donations via Maiar ?",
    answer: (
      <div>
        When you support a creator via a platform, there is a middleman between
        you and the creator, the platform which charges you. StreamParticles is
        a free and open source project that aims at let you support the creators
        without middlemen (via Maiar) and notify him about your donation
        (StreamParticles).
      </div>
    ),
  },
  {
    question:
      "How will the creator I send my eGLD to be notified of the transaction ?",
    answer: (
      <div>
        We have developped a webhook "watching" Elrond's blockchain, that
        detects every new transaction sent to a creator. The creator only needs
        to signup on StreamParticles and create his very own particles to
        connect with the blockchain. Customized experiences garantied !
      </div>
    ),
  },
  {
    question: "It is safe ?",
    answer: (
      <div>
        It is 100% safe, all you have to do is keeping safe and secret your
        mnemonic phrase that Maiar gives you when you create a wallet. Then your
        eGLDs are secured by a state of the art blockchain technology developped
        by Elrond !
      </div>
    ),
  },
  {
    question: "Do I have to create an account on StreamParticles ?",
    answer: (
      <div>
        Absolutely not ! Only creators need to create an account on
        StreamParticles ! We, by the way, do no retain any data about you (no
        cookies either !)
      </div>
    ),
  },
  {
    question: "Can I send a personnalized message to the creator ?",
    answer: (
      <div>
        When processing a transaction on Maiar Wallet, you will be able to write
        your very own message to your creators, without any limit !
      </div>
    ),
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <FaqContainer id="community">
      <FaqHeader>
        <FaqTitle>Frequently Asked Questions</FaqTitle>
      </FaqHeader>
      <Accordions>
        {questionsAndAnswers.map(({ question, answer }, index) => (
          <Accordion
            color="primary"
            key={`frequently-asked-questions-${index}`}
          >
            <AccordionSummary expandIcon={<AddOutlinedIcon />}>
              {question}
            </AccordionSummary>
            <AccordionDetails>{answer}</AccordionDetails>
          </Accordion>
        ))}
      </Accordions>
    </FaqContainer>
  );
};

export default FrequentlyAskedQuestions;
