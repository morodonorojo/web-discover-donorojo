import { StaticImageData } from "next/image";

export type DestinasiCardType = {
  destinationName?: string;
  desa?: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  pageUrl?: string;
} & JSX.IntrinsicElements["div"];

export type PengembanganCardType = {
  pengembanganTitle?: string;
  imageSrc?: string;
  pageUrl?: string;
} & JSX.IntrinsicElements["div"];
