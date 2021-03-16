import Tab from "@material-ui/core/Tab";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import { useCallback, useContext } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

import { useQueryString } from "../../hooks/useQueryString";
import { AuthContext } from "../AuthContext";
import { TabPanel } from "../TabPanel";
import { Account } from "../TabPanel/Account";
import { IftttIntegration } from "../TabPanel/Ifttt";
import { NotDevelopped } from "../TabPanel/NotDevelopped";
import StreamElementsIntegration from "../TabPanel/StreamElements";
import { AppBar, Tabs } from "./style";

const Lab = () => {
  const [activeTab, setActiveTab] = useQueryString("activeTab");
  const { setTokenData, setHerotag } = useContext(AuthContext);
  const history = useHistory();

  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, value: any) => {
      setActiveTab(value);
    },
    [setActiveTab]
  );

  const a11yProps = useCallback((index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }, []);

  const handleClick = useCallback(() => {
    setTokenData(null);
    setHerotag("");

    history.push("/");
  }, [setTokenData, setHerotag, history]);

  const value = Number(activeTab);

  return (
    <div>
      <AppBar position="static" color="primary">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="User Account" {...a11yProps(0)} />
          <Tab label="IFTTT Particle" {...a11yProps(1)} />
          <Tab label="Stream Elements Particle" {...a11yProps(2)} />
          <Tab label="StreamLabs Particle" {...a11yProps(3)} />
          <Tab label="OBS Particle" {...a11yProps(4)} />
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

export default Lab;
