import Image from "next/image";
import React from "react";

const Footer = () => {
  // !TODO: use better font size for desktop
  return (
    <div className="sticky top-0 z-40 flex w-full flex-col items-center justify-center bg-donorojo-darkgreen p-8 md:justify-start md:items-start md:px-32">
      <div className="relative ">
        <Image
          src="/logos/logo-footer-discover.png"
          alt="Footer Logo Discover Donorojo"
          width={165}
          height={132}
        />
      </div>

      <div className="flex flex-col text-center md:w-full md:flex-row md:justify-between md:items-center md:text-left">
        <h3 className="text-white my-5 md:w-1/3">
          Kecamatan Donorojo, Kabupaten Pacitan Provinsi Jawa Timur
        </h3>

        <h3 className="text-white md:text-right md:w-1/4">
          KKN-PPM UGM Moro Donorojo Periode II Tahun 2022
        </h3>
      </div>
    </div>
  );
};

export default Footer;
