import styled from "styled-components";

import { fonts } from "../../../../../constants";

export const Container = styled.div`
  width: 40rem;
  margin: 2rem auto;
  border-spacing: 0;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  font-family: ${fonts.Roboto};
  font-size: 0.9rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 1rem;

  margin: 0;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
`;

export const TableHeaderCell = styled.div`
  font-size: 0.8rem;
  font-family: ${fonts.Roboto};

  padding: 0.5rem;
`;

export const VariationName = styled(TableHeaderCell)`
  text-align: left;
  width: 30%;
`;

export const RequiredAmount = styled(TableHeaderCell)`
  text-align: center;
  width: 15%;
`;

export const Chances = styled(TableHeaderCell)`
  text-align: center;
  width: 15%;
`;

export const Actions = styled(TableHeaderCell)`
  text-align: center;
  width: 40%;
`;
