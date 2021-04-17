import styled from "styled-components";

export const Svg = styled.svg<{ width?: string }>`
  width: ${({ width }) => width || "80px"};

  @media (min-width: 1300px) {
    width: ${({ width }) => width || "100px"};
  }
`;
