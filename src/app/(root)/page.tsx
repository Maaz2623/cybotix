"use client";
import React from "react";
import { BackgroundBeams } from "./_components/ui/background-beams";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import { useGetForums } from "@/features/forums/api/use-get-forums";

const HomePage = () => {

  const { data: forums } = useGetForums();

  const firstForumId = forums?.documents[0].$id

  return (
    <>
      <BackgroundBeams className="-z-40 opacity-80" />
      <Navbar />
      <Hero forumId={firstForumId} />
    </>
  );
};

export default HomePage;
