import Footer from "../components/Footer";
import Header from "../components/Header";
import Features from "../components/Home/Features";
import Introduction from "../components/Home/Introduction";
import { Helmet } from "react-helmet";
import FrequentlyAskedQuestions from "../components/Home/FrequentlyAskedQuestions";
import { useState } from "react";

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
