import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { MobileNavTypes } from "../../types";

const MobileNav: React.FC<MobileNavTypes> = ({ isMenuOpen }) => {
  return (
    <div
      className={clsx(
        "absolute top-0 mt-14 h-screen w-full bg-white p-2 transition-all",
        "md:hidden",
        isMenuOpen ? "left-0 transition-all" : "left-[-100%]"
      )}
    >
      <ul className="mobile-nav font-body text-donorojo-darkgreen text-lg child:mb-2 child:flex child:child:h-full child:child:w-full child:cursor-pointer child:rounded-lg child:p- child-hover:bg-donorojo-darkgreen/20">
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
  );
};

export default MobileNav;
