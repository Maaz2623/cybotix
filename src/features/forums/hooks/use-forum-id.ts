"use client";
import { useParams } from "next/navigation";

export const useForumId = () => {
  const { forumId } = useParams();

  return forumId as string;
};
