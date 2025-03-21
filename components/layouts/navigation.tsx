import Link from "next/link";
import { SheetClose } from "../ui/sheet";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/app/my-urls", label: "My URLs" }
];

export default function Navigation() {
  return (
    <nav>
      <ul>
        {NAV_ITEMS.map(({ href, label }) => (
          <li key={href}>
            <SheetClose asChild>
              <Link
                className="block px-4 py-2 font-semibold hover:text-secondary/80 hover:bg-secondary/5"
                href={href}
              >
                {label}
              </Link>
            </SheetClose>
            <hr className="mx-4 my-2" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
