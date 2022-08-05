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
      <ul className="mobile-nav font-body text-donorojo-darkgreen text-md child:px-6 child:py-2 child:flex child:child:h-full child:child:w-full child:cursor-pointer child:rounded-lg child:p- child-hover:bg-donorojo-darkgreen/20">
        <li>
          <Link href="/">Menu Utama</Link>
        </li>
        <li>
          <Link href="/#destinasi">Destinasi</Link>
        </li>
        <li>
          <Link href="/#pengembangan-masyarakat">Artikel</Link>
        </li>
        <li>
          <Link href="/#galeri">Galeri</Link>
        </li>
        <li>
          <Link href="/#testimoni">Testimoni</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
