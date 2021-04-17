import { useState } from "react";
import React from "react";

import Features from "./Features";
import Footer from "./Footer";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Header from "./Header";
import Introduction from "./Introduction";
import VideoSection from "./VideoSection";

const Home = () => {
  const [isViewer, setIsViewer] = useState<boolean>(true);

  return (
    <div>
      <Header></Header>
      <Introduction setIsViewer={setIsViewer}></Introduction>
      <Features isViewer={isViewer} setIsViewer={setIsViewer}></Features>
      <VideoSection></VideoSection>
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
      <Footer></Footer>
    </div>
  );
};

export default Home;
