import { z } from "zod";

export const createParticipantSchema = z.object({
    name: z.string().min(1, "Required"),
    course: z.string().min(1, "Required"),
    semester: z.string().min(1, "Required"),
    studentId: z.string().min(1, "Required"),
    phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(10, "Phone number must be at most 10 digits"),
    eventId: z.string(),
    userId: z.string(),
  });