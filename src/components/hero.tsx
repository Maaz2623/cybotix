"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { textGenerateWords, typewriterWords } from "@/constants";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useContactMemoryStore } from "../../store/use-contact-memory-modal";

const Hero = () => {
  const [, setOpen] = useContactMemoryStore();
  return (
    <section
      id="hero"
      className="flex flex-col justify-center rounded-lg py-20 items-center md:h-[calc(100vh-64px)] "
    >
      <TypewriterEffectSmooth
        words={typewriterWords}
        className=" lg:text-3xl xl:text-5xl md:text-2xl text-lg"
      />
      <TextGenerateEffect
        duration={0.5}
        words={textGenerateWords}
        className="lg:w-1/2 text-center px-3 font-light text-gray-500 text-sm w-full md:px-6 md:text-lg lg:text-xl"
      />
      <Button
        onClick={() => setOpen(true)}
        className="mt-10 bg-blue-500 cursor-pointer hover:bg-blue-500/80 flex justify-center items-center gap-2 z-10 text-white"
      >
        Join the forum
        <ArrowRight />
      </Button>
    </section>
  );
};

export default Hero;
