import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import HamburgerMenu from "../../../assets/icons/hamburger-menu.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-row items-center justify-between bg-white p-3 drop-shadow-lg">
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
          className="scale-125 cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      <div
        className={clsx(
          "absolute top-0 mt-14 h-screen w-full bg-white p-2 transition-all",
          isMenuOpen ? "left-0 transition-all" : "left-[-100%]"
        )}
      >
        <ul className="font-body text-donorojo-darkgreen opacity-50 text-lg child:mb-2 child:flex child:child:h-full child:child:w-full child:cursor-pointer child:rounded-lg child:p- child-hover:bg-donorojo-darkgreen/20">
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
      </div>
    </nav>
  );
};

export default Header;
