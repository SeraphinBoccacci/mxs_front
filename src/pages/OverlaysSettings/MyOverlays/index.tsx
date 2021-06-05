import React, { useCallback } from "react";

import { useAuth } from "../../../components/AuthContext";
import { createOverlay } from "../../../services/overlays";
import { resetDonationGoal } from "../../../services/overlays/donationData";
import { ContentContainer, FlexRow } from "../../../styles/global";
import { useOverlayContext } from "../Context";
import Overlay from "./Overlay";
import { Header, OverlaysContainer, StyledButton, Title } from "./style";

const MyOverlays = () => {
  const { herotag, user } = useAuth();
  const { overlays, getManyOverlays } = useOverlayContext();

  const handleCreateOverlay = useCallback(async () => {
    if (herotag) {
      await createOverlay(herotag);

      await getManyOverlays(herotag);
    }
  }, [herotag, getManyOverlays]);

  const handleOnClick = useCallback(async () => {
    if (user) {
      await resetDonationGoal(user.herotag);
    }
  }, [user]);

  return (
    <ContentContainer>
      <Header>
        <Title>My overlays</Title>
        <FlexRow>
          <StyledButton
            onClick={handleOnClick}
            color="secondary"
            variant="outlined"
          >
            Reset your donation goal sent amount
          </StyledButton>
          <StyledButton
            onClick={handleCreateOverlay}
            color="secondary"
            variant="contained"
          >
            Create overlay
          </StyledButton>
        </FlexRow>
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
