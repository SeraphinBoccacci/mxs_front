import React, { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import Overlay from "../../components/overlays/Overlay";
import { getOverlayFonts } from "../../services/overlays";
import { formatGoogleFontsUrl } from "../../utils/fonts";

export interface TransactionData {
  amount: number;
  herotag: string;
  message: string;
}

const BrowserSource = () => {
  const [fonts, setFonts] = useState([]);
  const { herotag, overlayLink } = useParams<{
    herotag: string;
    overlayLink: string;
  }>();

  useEffect(() => {
    getOverlayFonts(herotag, overlayLink)
      .then((fonts) => {
        setFonts(fonts);
      })
      .catch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const googleFontsHref = useMemo(() => formatGoogleFontsUrl(fonts), [fonts]);

  return (
    <>
      {googleFontsHref && (
        <Helmet>
          <link href={googleFontsHref} rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Helmet>
      )}

      <Overlay></Overlay>
    </>
  );
};

export default BrowserSource;
