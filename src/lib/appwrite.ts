import "server-only";
import { Client } from "node-appwrite";

export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
export const FORUMS_ID = process.env.NEXT_PUBLIC_APPWRITE_FORUMS_ID!;
export const EVENTS_ID = process.env.NEXT_PUBLIC_APPWRITE_EVENTS_ID!;
export const WINNERS_ID = process.env.NEXT_PUBLIC_APPWRITE_WINNERS_ID!;
export const MEMBERS_ID = process.env.NEXT_PUBLIC_APPWRITE_MEMBERS_ID!;
export const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT!;
export const ENDPOINT_ID = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;
export const PARTICIPANTS_ID =
  process.env.NEXT_PUBLIC_APPWRITE_PARTICIPANTS_ID!;

export const adminclient = new Client()
  .setEndpoint(ENDPOINT_ID)
  .setProject(PROJECT_ID)
  .setKey(process.env.NEXT_APPWRITE_SUPER_ADMIN_KEY!);

export const memberClient = new Client()
  .setEndpoint(ENDPOINT_ID)
  .setProject(PROJECT_ID)
  .setKey(process.env.NEXT_APPWRITE_MEMBER_KEY!);
