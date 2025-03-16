import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Url } from "@prisma/client";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { format } from "timeago.js";
import URLToggle from "./url-toggle";

type Props = {
  url: Url;
};

const BASE_URL = process.env.BASE_URL;

export default function MyURLsItem({
  url: { short, long, clicks, createdAt }
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
          <div className="space-x-1">
            <Button
              asChild
              size="icon"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <Link href={`/${short}`} target="_blank">
                <SquareArrowOutUpRight />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}
