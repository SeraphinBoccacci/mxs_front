import { Grid, Switch } from "@material-ui/core";
import { GridContainer } from "./style";

const Switcher = ({
  isViewerOptionChecked,
  setIsViewerOptionChecked,
}: {
  isViewerOptionChecked: boolean;
  setIsViewerOptionChecked: (b: boolean) => void;
}) => {
  const handleChange = () => {
    setIsViewerOptionChecked(!isViewerOptionChecked);
  };

  return (
    <GridContainer container alignItems="center" spacing={1}>
      <Grid item>Creator</Grid>
      <Grid item>
        <Switch
          checked={isViewerOptionChecked}
          onChange={handleChange}
          name="checked"
        />
      </Grid>
      <Grid item>Viewer</Grid>
    </GridContainer>
  );
};

export default Switcher;
