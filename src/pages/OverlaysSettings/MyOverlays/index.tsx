import { Button } from "@material-ui/core";
import React, { useCallback, useState } from "react";

import { useAuth } from "../../../components/AuthContext";
import { createOverlay } from "../../../services/overlays";
import { resetDonationGoal } from "../../../services/overlays/donationData";
import { ContentContainer, FlexRow } from "../../../styles/global";
import { useOverlayContext } from "../Context";
import Overlay from "./Overlay";
import {
  Buttons,
  Header,
  Modal,
  ModalContent,
  OverlaysContainer,
  StyledButton,
  StyledParagraph,
  Title,
} from "./style";

const MyOverlays = () => {
  const [isModalOpenned, setIsModalOpenned] = useState(false);
  const { herotag, user, getUser } = useAuth();
  const { overlays, getManyOverlays } = useOverlayContext();

  const handleCreateOverlay = useCallback(async () => {
    if (herotag) {
      await createOverlay(herotag);

      await getManyOverlays(herotag);
    }
  }, [herotag, getManyOverlays]);

  const openModal = useCallback(() => {
    setIsModalOpenned(true);
  }, [setIsModalOpenned]);

  const closeModal = useCallback(() => {
    setIsModalOpenned(false);
  }, [setIsModalOpenned]);

  const handleConfirm = useCallback(async () => {
    if (user) {
      await resetDonationGoal(user.herotag);

      await getUser();
    }

    closeModal();
  }, [user, closeModal, getUser]);

  return (
    <>
      <ContentContainer>
        <Header>
          <Title>My overlays</Title>
          <FlexRow>
            <StyledButton
              onClick={openModal}
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
      <Modal open={isModalOpenned} onClose={closeModal}>
        <ModalContent>
          <StyledParagraph>
            {`How are you sure you want to reset your donation goal sent amount ? (The later has reached ${
              user?.donationData?.donationGoal?.sentAmountAtDate || 0
            } eGLD)`}
          </StyledParagraph>
          <Buttons>
            <Button variant="outlined" color="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleConfirm}
            >
              Approve
            </Button>
          </Buttons>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyOverlays;
