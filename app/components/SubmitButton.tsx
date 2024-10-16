"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Loader2Icon } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className={"mr-2 h-4 w-4 animate-spin"} /> Saving...{" "}
        </Button>
      ) : (
        <Button type={"submit"}> {text}</Button>
      )}
    </>
  );
}
