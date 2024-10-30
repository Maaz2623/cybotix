"use client";
import { useForumId } from "@/features/forums/hooks/use-forum-id";
import { useGetParticipants } from "@/features/participants/api/use-get-participants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface EventCardProps {
  eventName: string;
  imageUrl: string;
  date: string;
  eventId: string;
  ended: boolean;
}

const EventCard = ({ imageUrl, date, eventId, ended }: EventCardProps) => {
  const forumId = useForumId();

  const { data: participants } = useGetParticipants({ eventId });

  console.log(participants);

  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push(`/${forumId}/dashboard/events/${eventId}/details`)
      }
      className="flex-shrink-0 relative overflow-hidden group cursor-pointer rounded-xl bg-muted/50 border w-full hover:-translate-y-1  transition-all hover:shadow-event hover:shadow-blue-500 hover:-translate-x-1"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt="image"
          width={500}
          height={200}
          className="h-full w-full object-cover bg-center group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      <div className="p-3 flex-grow">
        <div className="flex justify-between items-center">
          {!ended && (
            <div className="flex justify-center items-center w-fit gap-1">
              <div className="h-2 bg-blue-500 rounded-full w-2" />
              <p className="text-sm ">Completed</p>
            </div>
          )}
          <p className="text-[10px] truncate shrink-0 md:text-sm border px-1 h-6 flex justify-center items-center bg-white/20 rounded-md">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
