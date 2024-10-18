import React, { useState } from "react";
import { useContactMemoryStore } from "../store/use-contact-memory-modal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactModal = () => {
  const [open, setOpen] = useContactMemoryStore();

  const [, setEmail] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    setEmail("");
    toast.success("Request sent successfully.");
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            minLength={1}
          />
          <div className="w-full flex justify-end items-center">
            <Button
              type="submit"
              className="mt-4 bg-blue-500 text-white hover:bg-blue-500/80 transition font-medium"
            >
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
