import Footer from "../components/Footer";
import Header from "../components/Header";
import Features from "../components/Home/Features";
import Introduction from "../components/Home/Introduction";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>StreamParticles</title>
      </Helmet>
      <Header></Header>
      <Introduction></Introduction>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
}
