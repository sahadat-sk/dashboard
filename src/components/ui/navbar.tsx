"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  Palette,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
export function SideNav() {
  const pathname = usePathname();
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="">YourNextHire.ai</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary",
                pathname == "/"
                  ? "bg-muted text-primary"
                  : "text-muted-foreground"
              )}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/themes"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary",
                pathname == "/themes"
                  ? "bg-muted text-primary"
                  : "text-muted-foreground"
              )}
            >
              <Palette className="h-4 w-4" />
              Themes
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Products{" "}
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
