import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Success() {
  return (
    <section className={"w-full min-h-[80vh] flex items-center justify-center"}>
      <Card className={"w-[350px]"}>
        <div className={"p-6"}>
          <div className={"w-full flex justify-center"}>
            <Check
              className={
                "w-12 h-12 rounded-full bg-green-500/30 text-red-green p-2"
              }
            />
          </div>
          <div className={"mt-3 text-center sm:mt-5 w-full"}>
            <h3 className={"text-lg leading-6 font-medium"}>
              Payment Confirmed
            </h3>
            <p className={"mt-2 text-sm  text-muted-foreground"}>
              Your product is on its way
            </p>

            <Button asChild className={"mt-4 w-full sm:mt-6"}>
              <Link href={"/"}>Return to the Homepage</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
