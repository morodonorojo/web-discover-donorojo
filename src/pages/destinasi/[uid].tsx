import Image from "next/image";
import React from "react";

const DestinasiPage = () => {
  return (
    <div>
      <section className="hero relative w-full h-screen overflow-hidden">
        <Image
          src="/images/bg-hero.webp"
          alt="Dummy Hero"
          layout="fill"
          objectFit="cover"
        />
      </section>
      <section className="testimoni w-full  bg-white p-8 text-black md:px-32">
        <div className="w-full mb-4">
          <h2 className="font-bold text-donorojo-darkgreen text-xl md:text-3xl">
            Pantai Ngiroboyo
          </h2>
          <h3 className="font-bold text-sm md:text-base">
            Dusun Sambi, Desa Sendang
          </h3>
        </div>
        <div className="w-full  flex flex-col md:flex-row">
          <div className="body-text mb-4 bg-donorojo-darkgreen   md:w-2/3 md:mb-0">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              rerum sed magnam quae iste animi ducimus mollitia. Dolorum
              molestias sit rerum, repellat tempore suscipit expedita esse,
              animi illum sequi hic. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quos excepturi cupiditate eum tempore,
              reiciendis voluptatum doloribus numquam nam odio quod fuga ipsam
              a. Ex consequuntur, adipisci quas molestias deleniti nostrum?
            </p>
          </div>
          <div className="maps bg-slate-500 md:w-1/3 md:ml-4"></div>
        </div>
      </section>
    </div>
  );
};

export default DestinasiPage;
