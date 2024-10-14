import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";

import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ProductsPage() {
  return (
    <>
      <div className={"flex items-center justify-end"}>
        <Button className={"flex items-center gap-x-2"} asChild>
          <Link href={"/dashboard/products/create"}>
            <PlusCircle className={"w-5 h-5"} />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>

      <Card className={"mt-5"}>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Added on</TableHead>
                <TableHead className={"text-end"}>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <UserIcon className={"h-16 w-16"} />
                </TableCell>
                <TableCell>Nike Air</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>£199.99</TableCell>
                <TableCell>18-09-2024</TableCell>
                <TableCell className={"text-end "}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size={"icon"} variant={"ghost"}>
                        <MoreHorizontal className={"w-4 h-4"} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align={"end"}>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
