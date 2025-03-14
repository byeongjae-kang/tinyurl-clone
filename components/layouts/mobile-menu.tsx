import Navigation from "@/components/layouts/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu, XIcon } from "lucide-react";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="bg-transparent size-10"
          size="icon"
          variant="outline"
        >
          <Menu className="size-7" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="w-screen"
        closeButton={
          <Button
            className="bg-transparent hover:bg-black hover:text-primary-foreground size-10"
            size="icon"
            variant="outline"
          >
            <XIcon className="size-7" />
          </Button>
        }
      >
        <SheetHeader className="h-[77px] border-b">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <Navigation />
      </SheetContent>
    </Sheet>
  );
}
