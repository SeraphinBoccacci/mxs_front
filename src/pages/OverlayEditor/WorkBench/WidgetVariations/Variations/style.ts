import styled from "styled-components";

import { fonts } from "../../../../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin: 2rem auto;
  border-spacing: 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0 1rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
  font-size: 0.9rem;
  font-family: ${fonts.Roboto};
`;

export const TableHeaderCell = styled.div`
  padding: 0.5rem;
  font-size: 0.8rem;
  font-family: ${fonts.Roboto};
`;

export const VariationName = styled(TableHeaderCell)`
  width: 30%;
  text-align: left;
`;

export const RequiredAmount = styled(TableHeaderCell)`
  width: 15%;
  text-align: center;
`;

export const Chances = styled(TableHeaderCell)`
  width: 15%;
  text-align: center;
`;

export const Actions = styled(TableHeaderCell)`
  width: 40%;
  text-align: center;
`;
