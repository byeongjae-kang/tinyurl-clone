import { Url } from "@/components/features/my-urls-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import { format } from "timeago.js";

type Props = {
  url: Url;
};

export default function MyURLsItem({
  url: { short, long, clicks, createdAt }
}: Props) {
  return (
    <li>
      <Card className="p-4 rounded-sm">
        <CardContent className="px-0 space-y-1">
          <CardTitle className="">{short}</CardTitle>
          <p className="text-sm text-primary break-all line-clamp-2">{long}</p>
          <div className="text-sm flex gap-4">
            <p>{clicks} clicks</p>
            <span className="border-l"></span>
            <p>{format(createdAt)}</p>
          </div>
          <div className="space-x-1">
            <Button
              size="icon"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <SquareArrowOutUpRight />
            </Button>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}
