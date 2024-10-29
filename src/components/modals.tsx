"use client";

import CreateParticipantModal from "@/features/participants/components/create-participant-modal";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!userId) {
    return null;
  }

  return (
    <>
      <CreateParticipantModal userId={userId} />
    </>
  );
};
