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
import DashboardStats from "../components/dashboard/DashboardStats";
import { RecentSales } from "../components/dashboard/RecentSales";
import Chart from "../components/dashboard/Chart";
import prisma from "../lib/db";

async function getData() {
  const now = new Date(); //new date
  const sevenDaysAgo = new Date(); //new date

  sevenDaysAgo.setDate(now.getDate() - 7); //calculate a week from now

  const data = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: sevenDaysAgo, //greater or equal than 7 days agop
      },
    },
    select: {
      amount: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const result = data.map((item) => ({
    date: new Intl.DateTimeFormat("en-UK").format(item.createdAt),
    revenue: item.amount / 100,
  }));

  return result;
}

export default async function Dashboard() {
  const data = await getData();
  return (
    <>
      <DashboardStats />

      <div
        className={"grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10"}
      >
        <Card className={"xl:col-span-2"}>
          <CardHeader>
            <CardTitle>Transaction</CardTitle>
            <CardDescription>Recent transactions</CardDescription>
          </CardHeader>

          <CardContent>
            <Chart data={data} />
          </CardContent>
        </Card>

        <RecentSales />
      </div>
    </>
  );
}
