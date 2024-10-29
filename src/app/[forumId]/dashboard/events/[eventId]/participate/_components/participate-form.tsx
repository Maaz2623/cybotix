"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createParticipantSchema } from "@/features/participants/schemas";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useEventId } from "@/features/events/hooks/use-event-id";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { participate } from "@/features/participants/actions/participate.action";
import { toast } from "sonner";
import { useForumId } from "@/features/forums/hooks/use-forum-id";

const ParticipateForm = ({ userId }: { userId: string | undefined }) => {
  const forumId = useForumId();
  const eventId = useEventId();

  const router = useRouter();

  const form = useForm<z.infer<typeof createParticipantSchema>>({
    resolver: zodResolver(createParticipantSchema),
    defaultValues: {
      name: "",
      course: "BCA",
      semester: "",
      studentId: "",
      phoneNumber: "",
      eventId: eventId,
      userId: userId,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof createParticipantSchema>) {
    try {
      const data = await participate({
        name: values.name,
        course: values.course,
        semester: values.semester,
        studentId: values.studentId,
        phoneNumber: values.phoneNumber,
        eventId: eventId,
      });
      router.push(`/${forumId}/dashboard/events/${eventId}/details`);
      if (!data?.success) {
        return toast.error("Already registered");
      }
      toast.success("Registered successfully");
    } catch (error) {
      toast.error("Some error occured");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen w-screen bg-black flex justify-center items-center flex-col border">
      <div className="bg-muted/50 lg:p-10 w-[300px] sm:w-[400px] md:w-[500px] rounded-lg p-5">
        <p className="w-full text-center items-center text-3xl font-semibold mb-4">
          Participate
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="mt-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        className="ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your enrolled course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="BCA">BCA</SelectItem>
                          <SelectItem value="BBA">BBA</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="semester"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Semester</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your current semester" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="studentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student ID</FormLabel>
                  <FormControl>
                    <Input
                      maxLength={10}
                      placeholder="e.g.23BCAJC###"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      maxLength={10}
                      placeholder="Enter your mobile number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm">
              If you are facing any issue registering, please{" "}
              <Link
                target="_blank"
                href={`https://docs.google.com/forms/d/e/1FAIpQLSfM6CMfekK90m9kpZjHEDrjo-eMNuJ5Dve2TFLLtVe78G-R6w/viewform?usp=sharing`}
                className="text-blue-500 cursor-pointer"
              >
                click here
              </Link>
            </p>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ParticipateForm;
