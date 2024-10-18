"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { galleryImages } from "@/constants";
import Image from "next/image";

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ startDelay: 2000, speed: 1 }),
  ]);

  return (
    <Card className="w-full border-none shadow-none items-center relative">
      <div className="bg-transparent w-32 h-[100%] absolute bg-gradient-to-l from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] top-0 left-0 z-20" />
      <CardContent
        className="overflow-hidden border-none shadow-none my-2 p-4 w-full h-[40vh] md:h-[50vh] mt-10"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {galleryImages?.map((image) => (
            <Image
              src={image} // Fallback to a placeholder image if undefined
              alt="image image"
              width={400}
              height={400}
              key={image}
              quality={50}
              className="ml-10 rounded-xl opacity-90 cursor-pointer h-[90%] hover:scale-105 duration-200 transition-all"
            />
          ))}
        </div>
      </CardContent>
      <div className="bg-transparent w-32 h-[100%] absolute bg-gradient-to-r from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] top-0 right-0 z-20" />
    </Card>
  );
};

export default EmblaCarousel;
