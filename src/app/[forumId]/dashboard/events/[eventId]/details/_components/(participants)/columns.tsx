"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Participant = {
  participantName: string;
  phoneNumber: string;
  course: string;
  semester: string;
  studentId: string;
};

export const columns: ColumnDef<Participant>[] = [
  {
    accessorKey: "participantName",
    header: "Name",
  },
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "semester",
    header: "Semester",
  },
  {
    accessorKey: "studentId",
    header: "Student ID",
  },
];
