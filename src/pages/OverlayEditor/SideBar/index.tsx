import { Button } from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import React, { useCallback } from "react";

import { useAuth } from "../../../components/AuthContext";
import { getDonationBar } from "../../../services/overlays/donationBar";
import { WidgetsKinds } from "../../../types/overlays";
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
  const { user } = useAuth();
  const {
    setIsAddWidgetOpenned,
    overlay,
    hasAtLeastOneWidget,
    setSelectedWidget,
    selectedWidget,
    setWidgetData,
  } = useEditorContext();

  const handleOnClick = useCallback(() => {
    setIsAddWidgetOpenned((prev) => !prev);
  }, [setIsAddWidgetOpenned]);

  const toggleWidget = useCallback(
    async (widgetKind: WidgetsKinds) => {
      if (selectedWidget === widgetKind) {
        setSelectedWidget(null);

        return;
      }

      if (overlay?.alerts && widgetKind === WidgetsKinds.ALERTS) {
        setSelectedWidget(widgetKind);
      } else if (
        user?.herotag &&
        overlay?._id &&
        widgetKind === WidgetsKinds.DONATION_BAR
      ) {
        const donationBar = await getDonationBar(user?.herotag, overlay._id);

        setSelectedWidget(widgetKind);
        setWidgetData(donationBar);
      } else {
        setSelectedWidget(null);
      }
    },
    [setSelectedWidget, overlay, selectedWidget, setWidgetData, user?.herotag]
  );

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
                onClick={() => toggleWidget(WidgetsKinds.ALERTS)}
              >
                Alerts
              </WidgetsItem>
            )}
            {overlay?.donationBar && (
              <WidgetsItem
                isFocused={selectedWidget === WidgetsKinds.DONATION_BAR}
                onClick={() => toggleWidget(WidgetsKinds.DONATION_BAR)}
              >
                Donation Bar
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
