"use client";
import React from "react";
import { BackgroundBeams } from "./_components/ui/background-beams";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";

const HomePage = () => {

  return (
    <>
      <BackgroundBeams className="-z-40 opacity-80" />
      <Navbar />
      <Hero />
    </>
  );
};

export default HomePage;
