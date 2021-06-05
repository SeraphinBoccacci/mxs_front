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
import List from "./List";
import {
  Accordion,
  AccordionDetails,
  Accordions,
  AccordionSummary,
  Container,
} from "./style";

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
            {" "}
            <List
              elements={user?.moderation?.bannedWords || []}
              addElement={addBannedWord}
              removeElement={removeBannedWord}
            ></List>
          </AccordionDetails>
        </Accordion>
      </Accordions>
      <Accordions>
        <Accordion
          color="primary"
          expanded={expandedPanel === 1}
          onChange={handleChange(1)}
        >
          <AccordionSummary expandIcon={<AddOutlinedIcon />}>
            Banned Addresses
          </AccordionSummary>
          <AccordionDetails>
            <List
              elements={user?.moderation?.bannedAddresses || []}
              addElement={addBannedAddress}
              removeElement={removeBannedAddress}
              displayInColumn
            ></List>
          </AccordionDetails>
        </Accordion>
      </Accordions>
      <Accordions>
        <Accordion
          color="primary"
          expanded={expandedPanel === 2}
          onChange={handleChange(2)}
        >
          <AccordionSummary expandIcon={<AddOutlinedIcon />}>
            VIP Addresses
          </AccordionSummary>
          <AccordionDetails>
            <List
              elements={user?.moderation?.vipAddresses || []}
              addElement={addVipAddress}
              removeElement={removeVipAddress}
              displayInColumn
            ></List>
          </AccordionDetails>
        </Accordion>
      </Accordions>
    </Container>
  );
};

export default Moderation;
