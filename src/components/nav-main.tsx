"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    disabled?: boolean;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu className="gap-y-2">
        {items.map((item) => {
          const url = item.url.toLowerCase();
          const isActive = pathname.includes(url);

          return (
            <>
              {!item.disabled && (
                <Link href={item.url} key={item.url}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className={cn(
                        "h-10",
                        isActive && "bg-blue-600 hover:bg-blue-600"
                      )}
                      tooltip={item.title}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Link>
              )}
            </>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
