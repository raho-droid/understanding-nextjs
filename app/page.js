import Advertisement from "@/layouts/Advertisement";
import CarouselLogo from "@/layouts/CarouselLogo";
import Opportunities from "@/layouts/Opportunities";
import SecondCarousel from "@/layouts/SecondCarousel";
import Shop from "@/layouts/Shop";
import React from "react";

export default function Home() {
  return (
    <div>
      <CarouselLogo />
      <Opportunities />
      <SecondCarousel />
      <Advertisement /> <Shop />
    </div>
  );
}
