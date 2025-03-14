import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <div>
      <Button className="bg-transparent size-10" size="icon" variant="outline">
        <Menu className="size-7" />
      </Button>
      <nav className="hidden">
        <ul>
          <li>
            <Link href="/my-urls">My URLs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
