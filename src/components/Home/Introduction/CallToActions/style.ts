import styled from "styled-components";

export const CallsToActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-right: 20%;
  margin-left: 5%;

  @media (min-width: 450px) {
    margin-right: 40%;
    margin-left: 10%;
  }
`;
