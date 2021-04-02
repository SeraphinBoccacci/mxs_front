import React from "react";
import { useParams } from "react-router-dom";

import CreatorHome from "../components/CreatorHomePage";
import Seo from "../components/Seo";

const CreatorHomePage = () => {
  const { herotag } = useParams<{ herotag: string }>();

  return (
    <>
      <Seo metaTitle={herotag}></Seo>
      <CreatorHome></CreatorHome>
    </>
  );
};

export default CreatorHomePage;
