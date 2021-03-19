import React from "react";

import { TabPanelContainer } from "./style";

export const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <TabPanelContainer
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </TabPanelContainer>
  );
};
