import clsx from "clsx";
import React from "react";
import { DestinasiCardType } from "../types";

import PinpointIcon from "../../../assets/icons/icon-pinpoint.svg";
import ArrowIcon from "../../../assets/icons/icon-arrow.svg";

import Image from "next/image";

const DestinasiCard: React.FC<DestinasiCardType> = ({
  destinationName,
  location,
  imageSrc,
  pageUrl,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        `${className}`,
        "relative rounded-2xl w-60 h-96 bg-gray-600 overflow-hidden flex items-end cursor-pointer main-drop-shadow"
      )}
    >
      <div className="destination relative z-20 p-4 w-full flex flex-row justify-between items-center">
        <p className="font-playfair text-lg w-1/2">Pantai Watukarung</p>
        <div className="h-6 w-6 p-1 rounded-full border-2 border-white hover:bg-white group transition-colors">
          <ArrowIcon className="transition-all group-hover:child:stroke-black" />
        </div>
      </div>
      <div className="location-tag absolute z-20 top-4 right-4 flex flex-row items-center text-xs rounded-full px-2 py-1 w-fit bg-donorojo-cream text-donorojo-darkgreen">
        <PinpointIcon />
        <p className="ml-1 font-bold">Desa Sendang</p>
      </div>
      <div className="absolute h-full w-full top-0 left-0">
        <Image
          src="/images/dummy-card-bg.png"
          alt="Dummy Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className="absolute h-full w-full top-0 left-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2, 89, 90, 0) 64.58%, #02595A 96.35%)",
        }}
      />
    </div>
  );
};

export default DestinasiCard;
