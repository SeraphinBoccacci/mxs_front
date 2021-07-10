import styled from "styled-components";

import { fonts } from "../../../constants";

interface StyledDivProps {
  fontFamily: string;
}

export const StyledDiv = styled.div.attrs<StyledDivProps>(({ fontFamily }) => ({
  style: {
    fontFamily: `${fontFamily}, ${fonts.Roboto}, sans-serif`,
  },
}))<StyledDivProps>``;
