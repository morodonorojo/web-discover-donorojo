import Link from "next/link";
import React from "react";

const DestkopNav = () => {
  return (
    <ul className="desktop-nav font-body text-donorojo-darkgreen text-md hidden child:transition-all child:duration-300 md:flex child:mx-2 child:p-3 child:child:h-full child:child:w-full child:cursor-pointer child:rounded-xl child-hover:bg-donorojo-darkgreen/20 ">
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
      <a
        href="https://tic-ngiroboyo.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TIC
      </a>
      <a
        href="https://tanaman-konservasi-ngiroboyo.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Konservasi
      </a>
    </ul>
  );
};

export default DestkopNav;
