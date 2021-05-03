import { Button } from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
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
    setIsAddWidgetOpenned((prev) => !prev);
  }, [setIsAddWidgetOpenned]);

  const handleSelectAlertWidget = useCallback(() => {
    if (overlay?.alerts && selectedWidget !== WidgetsKinds.ALERTS) {
      setSelectedWidget(WidgetsKinds.ALERTS);
      setWidgetData(overlay?.alerts);
    } else {
      setSelectedWidget(null);
      setWidgetData(null);
    }
  }, [setSelectedWidget, setWidgetData, overlay?.alerts, selectedWidget]);

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
                onClick={handleSelectAlertWidget}
              >
                Alerts
              </WidgetsItem>
            )}
          </WidgetsList>
          <AddWidgetButton onClick={handleOnClick}>
            <AddRoundedIcon fontSize="large"></AddRoundedIcon>
          </AddWidgetButton>
        </>
      )}
    </Container>
  );
};

export default SideBar;
