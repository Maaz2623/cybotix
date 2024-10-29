/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import * as React from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { useGetForum } from "@/features/forums/api/use-get-forum";
import { useForumId } from "@/features/forums/hooks/use-forum-id";

export function TeamSwitcher() {
  const forumId = useForumId();

  const { data: forum, isLoading: forumLoading } = useGetForum({ forumId });

  if (forumLoading) {
    return <p>Loading</p>;
  }

  if (!forum) {
    return <p>Error</p>;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem className="">
        {forumLoading ? (
          <Skeleton className="data-[state=open]:bg-sidebar-accent h-12 bg-white/35 data-[state=open]:text-sidebar-accent-foreground border" />
        ) : (
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-white/5"
          >
            <div className="flex aspect-square size-8 relative items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <Image
                // @ts-ignore
                src={forum?.imageUrl}
                alt="image"
                fill
                className="rounded-lg"
              />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              {/* @ts-ignore */}
              <span className="truncate font-semibold">{forum?.forumName}</span>
              <span className="truncate text-xs">Forum</span>
            </div>
          </SidebarMenuButton>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
