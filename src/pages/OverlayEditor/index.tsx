import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { useQueryString } from "../../hooks/useQueryString";
import { getOverlayFonts } from "../../services/overlays";
import { formatGoogleFontsUrl } from "../../utils/fonts";
import EditorContextProvider from "./Context";
import Header from "./Header";
import SideBar from "./SideBar";
import { Container, Content } from "./style";
import WorkBench from "./WorkBench";

const OverlayEditor = () => {
  const [fonts, setFonts] = useState([]);
  const { overlayLink } = useParams<{
    herotag: string;
    overlayLink: string;
  }>();
  const [herotag] = useQueryString("herotag");

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

      <EditorContextProvider>
        <Container>
          <Header></Header>
          <Content>
            <SideBar></SideBar>
            <WorkBench></WorkBench>
          </Content>
        </Container>
      </EditorContextProvider>
    </>
  );
};

export default OverlayEditor;
