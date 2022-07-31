import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

import HamburgerMenu from "../../../assets/icons/hamburger-menu.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-row items-center justify-between bg-white p-3 px-8 drop-shadow-lg">
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
      <ul className="desktop-nav font-body text-donorojo-darkgreen text-lg flex child:mx-2 child:p-3 child:child:h-full child:child:w-full child:cursor-pointer child:rounded-lg child:p- child-hover:bg-donorojo-darkgreen/20">
        <li>
          <Link href="#">Menu Utama</Link>
        </li>
        <li>
          <Link href="#">Destinasi</Link>
        </li>
        <li>
          <Link href="#">Galeri</Link>
        </li>
        <li>
          <Link href="#">Testimoni</Link>
        </li>
        <li>
          <Link href="#">Artikel</Link>
        </li>
      </ul>
      <MobileNav isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default Header;
