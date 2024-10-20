import Footer from "@/app/(root)/_components/footer";
import Gallery from "@/app/(root)/_components/gallery";
import Hero from "@/app/(root)/_components/hero";
import Team from "@/app/(root)/_components/team";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Navbar from "./_components/navbar";
import { BackgroundBeams } from "./_components/ui/background-beams";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <BackgroundBeams className="-z-40 opacity-80" />
      <div className="">
        <Hero />
        <Separator className="w-1/2 mx-auto" />
        <Team />
        <Separator className="w-1/2 mx-auto mt-16" />
        <Gallery />
        {/* <Separator className="w-1/2 mx-auto" /> */}
        {/* <About /> */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
