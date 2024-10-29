"use client";
import React from "react";
import { useCreateParticipantModal } from "../store/use-create-participant-modal";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useCreateParticipant } from "../api/use-create-participant";
import { useEventId } from "@/features/events/hooks/use-event-id";
import { createParticipantSchema } from "../schemas";

const CreateParticipantModal = ({ userId }: { userId: string }) => {
  const eventId = useEventId();
  const { mutate: participate, isPending } = useCreateParticipant();

  const [open, setOpen] = useCreateParticipantModal();
  // 1. Define your form.
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

  const handleClose = () => {
    setOpen(false);
  };

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof createParticipantSchema>) {
    participate(
      {
        form: values,
      },
      {
        onSuccess: async () => {
          setOpen(false);
          form.reset();
        },
      }
    );
    console.log(values)
  }

  return (
    <AlertDialog open={open} onOpenChange={handleClose}>
      <AlertDialogContent className="w-full h-[fit-content]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">
            Confirm Participation
          </AlertDialogTitle>
        </AlertDialogHeader>
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
                        disabled={isPending}
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
                        disabled={isPending}
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
                        disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
            <AlertDialogFooter className="">
              <AlertDialogCancel disabled={isPending} className="">
                Cancel
              </AlertDialogCancel>
              <Button type="submit" className="">
                Confirm Participation
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateParticipantModal;
