import MaterialPaper from "@material-ui/core/Paper";
import MaterialTable from "@material-ui/core/Table";
import MaterialTableContainer from "@material-ui/core/TableContainer";
import styled from "styled-components";

export const Paper = styled(MaterialPaper)`
  overflow: hidden !important;
  width: 100% !important;
  margin: 0 auto !important;
  box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%),
    0 1px 8px 0 rgb(0 0 0 / 12%) !important;
`;

export const TableContainer = styled(MaterialTableContainer)`
  max-height: 30rem !important;
`;

export const StyledTable = styled(MaterialTable)`
  border-spacing: 0 8px !important;
  border-collapse: separate;
`;
