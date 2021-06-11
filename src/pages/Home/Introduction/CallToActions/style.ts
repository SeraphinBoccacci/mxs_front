import styled from "styled-components";

export const CallsToActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 20%;
  margin-left: 5%;

  @media (min-width: 450px) {
    margin-right: 40%;
    margin-left: 10%;
  }
`;
