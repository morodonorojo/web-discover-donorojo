import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

import HamburgerMenu from "../../../assets/icons/hamburger-menu.svg";
import DestkopNav from "./DesktopNav";

const Header = () => {
  // !TODO: use better font size for desktop

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-row items-center justify-between bg-white p-2 px-8 drop-shadow-lg">
      <Link href="/" passHref>
        <div className="flex cursor-pointer flex-row">
          <div className="logo-discover relative h-12 w-12 items-center">
            <Image
              src="/logos/logo-discover.png"
              alt="Logo Discover Donorojo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Link>
      <div>
        <HamburgerMenu
          className="scale-125 cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      <DestkopNav />
      <MobileNav isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default Header;
