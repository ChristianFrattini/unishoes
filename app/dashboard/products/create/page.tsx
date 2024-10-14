"use client";

import { UploadDropzone } from "@/app/lib/uploadthing";
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
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CreateProduct() {
  return (
    <form>
      <div className={" flex items-center gap-4"}>
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/dashboard/products"}>
            <ChevronLeft className={"h-4 w-4"} />
          </Link>
        </Button>

        <h1 className={"text-xl font-semibold tracking-tight"}>
          Add a new product
        </h1>
      </div>

      <Card className={"mt-5"}>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            Please, fill in the form and save to add new product.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className={"flex flex-col gap-6"}>
            <div className={"flex flex-col gap-3"}>
              <Label>Name</Label>
              <Input
                type={"text"}
                className={"w-full"}
                placeholder={"Enter the name of the new product"}
              />
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Description</Label>
              <Textarea
                className={"w-full"}
                placeholder={"Enter the description of the new product"}
              />
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Price</Label>
              <Input
                type={"number"}
                className={"w-full"}
                placeholder={"Enter the price of the new product"}
              />
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Featured Product</Label>
              <Switch />
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={"Select Status"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={"draft"}>Draft </SelectItem>
                  <SelectItem value={"published"}>Published </SelectItem>
                  <SelectItem value={"archived"}>Archived </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className={"flex flex-col gap-3"}>
              <Label>Images</Label>
              <UploadDropzone
                endpoint={"imageUploader"}
                onClientUploadComplete={(res) => {
                  alert("Uploading Successfull");
                }}
                onUploadError={(res) => {
                  alert("Error: Upload Unsuccessfull");
                }}
              />
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button>Save Product</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
