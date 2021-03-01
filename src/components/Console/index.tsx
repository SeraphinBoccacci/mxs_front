import Tab from "@material-ui/core/Tab";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import { useContext } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

import { useQueryString } from "../../hooks/useQueryString";
import { setItem } from "../../utils/localStorage";
import { AuthContext } from "../AuthContext";
import { TabPanel } from "../TabPanel";
import { Account } from "../TabPanel/Account";
import { IftttIntegration } from "../TabPanel/IftttIntegration";
import { NotDevelopped } from "../TabPanel/NotDevelopped";
import StreamElementsIntegration from "../TabPanel/StreamElementsIntegration";
import { AppBar, Tabs } from "./style";

const Console = () => {
  const [activeTab, setActiveTab] = useQueryString("activeTab");
  const { setToken } = useContext(AuthContext);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    setActiveTab(value);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleClick = () => {
    setToken(null);
    setItem("tokenExpirationTimestamp", null);
    setItem("herotag", "");

    history.push("/");
  };

  const value = Number(activeTab);

  return (
    <div>
      <AppBar position="static" color="primary">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Account" {...a11yProps(0)} />
          <Tab label="IFTTT Integration" {...a11yProps(1)} />
          <Tab label="Stream Elements Integration" {...a11yProps(2)} />
          <Tab label="StreamLabs Integration" {...a11yProps(3)} />
          <Tab label="OBS Integration" {...a11yProps(4)} />
        </Tabs>
        <PowerSettingsNewRoundedIcon
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        ></PowerSettingsNewRoundedIcon>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Account></Account>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IftttIntegration></IftttIntegration>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StreamElementsIntegration></StreamElementsIntegration>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NotDevelopped></NotDevelopped>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <NotDevelopped></NotDevelopped>
      </TabPanel>
    </div>
  );
};

export default Console;
