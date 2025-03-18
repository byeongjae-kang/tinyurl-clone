"use client";

import SelectInput from "@/components/core/select-input";
import TextInput from "@/components/core/text-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { SelectItem } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Url } from "@prisma/client";
import { CircleX, Link2, Loader, WandSparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  long: z
    .string()
    .min(2, {
      message: "The URL field is required."
    })
    .url({
      message: "Invalid URL"
    }),
  domain: z.string().optional(),
  alias: z.string().optional()
});

type Props = {
  onSubmit: (long: Url["long"]) => void;
  isPending: boolean;
  error?: string;
};

export function URLForm({ onSubmit, isPending, error }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      long: "",
      domain: "tinyurl",
      alias: ""
    }
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values.long);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="long"
          render={({ field }) => (
            <FormItem className="gap-0 ">
              <FormLabel className="mb-4 text-base">
                <Link2 />
                <span>Shorten a long URL</span>
              </FormLabel>
              <FormControl className="mb-2 ">
                <TextInput placeholder="Enter long link here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem className="gap-0 ">
                <FormLabel className="mb-4 text-base">
                  <WandSparkles className="size-5" />
                  <span>Customize your link</span>
                </FormLabel>
                <FormControl>
                  <SelectInput placeholder="Select domain" {...field}>
                    <SelectItem value="tinyurl">tinyurl.com</SelectItem>
                  </SelectInput>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alias"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TextInput placeholder="Enter alias" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full p-6 text-base font-semibold rounded-xl">
          {isPending && <Loader />}
          {isPending ? "Shortening URL..." : "Shorten URL"}
        </Button>

        {error && (
          <p className="text-destructive flex gap-2 font-medium break-all">
            <CircleX /> <span>{error}</span>
          </p>
        )}
      </form>
    </Form>
  );
}
