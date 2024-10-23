import { checkOut, delItem } from "@/app/actions";
import { CheckoutButton, DeleteItem } from "@/app/components/SubmitButton";
import { Cart } from "@/app/lib/interfaces";
import { redis } from "@/app/lib/redis";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function BagPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  const cart: Cart | null = await redis.get(`cart-${user.id}`);

  let totalPrice = 0;

  cart?.items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  return (
    <div className={"max-w-2xl mx-auto min-h-[55vh] mt-10"}>
      {!cart || !cart.items ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center mt-20">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <ShoppingBag className="w-10 h-10 text-primary" />
          </div>

          <h2 className="mt-6 text-xl font-semibold">
            You dont have any products in your Bag
          </h2>
          <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
            You currently dont have any products in your shopping bag.
          </p>

          <Button asChild>
            <Link href="/">Shop Now!</Link>
          </Button>
        </div>
      ) : (
        <div className={"flex flex-col gap-y-8 "}>
          {cart?.items.map((item) => (
            <div key={item.id} className={"flex  rounded-lg p-3 border-2"}>
              <div className={"w-24 h-24 sm:w-32 sm:h-32 relative"}>
                <Image
                  alt={"product_image"}
                  src={item.imageString}
                  fill
                  className={"object-cover rounded-md"}
                />
              </div>
              <div className={"ml-5 flex justify-between w-full font-medium"}>
                <p>{item.name}</p>
                <div className={"flex flex-col h-full justify-between"}>
                  <div className={"flex items-center gap-x-2"}>
                    <p>{item.quantity} x</p>

                    <p>£{item.price}</p>
                  </div>
                  <form action={delItem} className={"text-end"}>
                    <input type="hidden" name={"productId"} value={item.id} />
                    <DeleteItem />
                  </form>
                </div>
              </div>
            </div>
          ))}

          <div className={"mt-10"}>
            <div className={"flex items-center justify-between font-medium"}>
              <p>Subtotal:</p>
              <p>£{new Intl.NumberFormat("en-US").format(totalPrice)}</p>
            </div>
            <form action={checkOut}>
              <CheckoutButton />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
