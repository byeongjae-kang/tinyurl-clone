import { DeleteURLDialog } from "@/components/features/url/delete-url-dialog";
import MyURLsItem from "@/components/features/url/my-urls-item";
import { Button } from "@/components/ui/button";
import { deleteAllURLs } from "@/lib/actions/urls";
import { prisma } from "@/lib/prisma";

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
          <DeleteURLDialog deleteAction={deleteAllURLs}>
            <Button size="sm" variant="secondary">
              Clear History
            </Button>
          </DeleteURLDialog>
        )}
      </li>
    </ul>
  );
}
