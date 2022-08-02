import { StaticImageData } from "next/image";
import React from "react";

export type GalleryItemTypes = {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  onClick?: (e: any) => void;
};
