import { createMuiTheme } from "@material-ui/core/styles";
import { colors, fonts } from "../constants";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.denimBlue,
    },
    secondary: {
      main: colors.spanishGray,
    },
    info: {
      main: colors.lightPeriwinkle,
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
