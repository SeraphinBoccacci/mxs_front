import { Button } from "@material-ui/core";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import React, { useCallback } from "react";

import { useHistoryWithQueryString } from "../../../../hooks/useHistoryWithQuerystring";
import { useQueryString } from "../../../../hooks/useQueryString";
import { deleteOverlay } from "../../../../services/overlays";
import { OverlayData } from "../../../../types/overlays";
import { useOverlayContext } from "../../Context";
import { Buttons, Container, Image, ImageContainer } from "./style";

interface OverlayProps {
  overlay: OverlayData;
}

const Overlay = ({ overlay }: OverlayProps) => {
  const { getManyOverlays } = useOverlayContext();
  const [herotag] = useQueryString("herotag");
  const [pushHistory] = useHistoryWithQueryString();

  const goToEditor = useCallback(() => {
    pushHistory(`/editor/overlay/${overlay.generatedLink}`);
  }, [pushHistory, overlay.generatedLink]);

  const handleDelete = useCallback(async () => {
    if (herotag) {
      await deleteOverlay(herotag, overlay._id);

      await getManyOverlays(herotag);
    }
  }, [herotag, getManyOverlays, overlay._id]);

  return (
    <Container>
      <ImageContainer>
        <Image src="https://miro.medium.com/max/4800/1*iwyvpHWogyqrNmNFI2qb9g.jpeg"></Image>
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
  );
};

export default Overlay;
