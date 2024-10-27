"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "All Products",
    href: "/products/all",
  },
  {
    id: 2,
    name: "Men",
    href: "/products/men",
  },
  {
    id: 3,
    name: "Women",
    href: "/products/women",
  },
  {
    id: 4,
    name: "Kids",
    href: "/products/kids",
  },
];

type NavBarLinksProps = {
  user?: {
    name: string;
    id: string;
  };
};

export default function NavBarLinks({ user }: NavBarLinksProps) {
  const location = usePathname();

  return (
    <>
      <div
        className={"hidden md:flex justify-center items-center gap-x-5 ml-11"}
      >
        {navbarLinks.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={cn(
              location === item.href
                ? "bg-muted "
                : "hover:bg-muted hover:bg-opacity-75",
              "group p-2 font-medium rounded-lg",
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className={"md:hidden w-[45%] flex justify-start"}>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetTitle>Welcome to UniShoes, {user?.name}</SheetTitle>
            <SheetDescription>
              Explore our wide range of products
            </SheetDescription>
            {navbarLinks.map((item) => (
              <SheetClose asChild key={item.id}>
                <Link
                  href={item.href}
                  key={item.id}
                  className={cn(
                    location === item.href
                      ? "bg-muted "
                      : "hover:bg-muted hover:bg-opacity-75",
                    "group p-2 font-medium rounded-lg flex flex-col mt-5 ",
                  )}
                >
                  {item.name}
                </Link>
              </SheetClose>
            ))}
            {!user && (
              <SheetFooter>
                <div className={"mt-10 flex flex-col gap-y-2 w-full"}>
                  <Button variant={"secondary"} asChild>
                    <LoginLink>Log In</LoginLink>
                  </Button>

                  <Button variant={"outline"} asChild>
                    <RegisterLink>Sign Up</RegisterLink>
                  </Button>
                </div>
              </SheetFooter>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
