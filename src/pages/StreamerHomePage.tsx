import React from "react";
import { useParams } from "react-router-dom";

import Seo from "../components/Seo";
import StreamerHome from "../components/StreamerHomePage";

const StreamerHomePage = () => {
  const { herotag } = useParams<{ herotag: string }>();

  return (
    <>
      <Seo metaTitle={herotag}></Seo>
      <StreamerHome></StreamerHome>
    </>
  );
};

export default StreamerHomePage;
