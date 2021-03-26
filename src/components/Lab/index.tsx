import { Button } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import { lazy, Suspense, useCallback, useContext } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

import { useQueryString } from "../../hooks/useQueryString";
import { AuthContext } from "../AuthContext";
import LoadingScreen from "../LoadingScreen";
import { TabPanel } from "../TabPanel";
import { NotDevelopped } from "../TabPanel/NotDevelopped";
import { AppBar, RightNode, Tabs } from "./style";

const Account = lazy(() => {
  return import("../TabPanel/Account");
});

const Ifttt = lazy(() => {
  return import("../TabPanel/Ifttt");
});

const StreamElements = lazy(() => {
  return import("../TabPanel/StreamElements");
});

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

  const handleDisconnect = useCallback(() => {
    setTokenData(null);
    setHerotag("");

    history.push("/");
  }, [setTokenData, setHerotag, history]);

  const handleGoToHome = useCallback(() => {
    history.push("/");
  }, [history]);

  const value = Number(activeTab);

  return (
    <div>
      <AppBar position="static" color="primary">
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
        >
          <Tab label="User Account" {...a11yProps(0)} />
          <Tab label="IFTTT Particle" {...a11yProps(1)} />
          <Tab label="Stream Elements Particle" {...a11yProps(2)} />
          <Tab label="StreamLabs Particle" {...a11yProps(3)} />
          <Tab label="OBS Particle" {...a11yProps(4)} />
        </Tabs>
        <RightNode>
          <Button onClick={handleGoToHome}>Home</Button>
          <Button onClick={handleDisconnect}>
            <PowerSettingsNewRoundedIcon></PowerSettingsNewRoundedIcon>
          </Button>
        </RightNode>
      </AppBar>
      <Suspense fallback={<LoadingScreen></LoadingScreen>}>
        <TabPanel value={value} index={0}>
          <Account></Account>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Ifttt></Ifttt>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <StreamElements></StreamElements>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <NotDevelopped></NotDevelopped>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <NotDevelopped></NotDevelopped>
        </TabPanel>
      </Suspense>
    </div>
  );
};

export default Lab;