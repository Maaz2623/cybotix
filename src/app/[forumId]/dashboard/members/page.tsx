/* eslint-disable @typescript-eslint/ban-ts-comment */
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
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { useForumId } from "@/features/forums/hooks/use-forum-id";
import { useGetMembers } from "@/features/members/api/use-get-members";

export default function MembersPage() {
  const forumId = useForumId();

  const { data: members, isLoading: membersLoading } = useGetMembers({
    forumId,
  });

  if (membersLoading) {
    return <p>Loading...</p>;
  }

  if (!members) {
    return <p>Error</p>;
  }

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href={`/dashboard/`}>Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Members</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="w-full">
        <p className="lg:text-3xl md:text-2xl sm:text-xl text-md font-semibold p-4">
          Our Team
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-2">
        <div className="min-h-[100vh] overflow-hidden flex-1 flex justify-center items-center rounded-xl bg-muted/50 md:min-h-min">
          {/* @ts-ignore */}
          <DataTable columns={columns} data={members?.documents} />
        </div>
      </div>
    </SidebarInset>
  );
}
