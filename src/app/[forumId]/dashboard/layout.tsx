import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        {children}
      </SidebarProvider>
    </main>
  );
}
