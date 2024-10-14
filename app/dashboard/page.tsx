import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PartyPopper,
  PoundSterlingIcon,
  ShoppingBag,
  User2,
} from "lucide-react";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className={"grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4"}>
        <Card>
          <CardHeader
            className={"flex flex-row items-center justify-between pb-2"}
          >
            <CardTitle>Total Revenue</CardTitle>
            <PoundSterlingIcon className={"h-4 w-4 text-blue-800"} />
          </CardHeader>
          <CardContent>
            <p className={"text-2xl font-bold"}>$1000.00</p>
            <p className={"text-xs text-muted-foreground"}>
              Based on 100 Charges
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader
            className={"flex flex-row items-center justify-between pb-2"}
          >
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className={"h-4 w-4 text-red-800"} />
          </CardHeader>
          <CardContent>
            <p className={"text-2xl font-bold"}>+50</p>
            <p className={"text-xs text-muted-foreground"}>
              Total sales on UniShoes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader
            className={"flex flex-row items-center justify-between pb-2"}
          >
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className={"h-4 w-4 text-indigo-800"} />
          </CardHeader>
          <CardContent>
            <p className={"text-2xl font-bold"}>78</p>
            <p className={"text-xs text-muted-foreground"}>
              Total products created
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader
            className={"flex flex-row items-center justify-between pb-2"}
          >
            <CardTitle>Total Users</CardTitle>
            <User2 className={"h-4 w-4 text-orange-800"} />
          </CardHeader>
          <CardContent>
            <p className={"text-2xl font-bold"}>100</p>
            <p className={"text-xs text-muted-foreground"}>
              Total users registered
            </p>
          </CardContent>
        </Card>
      </div>

      <div
        className={"grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10"}
      >
        <Card className={"xl:col-span-2"}>
          <CardHeader>
            <CardTitle>Transaction</CardTitle>
            <CardDescription>Recent transactions</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>Recent sales</CardDescription>
          </CardHeader>
          <CardContent className={"flex flex-col gap-8"}>
            <div className={"flex items-center gap-4"}>
              <Avatar className={"hidden sm:flex h-9 w-9"}>
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className={"grid gap-1"}>
                <p className={"text-sm font-medium"}>Fallback Avatar</p>
                <p className={"text-sm text-muted-foreground"}>
                  email@email.com
                </p>
              </div>
              <p className={"ml-auto font-medium"}>+£199.99</p>
            </div>

            <div className={"flex items-center gap-4"}>
              <Avatar className={"hidden sm:flex h-9 w-9"}>
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className={"grid gap-1"}>
                <p className={"text-sm font-medium"}>Fallback Avatar</p>
                <p className={"text-sm text-muted-foreground"}>
                  email@email.com
                </p>
              </div>
              <p className={"ml-auto font-medium"}>+£199.99</p>
            </div>

            <div className={"flex items-center gap-4"}>
              <Avatar className={"hidden sm:flex h-9 w-9"}>
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className={"grid gap-1"}>
                <p className={"text-sm font-medium"}>Fallback Avatar</p>
                <p className={"text-sm text-muted-foreground"}>
                  email@email.com
                </p>
              </div>
              <p className={"ml-auto font-medium"}>+£199.99</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
