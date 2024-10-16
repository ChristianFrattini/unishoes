import { deleteProduct } from "@/app/actions";
import SubmitButton from "@/app/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Delete({ params }: { params: { id: string } }) {
  return (
    <div className={"h-[80vh] w-full flex items-center justify-center"}>
      <Card className={"max-w-xl"}>
        <CardHeader>
          <CardTitle> Are you sure?</CardTitle>
          <CardDescription>
            This action cannot be undone. This action will permanently delete
            this product and all its data from the database!
          </CardDescription>
        </CardHeader>
        <CardFooter className={"w-full flex justify-between"}>
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/products"}>
              <ChevronLeft className={"h-4 w-4 mr-2"} /> Return to products
            </Link>
          </Button>

          <form action={deleteProduct}>
            <input type={"hidden"} name={"productId"} value={params.id} />
            <SubmitButton
              loadingText={"DELETING"}
              text={"DELETE"}
              variant={"destructive"}
            />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
