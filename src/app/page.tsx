import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { textGenerateWords, typewriterWords } from "@/constants";
import { ArrowRight } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <div className="px-7">
        <section className=" flex flex-col justify-start mt-16 rounded-lg py-20 items-center">
          <BackgroundBeams />
          <TypewriterEffectSmooth words={typewriterWords} />
          <TextGenerateEffect
            duration={0.5}
            words={textGenerateWords}
            className="w-1/2 text-center font-light text-gray-500 text-sm"
          />
            <Button className="mt-10 bg-blue-500 cursor-pointer hover:bg-blue-500/80 flex justify-center items-center gap-2 z-10 text-white">
              Join the forum
              <ArrowRight />

            </Button>
        </section>
    </div>
  );
};

export default HomePage;
