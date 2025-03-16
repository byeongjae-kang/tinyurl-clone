"use server";

import { prisma } from "@/lib/prisma";
import { Url } from "@prisma/client";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const incrementClicks = async (id: Url["id"]) => {
  // otherwise, increment number of clicks and redirect user with the long url
  const url = await prisma.url.update({
    where: { id },
    data: { clicks: { increment: 1 } }
  });

  // need to be called after the initial render
  revalidatePath("/app/my-urls");

  redirect(url.long);
};
