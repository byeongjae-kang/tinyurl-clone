import Container from "@/components/core/container";
import Logo from "@/components/layouts/logo";
import MobileMenu from "@/components/layouts/mobile-menu";

export default function Header() {
  return (
    <header className="text-white sticky top-0">
      <Container className="container mx-auto p-4 flex items-center justify-between">
        <Logo />

        <div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
