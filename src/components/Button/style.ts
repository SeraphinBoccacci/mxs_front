import styled from "styled-components";
import MaterialButton from "@material-ui/core/Button";
import { colors } from "../../constants";

const BaseButton = styled(MaterialButton)`
  width: max-content;
  margin: 1rem auto !important;
  height: 2.2rem;
  padding: 0 1.6rem !important;

  cursor: pointer !important;
`;

export const OutlinedButton = styled(BaseButton)`
  color: ${colors.cultured} !important;
  border: 1.5px solid ${colors.cultured} !important;
`;

export const ReversedButton = styled(BaseButton)`
  background-color: ${colors.denimBlue} !important;
  color: ${colors.cultured} !important;
  border: none !important;
`;

export const RegularButton = styled(BaseButton)`
  color: ${colors.denimBlue} !important;
  background-color: ${colors.cultured} !important;
  border: none !important;
`;
