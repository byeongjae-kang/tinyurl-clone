"use server";

import { prisma } from "@/lib/prisma";
import { createRandomString } from "@/lib/string/random";
import { Prisma, Url } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export type StateType = { message: string };
export type PayloadType = { long: Url["long"] };

export const createURL = async (state: StateType, { long }: PayloadType) => {
  const data = {
    userId: "1",
    short: createRandomString(),
    long
  } satisfies Prisma.UrlUncheckedCreateInput;

  try {
    await prisma.url.create({ data });

    revalidatePath("/app/my-urls");

    return state;
  } catch (err) {
    console.error(err);
    return {
      message: `Something has gone wrong while creating url, try again! `
    };
  }
};

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

export const deleteURL = async (id: Url["id"]) => {
  const url = await prisma.url.findUnique({ where: { id } });

  if (!url) {
    notFound();
  }

  await prisma.url.delete({ where: { id } });

  revalidatePath("/app/my-urls");
};

export const deleteAllURLs = async () => {
  await prisma.url.deleteMany({ where: { userId: "1" } });

  revalidatePath("/app/my-urls");
};
