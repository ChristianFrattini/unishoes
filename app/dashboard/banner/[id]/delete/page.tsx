import { deleteBanner } from "@/app/actions";
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

export default function DeleteBannerPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you absolutely sure?</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete this
            banner and remove all data from our servers.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/banner"}>
              <ChevronLeft className={"h-4 w-4 mr-2"} /> Return to banners
            </Link>
          </Button>
          <form action={deleteBanner}>
            <input type="hidden" name="bannerId" value={params.id} />
            <SubmitButton
              variant="destructive"
              text="Delete Banner"
              loadingText={"Deleting Banner"}
            />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
