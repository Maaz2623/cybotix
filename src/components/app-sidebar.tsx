"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Calendar,
  Command,
  Frame,
  GalleryVerticalEnd,
  Images,
  Map,
  PieChart,
  Users,
} from "lucide-react";

import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { useGetForum } from "@/features/forums/api/use-get-forum";
import { useForumId } from "@/features/forums/hooks/use-forum-id";
import { NavUser } from "./nav-user";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const forumId = useForumId();

  const { data: forum } = useGetForum({ forumId });

  console.log(forum);

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Overview",
        url: `/${forumId}/dashboard`,
        icon: BookOpen,
        disabled: true,
        isActive: false,
      },
      {
        title: "Gallery",
        url: `/${forumId}/dashboard/gallery`,
        icon: Images,
        disabled: true,
        isActive: false,
      },

      {
        title: "Events",
        url: `/${forumId}/dashboard/events`,
        icon: Calendar,
        isActive: false,
      },
      {
        title: "Members",
        url: `/${forumId}/dashboard/members`,
        icon: Users,
        isActive: false,
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  };
  return (
    <Sidebar collapsible="icon" variant="sidebar" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
