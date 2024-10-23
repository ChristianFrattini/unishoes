import prisma from "@/app/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PartyPopper,
  PoundSterlingIcon,
  ShoppingBag,
  User2,
} from "lucide-react";
import React from "react";

async function getData() {
  const [user, products, order] = await Promise.all([
    prisma.user.findMany({
      select: {
        id: true,
      },
    }),
    prisma.product.findMany({
      select: {
        id: true,
      },
    }),

    prisma.order.findMany({
      select: {
        amount: true,
      },
    }),
  ]);

  return { user, products, order };
}

export default async function DashboardStats() {
  const { user, products, order } = await getData();

  const totalAmount = order.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);
  return (
    <div className={"grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4"}>
      <Card>
        <CardHeader
          className={"flex flex-row items-center justify-between pb-2"}
        >
          <CardTitle>Total Revenue</CardTitle>
          <PoundSterlingIcon className={"h-4 w-4 text-blue-800"} />
        </CardHeader>
        <CardContent>
          <p className={"text-2xl font-bold"}>
            £{new Intl.NumberFormat("en-UK").format(totalAmount / 100)}
          </p>
          <p className={"text-xs text-muted-foreground"}>
            Based on {order.length} Charges
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
          <p className={"text-2xl font-bold"}>{order.length}</p>
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
          <p className={"text-2xl font-bold"}>{products.length}</p>
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
          <p className={"text-2xl font-bold"}>{user.length}</p>
          <p className={"text-xs text-muted-foreground"}>
            Total users registered
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
