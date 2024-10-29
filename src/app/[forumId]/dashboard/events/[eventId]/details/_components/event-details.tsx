/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventOverView from "./event-overview";
import EventRules from "./event-rules";
import EventParticipants from "./event-participants";
import EventWinners from "../../../../../../../components/winners/event-winners";
import { useGetEvent } from "@/features/events/api/use-get-event";
import { useEventId } from "@/features/events/hooks/use-event-id";

const EventDetails = () => {
  const eventDetailTabs = [
    {
      name: "Overview",
    },
    {
      name: "Rules",
    },
    {
      name: "Participants",
    },
    {
      name: "Winners",
    },
  ];

  const eventId = useEventId();

  const { data: event } = useGetEvent({ eventId });

  console.log(event);

  return (
    <div className="h-full flex flex-col p-1">
      <Tabs
        defaultValue="Overview"
        className="rounded-none h-full overflow-hidden"
      >
        <TabsList className="w-full flex bg-transparent p-0 gap-3 rounded-none border-b">
          {eventDetailTabs.map((tab) => (
            <TabsTrigger key={tab.name} className="" value={tab.name}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent className="h-full rouned-lg" value="Overview">
          {/* @ts-expect-error */}
          <EventOverView overview={event?.eventOverview} />
        </TabsContent>
        <TabsContent className="h-full rouned-lg" value="Rules">
          {/* /eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <EventRules rules={event?.eventRules} />
        </TabsContent>
        <TabsContent value="Participants" className="w-full rouned-lg">
          <EventParticipants eventId={eventId} />
        </TabsContent>
        <TabsContent value="Winners" className="w-full rouned-lg">
          <EventWinners eventId={eventId} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventDetails;
