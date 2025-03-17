"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { XIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MyURLsSheet({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSheetClose = () => {
    router.push("/");
  };

  return (
    <Sheet open={pathname === "/app/my-urls"} onOpenChange={handleSheetClose}>
      <SheetContent className="w-screen" closeButton={false}>
        <SheetHeader className="h-[77px] border-b flex-row justify-between items-center">
          <SheetTitle className="text-xl font-bold">
            Your recent TinyURLs
          </SheetTitle>
          <SheetClose asChild>
            <Button
              className="bg-transparent hover:bg-black hover:text-primary-foreground size-10"
              size="icon"
              variant="outline"
            >
              <XIcon className="size-7" />
            </Button>
          </SheetClose>
        </SheetHeader>

        {children}
      </SheetContent>
    </Sheet>
  );
}
