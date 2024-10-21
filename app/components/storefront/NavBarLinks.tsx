"use client";
import { cn } from "@/lib/utils";
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

export default function NavBarLinks() {
  const location = usePathname();
  return (
    <div className={"hidden md:flex justify-center items-center gap-x-5 ml-11"}>
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
  );
}
