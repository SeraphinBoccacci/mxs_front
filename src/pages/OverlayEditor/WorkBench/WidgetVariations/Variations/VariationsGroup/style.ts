import styled from "styled-components";

export const DraggableContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  margin: 0.6rem 0;
  padding: 0.4rem;
`;

export const Cell = styled.div`
  padding: 0.5rem;
  border-spacing: 0;
`;

export const VariationGroupHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2rem;

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
  width: max-content;
  height: 2rem;
  padding: 0 1rem;
  line-height: 2rem;
`;
