import Container from "@/components/core/container";
import Logo from "@/components/layouts/logo";
import MobileMenu from "@/components/layouts/mobile-menu";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="text-white sticky top-0">
      <Container className="container mx-auto p-4 flex items-center justify-between">
        <Logo />

        <div className="space-x-2">
          <MobileMenu />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Container>
    </header>
  );
}
