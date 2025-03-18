import Navigation from "@/components/layouts/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
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
      <SheetContent className="w-screen" closeButton={false}>
        <SheetHeader className="h-[77px] border-b flex-row justify-between">
          <SheetTitle></SheetTitle>
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

        <Navigation />

        <SheetFooter>
          <SignedOut>
            <SignUpButton>
              <Button variant="secondary">Sign Up</Button>
            </SignUpButton>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
