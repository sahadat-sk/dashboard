import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideNav } from "@/components/ui/navbar";
import { NavBarMobile } from "@/components/ui/navbarMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
          <SideNav />
          <div className="flex flex-col ">
            <NavBarMobile />
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6  md:justify-center ">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
