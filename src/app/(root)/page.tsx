"use client";
import React from "react";
import { BackgroundBeams } from "./_components/ui/background-beams";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import { GetForum } from "@/features/forums/actions/get-forum.action";

const HomePage = async () => {

  const forums = await GetForum()

  const forumId = forums?.documents[0].$id

  return (
    <>
      <BackgroundBeams className="-z-40 opacity-80" />
      <Navbar />
      <Hero forumId={forumId} />
    </>
  );
};

export default HomePage;
