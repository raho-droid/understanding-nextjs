"use client";
import Image from "next/image";
import React from "react";
import Lassa from "../public/Opportunities/lassa.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import Button from "@/components/Button";

import useEmblaCarousel from "embla-carousel-react";
const Opportunities = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <div className="embla p-1" ref={emblaRef}>
      <div className="embla__container gap-1">
        {Array.from({ length: 15 }, (_, index) => (
          <div className="embla__slide__three " key={index}>
            <div className="opportunities">
              <div className="row vertical-centered">
                <div className="col-6 centered">
                  <div className="w-half">
                    <h2 className="bold">Lassa Ürünlerinde</h2>
                    <h1 className="text-green bolder">Sepette %20 İndirim</h1>
                    <p className="text-green ">
                      falan filan falan filanfalan filan falan filanvfalan filan
                      falan filan falan filan falan filan falan filan
                    </p>
                    <div className="header-buttons gap-1">
                      <Link
                        className="opportunity-button-one vertical-centered gap-1"
                        href="#"
                      >
                        <Button
                          name="Şimdi Daha Fazlası"
                          bgColor="green"
                          color="white"
                          icon={<FaArrowRight />}
                          iconPosition="right"
                        />
                      </Link>
                      <Link
                        className="opportunity-button-two vertical-centered gap-1"
                        href="#"
                      >
                        <Button
                          name="Paylaş"
                          bgColor="white"
                          color="green"
                          icon={<FiShare />}
                          iconPosition="right"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 centered">
                  <Image src={Lassa} width={750} height={530} alt="brands" />
                </div>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
