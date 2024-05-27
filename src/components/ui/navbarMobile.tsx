"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Palette,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function NavBarMobile() {
  const pathname = usePathname();
  return (
    <header className="flex h-14 items-center gap-4 justify-between pt-2 px-4 lg:h-[60px] lg:px-6 w-[100vw] md:w-auto">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col w-[90vw]">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/"
              className={cn(
                "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ",
                pathname == "/"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="/themes"
              className={cn(
                "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ",
                pathname == "/themes"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Palette />
              Themes
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Package className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Users className="h-5 w-5" />
              Customers
            </Link>
            <Link
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <p className="text-xl font-bold">Hey, Kushagra</p>
      <div className="flex gap-2 lg:bg-muted px-4 py-2 items-center rounded-md">
        <p className="hidden lg:block">Kushagra Singh</p>
        <div className="h-5 w-5 rounded-full bg-foreground/20 " />
      </div>
    </header>
  );
}
