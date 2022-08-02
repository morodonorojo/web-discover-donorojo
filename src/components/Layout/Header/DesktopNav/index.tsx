import Link from "next/link";
import React from "react";

const DestkopNav = () => {
  return (
    <ul className="desktop-nav font-body text-donorojo-darkgreen text-md hidden child:transition-all child:duration-300 md:flex child:mx-2 child:p-3 child:child:h-full child:child:w-full child:cursor-pointer child:rounded-xl child-hover:bg-donorojo-darkgreen/20 ">
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
  );
};

export default DestkopNav;
