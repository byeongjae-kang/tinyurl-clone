import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { deleteURL } from "@/lib/actions/urls";
import { Url } from "@prisma/client";
import { format } from "timeago.js";
import ClipboardButton from "../core/clipboard-button";
import LinkButton from "../core/link-button";
import { DeleteURLDialog } from "./delete-url-dialog";
import URLToggle from "./url-toggle";

type Props = {
  url: Url;
};

const BASE_URL = process.env.BASE_URL;

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
            <DeleteURLDialog deleteAction={deleteURL.bind(null, id)} />
          </div>
        </CardContent>
      </Card>
    </li>
  );
}
