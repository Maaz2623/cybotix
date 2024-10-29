"use client";
import { useParams } from "next/navigation";

export const useEventId = () => {
  const { eventId } = useParams();

  return eventId as string;
};
