import MaterialAppBar from "@material-ui/core/AppBar";
import MaterialTabs from "@material-ui/core/Tabs";
import styled from "styled-components";

export const AppBar = styled(MaterialAppBar)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;

  height: 4rem !important;

  padding-right: 2rem !important;

  @media (min-width: 768px) {
    height: 5rem !important;
  }
`;

export const Tabs = styled(MaterialTabs)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;

  width: 100% !important;
`;

export const RightNode = styled.div`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;

  width: 9rem;
`;
