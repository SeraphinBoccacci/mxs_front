import { createMuiTheme } from "@material-ui/core/styles";
import { colors, fonts, colorsV2 } from "../constants";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: colorsV2.primary,
    },
    secondary: {
      main: colorsV2.quad,
    },
    error: {
      main: colors.danger,
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.warning,
    },
  },
  typography: {
    fontFamily: [fonts.Roboto, fonts.Ubuntu].join(", "),
  },
});

export default theme;
