import clsx from "clsx";
import React from "react";

import Image from "next/image";
import { PengembanganCardType } from "../types";
import Link from "next/link";

const PengembanganCard: React.FC<PengembanganCardType> = ({
  pengembanganTitle,
  imageUrl,
  imageAlt,
  pageUrl,
  className,
  ...props
}) => {
  return (
    <Link href={`/artikel/${pageUrl}`}>
      <div
        {...props}
        className={clsx(
          `${className}`,
          "relative rounded-2xl w-60 h-[420px] bg-gray-600 overflow-hidden flex items-end cursor-pointer main-drop-shadow",
          "md:w-full"
        )}
      >
        <div className="destination relative z-20 p-4 w-full flex flex-row justify-between items-center">
          <p className="font-bold text-lg w-full md:text-2xl md:w-1/2">
            {pengembanganTitle}
          </p>
        </div>
        <div className="absolute h-full w-full top-0 left-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
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
    </Link>
  );
};

export default PengembanganCard;
