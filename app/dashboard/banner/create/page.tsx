"use client";

import { createBanner, createProduct } from "@/app/actions";
import SubmitButton from "@/app/components/SubmitButton";
import prisma from "@/app/lib/db";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { bannerSchema } from "@/app/lib/zodSchemas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useFormState } from "react-dom";

export default function CreateBannerPage() {
  const [image, setImage] = useState<string | undefined>(undefined);

  const [lastResult, action] = useFormState(createBanner, undefined);

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className={"flex items-center gap-x-4"}>
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href="/dashboard/products">
            <ChevronLeft className={"w-4 h-4"} />
          </Link>
        </Button>
        <h1 className={"text-xl font-semibold tracking-tight"}>
          Create new Banner
        </h1>
      </div>

      <Card className={"mt-5"}>
        <CardHeader>
          <CardTitle>Create a new Banner</CardTitle>
          <CardDescription>
            Create a new banner by filling the form below...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className={"flex flex-col gap-y-6"}>
            <div className={"flex flex-col gap-3"}>
              <Label>Name</Label>
              <Input
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={fields.title.initialValue}
                type={"text"}
                placeholder={"Banner name..."}
              />
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.title.errors}
              </p>
            </div>
            <div className={"flex flex-col gap-3"}>
              <Label>Image</Label>
              <input
                type={"hidden"}
                value={image}
                name={fields.imageString.name}
                key={fields.imageString.key}
                defaultValue={fields.imageString.initialValue}
              />
              {image !== undefined ? (
                <Image
                  src={image}
                  alt={"banner_image"}
                  width={200}
                  height={200}
                  className={
                    "w-[200px] h-[200px] object-cover border rounded-lg"
                  }
                />
              ) : (
                <UploadDropzone
                  onClientUploadComplete={(res) => {
                    setImage(res[0].url);
                  }}
                  onUploadError={() => {
                    alert("Something went wrong");
                  }}
                  endpoint={"bannerUploader"}
                />
              )}
              <p className={"text-red-500 text-muted-foreground"}>
                {fields.imageString.errors}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text={"Create Banner"} loadingText={"Saving"} />
        </CardFooter>
      </Card>
    </form>
  );
}
