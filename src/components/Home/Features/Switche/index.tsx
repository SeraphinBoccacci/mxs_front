import { Grid, Switch } from "@material-ui/core";
import { GridContainer } from "./style";

const Switcher = ({
  isSubscriberOptionChecked,
  setIsSubscriberOptionChecked,
}: {
  isSubscriberOptionChecked: boolean;
  setIsSubscriberOptionChecked: (b: boolean) => void;
}) => {
  const handleChange = () => {
    setIsSubscriberOptionChecked(!isSubscriberOptionChecked);
  };

  return (
    <GridContainer container alignItems="center" spacing={1}>
      <Grid item>Streamer</Grid>
      <Grid item>
        <Switch
          checked={isSubscriberOptionChecked}
          onChange={handleChange}
          name="checkedC"
        />
      </Grid>
      <Grid item>Subscriber</Grid>
    </GridContainer>
  );
};

export default Switcher;
