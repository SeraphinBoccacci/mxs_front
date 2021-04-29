import { Button } from "@material-ui/core";
import React, { useCallback } from "react";

import { useQueryString } from "../../../hooks/useQueryString";
import { createOverlay } from "../../../services/overlays";
import { ContentContainer } from "../../../styles/global";
import { useOverlayContext } from "../Context";
import Overlay from "./Overlay";
import { Header, OverlaysContainer, Title } from "./style";

const MyOverlays = () => {
  const [herotag] = useQueryString("herotag");
  const { overlays, getManyOverlays } = useOverlayContext();

  const handleCreateOverlay = useCallback(async () => {
    await createOverlay(herotag);

    await getManyOverlays(herotag);
  }, [herotag, getManyOverlays]);

  return (
    <ContentContainer>
      <Header>
        <Title>My overlays</Title>
        <Button
          onClick={handleCreateOverlay}
          color="secondary"
          variant="contained"
        >
          Create overlay
        </Button>
      </Header>
      <OverlaysContainer>
        {overlays.map((overlay) => {
          return (
            <Overlay overlay={overlay} key={overlay.generatedLink}></Overlay>
          );
        })}
      </OverlaysContainer>
    </ContentContainer>
  );
};

export default MyOverlays;