import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { JotaiProvider } from "@/components/jotai-provider";
import { Modals } from "@/components/modals";
import { Toaster } from "@/components/ui/sonner";
import {dark} from '@clerk/themes'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cybotixx",
  description: "Join events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
      layout: {
        unsafe_disableDevelopmentModeWarnings: true
      }
    }}>
      <html lang="en">
        <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <QueryProvider>
              <JotaiProvider>
                <Modals />
                <Toaster />
                {children}
              </JotaiProvider>
            </QueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
