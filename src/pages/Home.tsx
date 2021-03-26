import { useState } from "react";
import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Features from "../components/Home/Features";
import FrequentlyAskedQuestions from "../components/Home/FrequentlyAskedQuestions";
import Introduction from "../components/Home/Introduction";
import VideoSection from "../components/Home/VideoSection";

export default function Home() {
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
}
