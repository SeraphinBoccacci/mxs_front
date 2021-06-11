import styled from "styled-components";

import { fonts } from "../../constants";

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormCaption = styled.p`
  margin: 1rem auto 3rem;
  font-size: 0.85rem;
  font-family: ${fonts.Roboto};
  text-align: justify;
  text-align-last: left;
`;

export const Comment = styled.p`
  width: 100%;
  height: 2rem;
  margin: 0 auto 1rem;
  font-size: 0.75rem;
  font-family: ${fonts.Ubuntu};
  line-height: 1rem;
  text-align: center;
`;
