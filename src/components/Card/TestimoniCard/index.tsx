import Image from "next/image";
import React from "react";
import { TestimoniCardType } from "../types";

const TestimoniCard: React.FC<TestimoniCardType> = ({
  testimoneeName,
  desinationName,
  highlightText,
  bodyText,
  imageAlt,
  imageUrl,
}) => {
  return (
    <div className="testimoni-list w-full">
      <div className="w-full flex flex-col sm:flex-row sm:justify-between">
        <div className="image-part relative aspect-square w-full h-auto mb-4 rounded-xl overflow-hidden main-drop-shadow sm:w-1/2 sm:h-min sm:mr-10">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-part w-full text-donorojo-darkgreen bg-donorojo-cream p-8 rounded-xl main-drop-shadow sm:w-1/2 sm:aspect-square sm:h-min">
          <p>
            {testimoneeName} | {desinationName}
          </p>
          <h2 className="font-bold font-inter mb-2 text-lg sm:text-2xl">
            {highlightText}
          </h2>
          <p className="font-medium">{bodyText}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimoniCard;
