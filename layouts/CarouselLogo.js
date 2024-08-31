"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AppleLogo from "../public/CarouselLogo/apple.jpg";
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
      <div className="embla p-1 w-full " ref={emblaRef}>
        <div className="embla__container">
          {Array.from({ length: 15 }, (_, index) => (
            <div className="embla__slide text-center" key={index}>
              <Image
                className="slide-logo"
                src={AppleLogo}
                width={70}
                height={70}
                alt="logo"
              />
            </div>
          ))}
        </div>
      </div>{" "}
      <SliderButton
        icon={<FaArrowRight />}
        className="embla__next"
        onClick={scrollNext}
      />
    </div>
  );
};

export default CarouselLogo;
