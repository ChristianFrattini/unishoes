"use client";

import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBagIcon } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

interface buttonProps {
  text: string;
  loadingText: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export default function SubmitButton({
  text,
  loadingText,
  variant,
}: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className={"mr-2 h-4 w-4 animate-spin"} /> {loadingText}...{" "}
        </Button>
      ) : (
        <Button variant={variant} type={"submit"}>
          {text}
        </Button>
      )}
    </>
  );
}

export function ShoppingBagButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button size={"lg"} disabled className={"w-full mt-5"}>
          <Loader2 className={"mr-4 h-5 w-5 animate-spin"} /> Adding to Cart...
        </Button>
      ) : (
        <Button size={"lg"} className={"w-full mt-5"} type={"submit"}>
          <ShoppingBagIcon className={"mr-4 h-5 w-5"} /> Add To Cart
        </Button>
      )}
    </>
  );
}

export function DeleteItem() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button disabled className={"font-medium text-primary text-end"}>
          Removing...
        </button>
      ) : (
        <button type={"submit"} className={"font-medium text-primary text-end"}>
          Remove
        </button>
      )}
    </>
  );
}

export function CheckoutButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button size={"lg"} disabled className={"w-full mt-5"}>
          <Loader2 className={"mr-2 h-5 w-5 animate-spin"} /> Redirecting to
          payment...
        </Button>
      ) : (
        <Button size={"lg"} className={"w-full mt-5"} type={"submit"}>
          Checkout
        </Button>
      )}
    </>
  );
}
