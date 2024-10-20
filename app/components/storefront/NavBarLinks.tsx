import Link from "next/link";
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
    id: 0,
    name: "Men",
    href: "/products/men",
  },
  {
    id: 3,
    name: "Women",
    href: "/products/women",
  },
];

export default function NavBarLinks() {
  return (
    <div className={"hidden md:flex justify-center items-center gap-x-5 ml-11"}>
      {navbarLinks.map((item) => (
        <Link href={item.href} key={item.id} className={"font-medium"}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
