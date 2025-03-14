import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import MyURLsItem from "./my-urls-item";

export default async function MyURLSList() {
  const urls = await prisma.url.findMany({
    where: { userId: "1" },
    orderBy: { createdAt: "desc" }
  });

  return (
    <ul className="space-y-4">
      {urls.map((url) => (
        <MyURLsItem key={url.id} url={url} />
      ))}

      <li className="space-y-2 text-center">
        <p className="font-semibold">
          No {urls.length > 0 && "more"} recent URLs in your history
        </p>
        {urls.length > 0 && (
          <Button size="sm" variant="secondary">
            Clear History
          </Button>
        )}
      </li>
    </ul>
  );
}
