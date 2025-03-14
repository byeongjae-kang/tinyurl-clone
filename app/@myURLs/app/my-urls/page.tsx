import MyURLsSheet from "@/components/features/my-urls-sheet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

export default function MyURLs() {
  return (
    <MyURLsSheet>
      <div className="px-4  space-y-4">
        <Button
          variant="outline"
          className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
        >
          Get Full Detailed Stats
        </Button>
        <ul className="space-y-4">
          <li>
            <Card className="p-4 rounded-sm">
              <CardContent className="px-0 space-y-1">
                <CardTitle className="">tinyurl.com/2v6k6pnt</CardTitle>
                <p className="text-sm text-primary break-all line-clamp-2">
                  https://www.google.com/search?q=tinyurl&oq=tinyurl&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgYIARBFGDwyFggCEC4YxwEYkQIYsQMY0QMYgAQYigUyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDIyOWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8
                </p>
                <div className="text-sm flex gap-4">
                  <p>Tracking Disabled</p>
                  <span className="border-l"></span>
                  <p>5 hours ago</p>
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
          <li>
            <Card className="p-4 rounded-sm">
              <CardContent className="px-0 space-y-1">
                <CardTitle className="">tinyurl.com/2v6k6pnt</CardTitle>
                <p className="text-sm text-primary break-all line-clamp-2">
                  https://www.google.com/search?q=tinyurl&oq=tinyurl&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgYIARBFGDwyFggCEC4YxwEYkQIYsQMY0QMYgAQYigUyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDIyOWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8
                </p>
                <div className="text-sm flex gap-4">
                  <p>Tracking Disabled</p>
                  <span className="border-l"></span>
                  <p>5 hours ago</p>
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

          <li className="space-y-2 text-center">
            <p className="font-semibold">No more recent URLs in your history</p>
            <Button size="sm" variant="secondary">
              Clear History
            </Button>
          </li>
        </ul>
      </div>
    </MyURLsSheet>
  );
}
