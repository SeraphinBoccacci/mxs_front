import { AppBar } from "./style";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabPanel } from "../TabPanel";
import { useContext, useState } from "react";
import { NotDevelopped } from "../TabPanel/NotDevelopped";
import { IftttIntegration } from "../TabPanel/IftttIntegration";
import { Account } from "../TabPanel/Account";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import { AuthContext } from "../AuthContext";
import { useHistory } from "react-router-dom";
import { setItem } from "../../utils/localStorage";

const Console = () => {
  const [value, setValue] = useState(0);
  const { setToken } = useContext(AuthContext);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    setValue(value);
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
        <NotDevelopped></NotDevelopped>
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
