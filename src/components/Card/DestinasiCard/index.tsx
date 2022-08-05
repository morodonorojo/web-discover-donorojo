import clsx from "clsx";
import React from "react";
import { DestinasiCardType } from "../types";

import PinpointIcon from "../../../assets/icons/icon-pinpoint.svg";
import ArrowIcon from "../../../assets/icons/icon-arrow.svg";

import Image from "next/image";
import Link from "next/link";

const DestinasiCard: React.FC<DestinasiCardType> = ({
  destinationName,
  desa,
  imageUrl,
  imageAlt,
  pageUrl,
  className,
  ...props
}) => {
  return (
    <Link href={`/destinasi/${pageUrl}`}>
      <div
        {...props}
        className={clsx(
          `${className}`,
          "relative rounded-2xl w-60 h-96 bg-gray-600 overflow-hidden flex items-end cursor-pointer main-drop-shadow",
          "hover:border-4 group border-donorojo-darkgreen transition-all"
        )}
      >
        <div className="destination relative z-20 p-4 w-full flex flex-row justify-between items-center">
          <p className="font-playfair text-lg w-1/2">{destinationName}</p>
          <div className="h-6 w-6 p-1 rounded-full border-2 border-white group-hover:bg-white group transition-colors">
            <ArrowIcon className="transition-all group-hover:child:stroke-black" />
          </div>
        </div>
        <div className="location-tag absolute z-20 top-4 right-4 flex flex-row items-center text-xs rounded-full px-2 py-1 w-fit bg-donorojo-cream text-donorojo-darkgreen">
          <PinpointIcon />
          <p className="ml-1 font-bold">{desa}</p>
        </div>
        <div className="absolute h-full w-full top-0 left-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="transition-all duration-300 group-hover:scale-125"
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
    </Link>
  );
};

export default DestinasiCard;
