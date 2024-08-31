"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Lassa from "../public/Opportunities/lassa.jpg";
import Image from "next/image";

import SliderButton from "@/components/SliderButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const CarouselLogo = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="d-flex w-full vertical-centered">
      <SliderButton
        icon={<FaArrowLeft />}
        className="embla__prev"
        onClick={scrollPrev}
      />
      <div className="embla p-2" ref={emblaRef}>
        <div className="embla__container">
          {Array.from({ length: 15 }, (_, index) => (
            <div className="embla__slide__two " key={index}>
              <Image
                className="slide-image"
                src={Lassa}
                width={150}
                height={80}
                alt="logo"
              />
            </div>
          ))}
        </div>{" "}
      </div>
      <SliderButton
        icon={<FaArrowRight />}
        className="embla__next"
        onClick={scrollNext}
      />
    </div>
  );
};

export default CarouselLogo;
