import styled from "styled-components";
import { fonts, weights } from "../../constants";

export const LogoAndNameContainer = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;

  border: none;
`;

export const Name = styled.h1<{ color: string }>`
  width: max-content;
  line-height: 2rem;
  font-size: 1.2rem;
  font-family: ${fonts.Roboto};
  font-weight: ${weights.Roboto.bold};
  color: ${({ color }) => color};
`;
