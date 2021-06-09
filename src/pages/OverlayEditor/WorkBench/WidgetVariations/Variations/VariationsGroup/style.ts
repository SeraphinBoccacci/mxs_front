import styled from "styled-components";

interface ContainerProps {}

export const DraggableContainer = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 0.6rem 0;

  padding: 0.4rem;

  width: 100%;
  height: max-content;
`;

export const Cell = styled.div`
  border-spacing: 0;

  padding: 0.5rem;
`;

export const VariationGroupHeader = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;
  flex-direction: row;

  background: red;

  & > button {
    width: 32px;
    min-width: 32px;
    height: 32px;

    margin: 0;
  }
`;

export const ArrowContainer = styled.div`
  margin: auto 0;

  cursor: pointer;
`;

export const VariationGroupTitle = styled.div`
  height: 2rem;
  width: max-content;

  line-height: 2rem;

  padding: 0 1rem;
`;
