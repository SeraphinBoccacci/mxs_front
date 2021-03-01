import { useState } from "react";
import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Features from "../components/Home/Features";
import FrequentlyAskedQuestions from "../components/Home/FrequentlyAskedQuestions";
import Introduction from "../components/Home/Introduction";

export default function Home() {
  const [isViewer, setIsViewer] = useState<boolean>(true);

  return (
    <div>
      <Helmet>
        <title>StreamParticles</title>
      </Helmet>
      <Header></Header>
      <Introduction setIsViewer={setIsViewer}></Introduction>
      <Features isViewer={isViewer} setIsViewer={setIsViewer}></Features>
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
      <Footer></Footer>
    </div>
  );
}
