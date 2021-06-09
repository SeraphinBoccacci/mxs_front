import styled from "styled-components";

import { colors, fonts } from "../../../../constants";

export const Container = styled.ul`
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  background-color: ${colors.quad};

  width: 14rem;
  height: 0rem;

  transition: 0.3s;
  border-radius: 1rem;

  overflow: hidden;

  list-style: none;

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

  & > li:first-child {
    margin-top: 6rem;
  }

  & > li:not(first-child) {
    margin-top: 1rem;

    @media (min-width: 500px) {
      margin-top: 2rem;
    }
  }

  &:before {
    position: absolute;
    content: "";

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

  font-family: ${fonts.Roboto};

  width: 9rem;
  font-size: 0.95rem;

  height: 30px;
  line-height: 30px;

  cursor: pointer;

  @media (min-width: 500px) {
    width: 12rem;
    font-size: 1rem;
  }
`;
