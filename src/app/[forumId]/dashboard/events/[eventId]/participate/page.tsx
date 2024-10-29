"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import ParticipateForm from "./_components/participate-form";

const Page = () => {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();

  if (isLoaded && !userId) {
    return router.replace(`/sign-in`);
  }

  return <ParticipateForm userId={userId} />;
};

export default Page;
