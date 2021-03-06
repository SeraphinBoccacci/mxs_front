import React from "react";

import { AlertVariation } from "../../../types/alerts";
import { EventData } from "../../../types/ifttt";
import { WidgetsKinds } from "../../../types/overlays";
import { Container } from "../styles";
import Alert from "../widgets/alerts/PlayableAlert";

const transactionData: EventData = {
  herotag: "TEST_HEROTAG",
  amount: 1,
  wordingAmount: "1 eGLD",
  data: "TEST_MESSAGE",
};

interface BrowserSourceProps {
  widgetKind?: WidgetsKinds;
  widget?: AlertVariation;
}

const PlayableOverlay = ({ widgetKind, widget }: BrowserSourceProps) => {
  return (
    <Container>
      {widgetKind === WidgetsKinds.ALERTS && widget && (
        <div>
          <Alert alert={widget} data={transactionData}></Alert>
        </div>
      )}
    </Container>
  );
};

export default PlayableOverlay;
