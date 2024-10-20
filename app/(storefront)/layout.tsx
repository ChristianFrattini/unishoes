import { type ReactNode } from "react";
import NavBar from "../components/storefront/NavBar";

export default function StoreFrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <NavBar />

      <main className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        {children}
      </main>
    </>
  );
}
