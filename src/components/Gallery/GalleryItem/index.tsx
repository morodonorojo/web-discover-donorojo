import Image from "next/image";
import React from "react";
import { GalleryItemTypes } from "../types";

const GalleryItem: React.FC<GalleryItemTypes> = ({
  imageSrc,
  imageAlt,
  onClick,
}) => {
  return (
    <div className="bg-gray-500 relative w-full aspect-square rounded-lg cursor-pointer overflow-hidden main-drop-shadow">
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          onClick={onClick}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default GalleryItem;
