"use server";
import { DATABASE_ID, memberClient, PARTICIPANTS_ID } from "@/lib/appwrite";
import { auth } from "@clerk/nextjs/server";
import { Databases, ID } from "node-appwrite";

interface ParticipateProps {
  name: string;
  course: string;
  semester: string;
  studentId: string;
  phoneNumber: string;
  eventId: string;
}

export const participate = async ({
  name,
  course,
  semester,
  studentId,
  phoneNumber,
  eventId,
}: ParticipateProps) => {
  const { userId } = await auth();

  if (!userId) return null;

  const databases = new Databases(memberClient);

  const participant = await databases.createDocument(
    DATABASE_ID,
    PARTICIPANTS_ID,
    ID.unique(),
    {
      participantName: name,
      studentId,
      phoneNumber,
      course,
      semester,
      eventId,
      userId,
    }
  );

  if (participant) {
    return {
      success: true,
    };
  }
};
