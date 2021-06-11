import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 11rem;

  @media (min-width: 1000px) {
    width: 13rem;
  }
`;
