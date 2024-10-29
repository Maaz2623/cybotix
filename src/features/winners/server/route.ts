import { DATABASE_ID, memberClient, WINNERS_ID } from "@/lib/appwrite";
import { Hono } from "hono";
import { Databases, Query } from "node-appwrite";

const app = new Hono().get("/:eventId", async (c) => {
  const { eventId } = c.req.param();

  const databases = new Databases(memberClient);

  const winners = await databases.listDocuments(DATABASE_ID, WINNERS_ID, [
    Query.equal("eventId", eventId),
  ]);

  if (!winners) {
    return c.json({
      data: {
        documents: [],
        total: 0,
      },
    });
  }

  return c.json({
    data: winners,
  });
});

export default app;
