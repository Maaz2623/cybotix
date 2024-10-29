import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Billboard = () => {
  return (
    <Carousel className="border h-full w-full">
      <CarouselContent className="">
        <CarouselItem className="">...</CarouselItem>
        <CarouselItem className="">...</CarouselItem>
        <CarouselItem className="">...</CarouselItem>
        <CarouselPrevious className="" />
        <CarouselNext className="" />
      </CarouselContent>
    </Carousel>
  );
};

export default Billboard;
