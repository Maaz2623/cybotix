import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Team from "@/components/team";
import { Separator } from "@/components/ui/separator";
import React from "react";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
