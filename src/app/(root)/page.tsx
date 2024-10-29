"use client";
import { Button } from "@/components/ui/button";
import { useGetForums } from "@/features/forums/api/use-get-forums";
import { useRouter } from "next/navigation";
import React from "react";
import { BackgroundBeams } from "./_components/ui/background-beams";
import Hero from "./_components/hero";
import { Separator } from "@/components/ui/separator";
import Team from "./_components/team";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const HomePage = () => {
  const { data: forums } = useGetForums();

  const router = useRouter();

  return (
    <>
      <BackgroundBeams className="-z-40 opacity-80" />
      <Navbar />
      <Hero />
    </>
  );
};

export default HomePage;
