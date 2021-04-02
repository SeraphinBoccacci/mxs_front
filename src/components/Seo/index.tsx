import React from "react";
import { Helmet } from "react-helmet";

interface SeoProps {
  lang?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaUrl?: string;
  metaImage?: string;
}

function Seo({
  lang = "en",
  metaTitle = "StreamParticles",
  metaDescription = "Get custom onstream alerts every time you receive a cryptodonation through Maiar and your Herotag ⚡",
  metaUrl = "https://streamparticles.io/",
  metaImage = "https://streamparticles.io/planet_2_rotated.jpeg",
}: SeoProps) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        { name: "title", content: metaTitle },
        { name: "description", content: metaDescription },

        { property: "og:type", content: "website" },
        { property: "og:url", content: metaUrl },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:image", content: metaImage },

        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: metaUrl },
        { property: "twitter:title", content: metaTitle },
        { property: "twitter:description", content: metaDescription },
        { property: "twitter:image", content: metaImage },
      ]}
    />
  );
}

export default Seo;
