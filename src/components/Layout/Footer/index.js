import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="sticky top-0 z-40 flex w-full flex-col text-center items-center justify-center bg-donorojo-darkgreen p-8">
      <div className="relative">
        <Image
          src="/logos/logo-footer-discover.png"
          alt="Footer Logo Discover Donorojo"
          width={165}
          height={132}
        />
      </div>

      <h3 className="text-white my-5">
        Kecamatan Donorojo, Kabupaten Pacitan Provinsi Jawa Timur
      </h3>

      <h3 className="text-white">
        KKN-PPM UGM Moro Donorojo Periode II Tahun 2022
      </h3>
    </div>
  );
};

export default Footer;
