import styled from "styled-components";

import { colors, fonts } from "../../../../constants";

export const Container = styled.ul`
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  overflow: hidden;
  width: 14rem;
  height: 0;
  border-radius: 1rem;
  background-color: ${colors.quad};
  list-style: none;
  transition: 0.3s;

  @media (min-width: 400px) {
    width: 18rem;
  }

  @media (min-width: 500px) {
    width: 20rem;
  }

  & > li {
    @media (min-width: 500px) {
      margin-left: 2rem;
    }
  }

  & > li:not(first-child) {
    margin-top: 1rem;

    @media (min-width: 500px) {
      margin-top: 2rem;
    }
  }

  & > li:first-child {
    margin-top: 6rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 4rem;
    left: 1rem;
    width: 0.1rem;
    height: 9rem;
    background-color: ${colors.primary};

    @media (min-width: 500px) {
      left: 2rem;
    }
  }
`;

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 9rem;
  height: 30px;
  font-size: 0.95rem;
  font-family: ${fonts.Roboto};
  line-height: 30px;
  cursor: pointer;

  @media (min-width: 500px) {
    width: 12rem;
    font-size: 1rem;
  }
`;
