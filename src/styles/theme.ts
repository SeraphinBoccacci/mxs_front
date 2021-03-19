import { createMuiTheme } from "@material-ui/core/styles";

import { colors, fonts } from "../constants";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.quad,
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
