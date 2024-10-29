import {
  adminclient,
  DATABASE_ID,
  memberClient,
  PARTICIPANTS_ID,
} from "@/lib/appwrite";
import { Hono } from "hono";
import { Databases, ID, Query } from "node-appwrite";
import { zValidator } from "@hono/zod-validator";
import { currentUser } from "@clerk/nextjs/server";
import { createParticipantSchema } from "../schemas";

const app = new Hono()
  .get("/", async (c) => {
    const databases = new Databases(memberClient);
    const participants = await databases.listDocuments(
      DATABASE_ID,
      PARTICIPANTS_ID
    );

    if (participants.total === 0) {
      return c.json({
        data: {
          documents: [],
          total: 0,
        },
      });
    }

    return c.json({
      data: participants,
    });
  })
  .get("/:eventId", async (c) => {
    const { eventId } = c.req.param();
    const databases = new Databases(adminclient);
    const participants = await databases.listDocuments(
      DATABASE_ID,
      PARTICIPANTS_ID,
      [Query.equal("eventId", eventId)]
    );

    if (!participants) {
      return c.json({
        data: {
          documents: [],
          total: 0,
        },
      });
    }

    return c.json({
      data: participants,
    });
  })
  .post("/create", zValidator("form", createParticipantSchema), async (c) => {
    const databases = new Databases(adminclient);

    const user = await currentUser();

    if (!user) {
      return c.json({
        data: null,
      });
    }

    const { name, studentId, phoneNumber, course, semester, eventId, userId } =
      c.req.valid("form");

    
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

    return c.json({
      data: participant,
    });
  });

export default app;
