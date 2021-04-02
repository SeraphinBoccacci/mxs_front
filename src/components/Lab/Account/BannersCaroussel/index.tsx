import React from "react";

import config from "../../../../config/config";
import { ContentContainer } from "../../../../styles/global";
import { OnboardingTitle } from "../style";
import { Carousel, CarousselContent, CarousselImage } from "./style";

const images = [
  {
    src: "/stream_particles_banners/twitch_pannel_1.jpg",
    link: `${config.url}/stream_particles_banners/twitch_pannel_1.jpg`,
  },
  {
    src: "/stream_particles_banners/twitch_pannel_2.jpg",
    link: `${config.url}/stream_particles_banners/twitch_pannel_2.jpg`,
  },
  {
    src: "/stream_particles_banners/twitch_pannel_3.jpg",
    link: `${config.url}/stream_particles_banners/twitch_pannel_3.jpg`,
  },
  {
    src: "/stream_particles_banners/twitch_pannel_4.jpg",
    link: `${config.url}/stream_particles_banners/twitch_pannel_4.jpg`,
  },
];

const BannersCaroussel = () => {
  return (
    <ContentContainer>
      <OnboardingTitle>Twitch Panels</OnboardingTitle>
      <Carousel
        autoPlay={false}
        stopAutoPlayOnHover
        animation="fade"
        interval={5000}
        timeout={200}
        swipe
      >
        {images.map((image, i) => (
          <CarousselContent key={i} href={image.src} download>
            <CarousselImage src={image.src}></CarousselImage>
          </CarousselContent>
        ))}
      </Carousel>
    </ContentContainer>
  );
};

export default BannersCaroussel;
