/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { DataTable } from "./(participants)/data-table";
import { columns } from "./(participants)/columns";
import { useGetParticipants } from "@/features/participants/api/use-get-participants";
import { LoaderIcon } from "lucide-react";

const EventParticipants = ({ eventId }: { eventId: string }) => {
  const { data: participants, isLoading: participantsLoading } =
    useGetParticipants({ eventId });

  return (
    <div className="bg-muted/50 rounded-lg">
      {participantsLoading ? (
        <div className="w-full h-full flex justify-center gap-2 items-center p-10">
          <LoaderIcon className="size-5 animate-spin" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="md:w-full w-full overflow-hidden">
          {/* @ts-ignore */}
          <DataTable columns={columns} data={participants?.documents} />
        </div>
      )}
    </div>
  );
};

export default EventParticipants;
