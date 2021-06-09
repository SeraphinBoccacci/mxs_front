import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import React, { useCallback, useState } from "react";

import { useAuth } from "../../../components/AuthContext";
import {
  addBannedAddress,
  addBannedWord,
  addVipAddress,
  removeBannedAddress,
  removeBannedWord,
  removeVipAddress,
} from "../../../services/moderation";
import { Title } from "../../../styles/global";
import AddressesList from "./AddressesList";
import {
  Accordion,
  AccordionDetails,
  Accordions,
  AccordionSummary,
  Container,
  StyledParagraph,
} from "./style";
import WordsList from "./WordsList";

const Moderation = () => {
  const [expandedPanel, setExpandedPanel] = useState<number>();
  const { user } = useAuth();

  const handleChange = useCallback(
    (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panel : undefined);
    },
    [setExpandedPanel]
  );

  return (
    <Container>
      <Title>Moderation</Title>
      <div>
        <StyledParagraph>
          Donations which include a banned word in the data field of the
          transaction won’t show on screen.
        </StyledParagraph>
        <StyledParagraph>
          Donations coming from a banned address won’t show on screen.
        </StyledParagraph>
        <StyledParagraph>
          In both cases, you will still receive the amount of the transaction.
        </StyledParagraph>
      </div>
      <Accordions>
        <Accordion
          color="primary"
          expanded={expandedPanel === 0}
          onChange={handleChange(0)}
        >
          <AccordionSummary expandIcon={<AddOutlinedIcon />}>
            Banned Words
          </AccordionSummary>
          <AccordionDetails>
            <WordsList
              elements={user?.moderation?.bannedWords || []}
              addElement={addBannedWord}
              removeElement={removeBannedWord}
            ></WordsList>
          </AccordionDetails>
        </Accordion>
        <Accordion
          color="primary"
          expanded={expandedPanel === 1}
          onChange={handleChange(1)}
        >
          <AccordionSummary expandIcon={<AddOutlinedIcon />}>
            Banned Addresses / Herotag
          </AccordionSummary>
          <AccordionDetails>
            <AddressesList
              elements={user?.moderation?.bannedAddresses || []}
              addElement={addBannedAddress}
              removeElement={removeBannedAddress}
              displayInColumn
            ></AddressesList>
          </AccordionDetails>
        </Accordion>
        <Accordion
          color="primary"
          expanded={expandedPanel === 2}
          onChange={handleChange(2)}
        >
          <AccordionSummary expandIcon={<AddOutlinedIcon />}>
            VIP Addresses / Herotag
          </AccordionSummary>
          <AccordionDetails>
            <AddressesList
              elements={user?.moderation?.vipAddresses || []}
              addElement={addVipAddress}
              removeElement={removeVipAddress}
              displayInColumn
            ></AddressesList>
          </AccordionDetails>
        </Accordion>
      </Accordions>
    </Container>
  );
};

export default Moderation;
