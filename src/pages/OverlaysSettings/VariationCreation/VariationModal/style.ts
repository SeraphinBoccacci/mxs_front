import {
  Modal as MaterialModal,
  Paper,
  RadioGroup as MaterialRadioGroup,
} from "@material-ui/core";
import styled from "styled-components";

import { colors, fonts } from "../../../../constants";

export const Modal = styled(MaterialModal)`
  width: 55rem;
  height: 40rem;

  margin: auto;

  border: none !important;
  outline: none !important;
`;

export const ModalHeader = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;

  padding: 0 2rem;

  background: ${colors.quad};

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ModalContent = styled(Paper)`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 1rem;

  overflow-y: scroll;

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
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  background-color: ${colors.soft_black};
`;

export const SectionTitle = styled.h3`
  font-family: ${fonts.Roboto};
  text-align: center;
  font-size: 1.5rem;

  margin: 0.5rem 0;
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
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  margin: 0.6rem 0;

  width: 100%;
`;

export const SubSection = styled(Section)`
  background-color: ${colors.black};

  width: calc(100% - 1.4rem);

  margin: 0.7rem;
`;

export const SubSectionTitle = styled.h4`
  font-family: ${fonts.Ubuntu};
  text-align: center;

  font-size: 1.2rem;

  margin: 0 0;
`;

export const AnimationType = styled.h5`
  font-family: ${fonts.Ubuntu};
  text-align: center;

  font-size: 1rem;

  margin: 0 0;
`;

export const RadioGroup = styled(MaterialRadioGroup)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin: 0.6rem 0;

  width: 100%;
`;

export const Comment = styled.p`
  font-family: ${fonts.Ubuntu};
  font-size: 0.75rem;
  text-align: center;

  margin: 0.4rem auto 1rem;
`;
