"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  ShieldCheckIcon,
  ShieldHalfIcon,
  ShieldIcon,
  SwordsIcon,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Member = {
  memberName: string;
  memberRole: "SUPER_ADMIN" | "ADMIN" | "MODERATOR" | "MEMBER";
  linkedinId: string;
  emailId: string;
};

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "memberRole",
    header: () => <div className="">Member Role</div>,
    cell: ({ row }) => {
      if (row.getValue("memberRole") === "SUPER_ADMIN") {
        return (
          <div className="flex justify-start items-center gap-2 ">
            <SwordsIcon className="size-5 text-rose-500" />
            <p className="border text-xs bg-rose-500/20 w-[100px] text-center rounded-md px-1 font-semibold p-1">
              Super Admin
            </p>
          </div>
        );
      }
      if (row.getValue("memberRole") === "ADMIN") {
        return (
          <div className="flex justify-start items-center gap-2">
            <ShieldIcon className="size-5 text-blue-500" />
            <p className="border text-xs bg-blue-500/20 w-[100px] text-center rounded-md px-1 font-semibold p-1">
              Admin
            </p>
          </div>
        );
      }
      if (row.getValue("memberRole") === "MODERATOR") {
        return (
          <div className="flex justify-start items-center gap-2">
            <ShieldHalfIcon className="size-5 text-green-500" />
            <p className="border text-xs bg-green-500/20 w-[100px] text-center rounded-md px-1 font-semibold p-1">
              Moderator
            </p>
          </div>
        );
      }
      if (row.getValue("memberRole") === "MEMBER") {
        return (
          <div className="flex justify-start items-center gap-2">
            <ShieldCheckIcon className="size-5" />
            <p className="border text-xs bg-slate-500/20 w-[100px] text-center rounded-md px-1 font-semibold py-1">
              Member
            </p>
          </div>
        );
      }
    },
  },
  {
    accessorKey: "memberName",
    header: "Member Name",
  },
  {
    accessorKey: "linkedinId",
    header: "LinkedIn",
    cell: ({ row }) => {
      return (
        <a href={row.getValue("linkedinId")} target="_blank" className="">
          <FaLinkedin className="size-5 rounded-md hover:text-gray-400 transition-all" />
        </a>
      );
    },
  },
  {
    accessorKey: "emailId",
    header: "Email ID",
    cell: ({ row }) => {
      return <div>{row.getValue("emailId")}</div>;
    },
  },
];
