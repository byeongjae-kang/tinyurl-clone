import { colorText } from "@/lib/color-logger";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(
    colorText(
      "Seeding has started 🌱🌱🌱",
      "blue",
      "bold",
      "italic",
      "underline"
    )
  );

  const data = [
    {
      userId: "1",
      short: "123456",
      long: "https://nextjs.org/docs/app/getting-started/installation"
    },
    {
      userId: "1",
      short: "123453",
      long: "https://www.typescriptlang.org/"
    },
    {
      userId: "1",
      short: "123452",
      long: "https://www.google.ca/search?q=tinyurl&sca_esv=ea31d54ec92a42d9&sxsrf=AHTn8zrR_CCGA1PQWtFb1nDBuk7QA8qvDA%3A1741990985806&source=hp&ei=SazUZ7-OLpaC0PEP-J-38Q0&iflsig=ACkRmUkAAAAAZ9S6WZ87Gfg6bfejK5b4hlrRSCHSxHpT&ved=0ahUKEwj_1qGPzoqMAxUWATQIHfjPLd4Q4dUDCBo&uact=5&oq=tinyurl&gs_lp=Egdnd3Mtd2l6Igd0aW55dXJsMgoQIxiABBgnGIoFMgQQIxgnMgQQIxgnMg4QLhiABBixAxjRAxjHATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiZDVCnA1i6C3ABeACQAQCYAVCgAcgDqgEBN7gBA8gBAPgBAZgCCKAC2QOoAgrCAgcQIxgnGOoCwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAggQABiABBixA8ICCBAuGIAEGLEDwgIOEC4YgAQYxwEYjgUYrwHCAgsQABiABBixAxjJA8ICERAuGIAEGLEDGNEDGMcBGIoFwgIKEAAYgAQYFBiHApgDA_EFc3L5urj9dLiSBwE4oAf3UQ&sclient=gws-wiz"
    }
  ] satisfies Prisma.UrlCreateManyInput[];

  const result = await prisma.url.createMany({ data });

  console.log(
    colorText(
      `Successfully inserted ${result.count} records`,
      "green",
      "inverse"
    )
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
