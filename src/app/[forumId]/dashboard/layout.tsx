import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen relative">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        {children}
      </SidebarProvider>
      <div className="md:hidden block absolute top-4 right-4 z-40">
        <UserButton />
      </div>
    </main>
  );
}
