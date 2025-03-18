import ClipboardButton from "@/components/core/clipboard-button";
import LinkButton from "@/components/core/link-button";

import { DeleteURLDialog } from "@/components/features/url/delete-url-dialog";
import URLToggle from "@/components/features/url/url-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { deleteURL } from "@/lib/actions/urls";
import { Url } from "@prisma/client";
import { Trash } from "lucide-react";
import { format } from "timeago.js";

type Props = {
  url: Url;
};

export const BASE_URL = process.env.BASE_URL;

export default function MyURLsItem({
  url: { id, short, long, clicks, createdAt }
}: Props) {
  return (
    <li>
      <Card className="p-4 rounded-sm">
        <CardContent className="px-0 space-y-1">
          <CardTitle className="">
            {BASE_URL}/{short}
          </CardTitle>
          <URLToggle url={long} />
          <div className="text-sm flex gap-4">
            <p>{clicks} clicks</p>
            <span className="border-l"></span>
            <p>{format(createdAt)}</p>
          </div>
          <div className="space-x-1 flex items-center">
            <LinkButton href={`/${short}`} />
            <ClipboardButton text={`${BASE_URL}/${short}`} />
            <DeleteURLDialog deleteAction={deleteURL.bind(null, id)}>
              <Button
                className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                variant="outline"
                size="icon"
              >
                <Trash className="size-5" />
              </Button>
            </DeleteURLDialog>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}
