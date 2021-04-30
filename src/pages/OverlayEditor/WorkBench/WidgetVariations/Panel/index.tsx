import { Button } from "@material-ui/core";
import React, { useCallback } from "react";

import { useEditorContext } from "../../../Context";
import Variations from "../Variations";
import { useWidgetVariationsContext } from "../WidgetVariationsContext";
import { Background, Buttons, Container } from "./style";

const Panel = () => {
  const { setSelectedWidget, setWidgetData } = useEditorContext();

  const {
    createVariation,
    createVariationsGroup,
  } = useWidgetVariationsContext();

  const handleCancel = useCallback(() => {
    setSelectedWidget(null);
    setWidgetData(null);
  }, [setSelectedWidget, setWidgetData]);

  return (
    <>
      <Background onClick={handleCancel}></Background>
      <Container>
        <Variations></Variations>

        <Buttons>
          <Button variant="contained" color="primary" onClick={createVariation}>
            Add Variation
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={createVariationsGroup}
          >
            New Variation Group
          </Button>
        </Buttons>
      </Container>
    </>
  );
};

export default Panel;
