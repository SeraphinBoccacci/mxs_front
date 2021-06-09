import { Button } from "@material-ui/core";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import React, { ChangeEvent, useCallback, useState } from "react";

import { useAuth } from "../../../../components/AuthContext";
import Input from "../../../../components/Input";
import { useHistoryWithQueryString } from "../../../../hooks/useHistoryWithQuerystring";
import {
  deleteOverlay,
  updateOverlayName,
} from "../../../../services/overlays";
import { OverlayData } from "../../../../types/overlays";
import { useOverlayContext } from "../../Context";
import {
  Buttons,
  Container,
  Header,
  Image,
  ImageContainer,
  StyledForm,
  StyledModal,
  StyledPaper,
  StyledTitle,
} from "./style";

interface OverlayProps {
  overlay: OverlayData;
}

const Overlay = ({ overlay }: OverlayProps) => {
  const { getManyOverlays } = useOverlayContext();
  const { herotag } = useAuth();
  const [pushHistory] = useHistoryWithQueryString();
  const [isModalOpenned, setIsModalOpenned] = useState(false);
  const defaultOverlayName = overlay.name || "Overlay";
  const [overlayName, setOverlayName] = useState(defaultOverlayName);

  const goToEditor = useCallback(() => {
    pushHistory(`/editor/overlay/${overlay.generatedLink}`);
  }, [pushHistory, overlay.generatedLink]);

  const handleDelete = useCallback(async () => {
    if (herotag) {
      await deleteOverlay(herotag, overlay._id);

      await getManyOverlays(herotag);
    }
  }, [herotag, getManyOverlays, overlay._id]);

  const openModal = useCallback(() => {
    setIsModalOpenned(true);
  }, [setIsModalOpenned]);

  const closeModal = useCallback(() => {
    setIsModalOpenned(false);
  }, [setIsModalOpenned]);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setOverlayName(event.target.value);
    },
    [setOverlayName]
  );

  const handleSubmit = useCallback(async () => {
    if (herotag) {
      updateOverlayName(herotag, overlay._id, overlayName);

      await getManyOverlays(herotag);
    }
    closeModal();
  }, [herotag, overlay._id, overlayName, closeModal, getManyOverlays]);

  return (
    <>
      <StyledModal onClose={closeModal} open={isModalOpenned}>
        <StyledPaper>
          <StyledForm>
            <Input
              inputLabel="Overlay Name"
              inputName="overlayName"
              onChange={handleOnChange}
              value={overlayName}
              centered
              width="10rem"
            ></Input>

            <Buttons>
              <Button color="secondary" variant="outlined" onClick={closeModal}>
                Cancel
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleSubmit}
              >
                Update
              </Button>
            </Buttons>
          </StyledForm>
        </StyledPaper>
      </StyledModal>

      {/*  */}

      <Container>
        <Header>
          <StyledTitle>{defaultOverlayName}</StyledTitle>
          <Button onClick={openModal}>
            <EditRoundedIcon fontSize="small"></EditRoundedIcon>
          </Button>
        </Header>

        <ImageContainer color={overlay.color}>
          <Image src="/ms-icon-150x150.png"></Image>
        </ImageContainer>
        <Buttons>
          <Button>
            <a
              href={`/browser-source/herotag/${herotag}/overlay/${overlay.generatedLink}`}
              target="about:blank"
            >
              Preview
            </a>
          </Button>
          <Button onClick={goToEditor}>Edit</Button>
          <Button onClick={handleDelete}>
            <DeleteOutlineRoundedIcon></DeleteOutlineRoundedIcon>
          </Button>
        </Buttons>
      </Container>
    </>
  );
};

export default Overlay;
