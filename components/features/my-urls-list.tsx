import { Button } from "@/components/ui/button";
import MyURLsItem from "./my-urls-item";

// TODO: replace with real data
const URLS = [
  {
    id: 0,
    userId: "1",
    short: "tinyurl.com/2v6k6pnt",
    long: "https://www.google.com/search?q=tinyurl&oq=tinyurl&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgYIARBFGDwyFggCEC4YxwEYkQIYsQMY0QMYgAQYigUyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDIyOWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8",
    clicks: 0,
    createdAt: new Date()
  },
  {
    id: 1,
    userId: "1",
    short: "tinyurl.com/2v6k6pnt",
    long: "https://www.google.com/search?q=tinyurl&oq=tinyurl&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgYIARBFGDwyFggCEC4YxwEYkQIYsQMY0QMYgAQYigUyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDIyOWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8",
    clicks: 0,
    createdAt: new Date()
  },
  {
    id: 2,
    userId: "1",
    short: "tinyurl.com/2v6k6pnt",
    long: "https://www.google.com/search?q=tinyurl&oq=tinyurl&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgYIARBFGDwyFggCEC4YxwEYkQIYsQMY0QMYgAQYigUyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDIyOWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8",
    clicks: 0,
    createdAt: new Date()
  },
  {
    id: 3,
    userId: "1",
    short: "tinyurl.com/2v6k6pnt",
    long: "https://www.google.com/search?q=tinyurl&oq=tinyurl&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgYIARBFGDwyFggCEC4YxwEYkQIYsQMY0QMYgAQYigUyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDIyOWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8",
    clicks: 0,
    createdAt: new Date()
  }
];

// TODO: replace with the official type
export type Url = (typeof URLS)[number];

export default function MyURLSList() {
  return (
    <ul className="space-y-4">
      {URLS.map((url) => (
        <MyURLsItem key={url.id} url={url} />
      ))}

      <li className="space-y-2 text-center">
        <p className="font-semibold">
          No {URLS.length > 0 && "more"} recent URLs in your history
        </p>
        {URLS.length > 0 && (
          <Button size="sm" variant="secondary">
            Clear History
          </Button>
        )}
      </li>
    </ul>
  );
}
