import { StaticImageData } from "next/image";

export type DestinasiCardType = {
  destinationName: string;
  desa: string;
  imageUrl: string | StaticImageData;
  imageAlt: string;
  pageUrl: string;
} & JSX.IntrinsicElements["div"];

export type PengembanganCardType = {
  pengembanganTitle: string;
  imageUrl: string;
  imageAlt: string;
  pageUrl: string;
} & JSX.IntrinsicElements["div"];

export type TestimoniCardType = {
  testimoneeName: string;
  desinationName: string;
  imageUrl: string | StaticImageData;
  imageAlt: string;
  highlightText: string;
  bodyText: string;
};
