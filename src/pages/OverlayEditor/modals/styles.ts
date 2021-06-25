import {
  Modal as MaterialModal,
  Paper,
  RadioGroup as MaterialRadioGroup,
} from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../constants";

export const Modal = styled(MaterialModal)`
  width: 55rem;
  height: 40rem;
  margin: auto;
  padding-top: 2rem !important;
  border: none !important;
  outline: none !important;
`;

export const ModalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 3rem;
  padding: 0 2rem;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background: ${colors.quad};
`;

export const ModalContent = styled(Paper)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: none !important;
  outline: none !important;
`;

export const ModalForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  margin: 1rem 0;
  padding: 1rem 0;
  border-radius: 10px;
  background-color: ${colors.soft_black};
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.2);
`;

export const SectionTitle = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-family: ${fonts.Roboto};
  text-align: center;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
`;

export const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0.6rem 0;
`;

export const SubSection = styled(Section)`
  width: calc(100% - 1.4rem);
  margin: 0.7rem;
  background-color: ${colors.black};
`;

export const SubSectionTitle = styled.h4`
  margin: 0 0;
  font-size: 1.2rem;
  font-family: ${fonts.Ubuntu};
  text-align: center;
`;

export const AnimationType = styled.h5`
  margin: 0;
  font-size: 1rem;
  font-family: ${fonts.Ubuntu};
  text-align: center;
`;

export const RadioGroup = styled(MaterialRadioGroup)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0.6rem 0;
`;

export const Comment = styled.p`
  margin: 0.4rem auto 1rem;
  font-size: 0.75rem;
  font-family: ${fonts.Ubuntu};
  text-align: center;
`;
