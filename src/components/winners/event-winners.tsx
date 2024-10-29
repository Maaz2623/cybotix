/* eslint-disable @typescript-eslint/ban-ts-comment */
import { columns } from "@/components/winners/columns";
import { DataTable } from "@/components/winners/data-table";
import { useGetWinners } from "@/features/winners/api/use-get-winners";
import { LoaderIcon, TriangleAlertIcon } from "lucide-react";
import React from "react";

const EventWinners = ({ eventId }: { eventId: string }) => {
  const { data: winners, isLoading: winnersLoading } = useGetWinners({
    eventId,
  });

  return (
    <div className="bg-muted/50 min-h-full rounded-lg">
      {winnersLoading ? (
        <div className="w-full h-full flex text-muted-foreground justify-center gap-2 items-center p-10">
          <LoaderIcon className="size-5 animate-spin" />
          <p>Loading...</p>
        </div>
      ) : winners?.total === 0 ? (
        <div className="w-full h-full flex justify-center text-muted-foreground gap-2 items-center p-10">
          <TriangleAlertIcon className="size-5" />
          <p className="">
            Either the winners have not been announced yet, or the event has not
            yet completed or begun
          </p>
        </div>
      ) : (
        // @ts-ignore
        <DataTable columns={columns} data={winners?.documents} />
      )}
    </div>
  );
};

export default EventWinners;
