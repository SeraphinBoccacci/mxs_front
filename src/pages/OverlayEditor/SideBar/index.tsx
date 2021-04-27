import { Button } from "@material-ui/core";
import React, { useCallback } from "react";

import { WidgetsKinds } from "../../../services/overlays";
import { useEditorContext } from "../Context";
import {
  AddWidgetButton,
  BeginContainer,
  Container,
  WelcomeTitle,
  WidgetsItem,
  WidgetsList,
} from "./style";

const SideBar = () => {
  const {
    setIsAddWidgetOpenned,
    overlay,
    hasAtLeastOneWidget,
    setSelectedWidget,
    setWidgetData,
    selectedWidget,
  } = useEditorContext();

  const handleOnClick = useCallback(() => {
    setIsAddWidgetOpenned(true);
  }, [setIsAddWidgetOpenned]);

  return (
    <Container>
      {!hasAtLeastOneWidget ? (
        <BeginContainer>
          <WelcomeTitle>
            <span>Welcome</span>
            <br></br>
            <span>To your overlay editor</span>
          </WelcomeTitle>
          <Button onClick={handleOnClick} color="secondary" variant="contained">
            Add first widget
          </Button>
        </BeginContainer>
      ) : (
        <>
          <WidgetsList>
            {overlay?.alerts && (
              <WidgetsItem
                isFocused={selectedWidget === WidgetsKinds.ALERTS}
                onClick={() => {
                  setSelectedWidget(WidgetsKinds.ALERTS);
                  setWidgetData(overlay.alerts);
                }}
              >
                Alerts
              </WidgetsItem>
            )}
          </WidgetsList>
          <AddWidgetButton onClick={handleOnClick}>+</AddWidgetButton>
        </>
      )}
    </Container>
  );
};

export default SideBar;
