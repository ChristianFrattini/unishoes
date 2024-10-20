"use client";

import { cn } from "@/lib/utils";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Banner Picture",
    href: "/dashboard/banner",
  },
];

export default function DashboardNavigation() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
