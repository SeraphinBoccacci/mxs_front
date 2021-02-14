import MaterialAppBar from "@material-ui/core/AppBar";
import styled from "styled-components";
import MaterialTabs from "@material-ui/core/Tabs";

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
