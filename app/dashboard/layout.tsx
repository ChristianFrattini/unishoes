import React, { ReactNode } from "react";
import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleUserIcon, MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "chrifrat1@gmail.com") {
    redirect("/");
  }

  return (
    <div
      className={"flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}
    >
      <header
        className={
          "sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white"
        }
      >
        <nav
          className={
            "hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-lg lg:gap-6"
          }
        >
          <DashboardNavigation />
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              className={"shrink-0 md:hidden"}
              variant={"outline"}
              size={"icon"}
            >
              <MenuIcon className={"w-5 h-5"} />
            </Button>
          </SheetTrigger>

          <SheetContent side={"left"}>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Admin section</SheetDescription>
            <nav className={"grid gap-6 text-lg font-medium mt-7"}>
              <DashboardNavigation />
            </nav>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"secondary"}
              size={"icon"}
              className={"rounded-full"}
            >
              <CircleUserIcon className={"h-5 w-5"} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={"end"}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <LogoutLink>Log Out</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className={"my-5"}>{children}</main>
    </div>
  );
}
