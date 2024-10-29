"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { useGetEvents } from "@/features/events/api/use-get-events";
import { useForumId } from "@/features/forums/hooks/use-forum-id";
import EventCard from "./_components/event-card";
import { format } from "date-fns";

export default function Page() {
  const forumId = useForumId();

  const { data: events, isLoading: eventsLoading } = useGetEvents({ forumId });

  if (eventsLoading) {
    return <p>Loading</p>;
  }

  if (events?.total === 0) {
    return <p>No Events in this forum</p>;
  }

  return (
    <SidebarInset className="shrink-0">
      <header className="flex px-4 h-16 justify-between items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard/overview">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Events</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="w-full">
        <p className="lg:text-3xl md:text-2xl sm:text-xl text-md font-semibold p-4">
          Explore Our Events
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 sm:grid-cols-2  h-full rounded-lg md:grid-cols-4">
          {events?.documents.map((event) => {
            const formattedDate = format(event.eventDate, "dd, MMM, yyyy, h a");
            return (
              <EventCard
                eventName={event.eventName}
                imageUrl={event.imageUrl}
                date={formattedDate}
                key={event.$id}
                eventId={event.$id}
                ended={false}
              />
            );
          })}
        </div>
      </div>
    </SidebarInset>
  );
}
