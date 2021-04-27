import React from "react";

import EditorContextProvider from "./Context";
import Header from "./Header";
import SideBar from "./SideBar";
import { Container, Content } from "./style";
import WorkBench from "./WorkBench";

const OverlayEditor = () => {
  return (
    <EditorContextProvider>
      <Container>
        <Header></Header>
        <Content>
          <SideBar></SideBar>
          <WorkBench></WorkBench>
        </Content>
      </Container>
    </EditorContextProvider>
  );
};

export default OverlayEditor;
