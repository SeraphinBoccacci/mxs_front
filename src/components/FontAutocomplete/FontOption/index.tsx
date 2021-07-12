import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { createRef } from "react";
import { Helmet } from "react-helmet";

import { formatGoogleFontsUrl } from "../../../utils/fonts";
import { Option } from "..";
import { StyledDiv } from "./style";

const FontOption = ({ option }: { option: Option }) => {
  const ref = createRef<HTMLDivElement>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      if (ref.current) {
        const x =
          ref.current.getBoundingClientRect().top -
          (ref.current.offsetParent?.getBoundingClientRect()?.top || 0);

        if (x > 0 && x < 400) setIsVisible(true);
      }
    }, 1000);

    return () => clearInterval(i);
  }, [setIsVisible, option.value, ref]);

  const googleFontsHref = useMemo(() => formatGoogleFontsUrl([option.value]), [
    option.value,
  ]);

  return (
    <>
      {googleFontsHref && isVisible && (
        <Helmet>
          <link href={googleFontsHref} rel="stylesheet" />
        </Helmet>
      )}

      <StyledDiv fontFamily={option.value} ref={ref}>
        {option.label}
      </StyledDiv>
    </>
  );
};

export default FontOption;
