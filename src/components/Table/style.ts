import MaterialPaper from "@material-ui/core/Paper";
import MaterialTable from "@material-ui/core/Table";
import MaterialTableContainer from "@material-ui/core/TableContainer";
import styled from "styled-components";

export const Paper = styled(MaterialPaper)`
  margin: 0 auto !important;
  width: 100% !important;

  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%) !important;

  overflow: hidden !important;
`;

export const TableContainer = styled(MaterialTableContainer)`
  max-height: 30rem !important;
`;

export const StyledTable = styled(MaterialTable)`
  border-collapse: separate;
  border-spacing: 0 8px !important;
`;
