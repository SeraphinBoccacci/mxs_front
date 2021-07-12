import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import DraggableOverlay from "../../components/overlays/DraggableOverlay";
import { getOverlayFonts } from "../../services/overlays";
import { formatGoogleFontsUrl } from "../../utils/fonts";

export interface TransactionData {
  amount: number;
  herotag: string;
  message: string;
}

const WorkBenchBrowserSource = () => {
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

      <DraggableOverlay></DraggableOverlay>
    </>
  );
};

export default WorkBenchBrowserSource;
