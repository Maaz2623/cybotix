"use server";

import { DATABASE_ID, FORUMS_ID, memberClient } from "@/lib/appwrite";
import { Databases } from "node-appwrite";

export const GetForum = async () => {
  try {
    const databases = new Databases(memberClient);

    const forums = await databases.listDocuments(DATABASE_ID, FORUMS_ID);

    if (forums.total === 0) {
      return {
        documents: []
      }
    }

    return forums

  } catch (error) {
    console.log(error)
  }
};
