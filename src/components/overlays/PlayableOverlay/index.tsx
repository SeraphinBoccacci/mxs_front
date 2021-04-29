import React from "react";

import { WidgetsKinds } from "../../../services/overlays";
import { AlertVariation } from "../../../types/alerts";
import { EventData } from "../../../types/ifttt";
import Alert from "./Alert";
import { Container } from "./style";

const transactionData: EventData = {
  herotag: "TEST_HEROTAG",
  amount: "1",
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
