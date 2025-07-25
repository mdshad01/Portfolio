import Link from "next/link";

// Components
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-10 text-white">
      <div className="container mx-auto xl:max-w-6xl flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold px-4 lg:px-0">
            Shad<span className="text-accent">.</span>
          </h1>
        </Link>
        {/*Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden px-4 lg:px-0">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
