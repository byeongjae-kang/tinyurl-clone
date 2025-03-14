import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="text-white sticky top-0">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Logo />

        <div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
