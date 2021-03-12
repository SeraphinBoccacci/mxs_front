import MaterialAppBar from "@material-ui/core/AppBar";
import MaterialTabs from "@material-ui/core/Tabs";
import styled from "styled-components";

export const AppBar = styled(MaterialAppBar)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;

  padding-right: 2rem !important;
`;

export const Tabs = styled(MaterialTabs)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;
`;
