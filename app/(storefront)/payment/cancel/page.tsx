import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CancelPaymentPage() {
  return (
    <section className={"w-full min-h-[80vh] flex items-center justify-center"}>
      <Card className={"w-[350px]"}>
        <div className={"p-6"}>
          <div className={"w-full flex justify-center"}>
            <XCircle
              className={
                "w-12 h-12 rounded-full bg-red-500/30 text-red-500 p-2"
              }
            />
          </div>
          <div className={"mt-3 text-center sm:mt-5 w-full"}>
            <h3 className={"text-lg leading-6 font-medium"}>
              Payment Cancelled
            </h3>
            <p className={"mt-2 text-sm  text-muted-foreground"}>
              Something went wrong with your payment. Please, try again.
            </p>

            <Button asChild className={"mt-4 w-full sm:mt-6"}>
              <Link href={"/bag"}>Return to the Shopping Bag</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
