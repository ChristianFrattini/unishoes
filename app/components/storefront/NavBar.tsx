import Link from "next/link";
import React from "react";
import NavBarLinks from "./NavBarLinks";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { ShoppingBagIcon } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { Button } from "@/components/ui/button";

export default async function NavBar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav
      className={
        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between"
      }
    >
      <div className={"flex items-center"}>
        <Link href={"/"}>
          <h1 className={"text-black font-bold text-xl lg:text-3xl"}>
            Uni<span className={"text-primary"}>Shoes</span>
          </h1>
        </Link>
        <NavBarLinks />
      </div>
      <div className={"flex items-center"}>
        {user ? (
          <>
            <Link href={"/bag"} className={"group p-2 flex items-center mr-2"}>
              <ShoppingBagIcon
                className={
                  "h-6 w-6 text-gray-500 group-hover:text-gray-700 transition-all duration-300"
                }
              />
              <span
                className={
                  "ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                }
              >
                5
              </span>
            </Link>

            <UserDropdown
              email={user.email as string}
              name={user.given_name as string}
              userImage={
                user.picture ??
                `https://avatar.vercel.sh/rauchg${user.given_name}`
              }
            />
          </>
        ) : (
          <div
            className={
              "hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2"
            }
          >
            <Button variant={"secondary"} asChild>
              <LoginLink>Log In</LoginLink>
            </Button>
            <span className={"h-6 w-px bg-gray-200"}></span>
            <Button variant={"outline"} asChild>
              <RegisterLink>Sign Up</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
