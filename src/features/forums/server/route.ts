import { DATABASE_ID, FORUMS_ID, memberClient } from "@/lib/appwrite";
import { Hono } from "hono";
import { Databases } from "node-appwrite";

const app = new Hono()
  .get("/", async (c) => {
    const databases = new Databases(memberClient);

    const forums = await databases.listDocuments(DATABASE_ID, FORUMS_ID);

    if (forums.total === 0) {
      return c.json({
        data: {
          documents: [],
          total: 0,
        },
      });
    }

    return c.json({
      data: forums,
    });
  })
  .get("/:forumId", async (c) => {
    const { forumId } = c.req.param();

    const databases = new Databases(memberClient);

    const forum = await databases.getDocument(DATABASE_ID, FORUMS_ID, forumId);

    if (!forum) {
      return c.json({
        data: {
          documents: [],
          total: 0,
        },
      });
    }

    return c.json({
      data: forum,
    });
  });

export default app;
