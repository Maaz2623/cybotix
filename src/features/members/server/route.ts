import { DATABASE_ID, memberClient, MEMBERS_ID } from "@/lib/appwrite";
import { Hono } from "hono";
import { Databases, Query } from "node-appwrite";

const app = new Hono().get("/:forumId", async (c) => {
  const { forumId } = c.req.param();

  const databases = new Databases(memberClient);

  const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
    Query.equal("forumId", forumId),
  ]);

  if (members.total === 0) {
    return c.json({
      data: {
        documents: [],
        total: 0,
      },
    });
  }

  return c.json({
    data: members
  })


});

export default app;
