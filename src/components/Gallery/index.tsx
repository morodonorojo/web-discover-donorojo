import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";

import GalleryItem from "./GalleryItem";

import "react-image-lightbox/style.css";
import { mockDataGallery } from "./mock-data";

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const galleryImages = mockDataGallery;

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
      {isLightboxOpen && (
        <Lightbox
          mainSrc={galleryImages[photoIndex].imageSrc}
          nextSrc={
            galleryImages[(photoIndex + 1) % galleryImages.length].imageSrc
          }
          prevSrc={
            galleryImages[
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            ].imageSrc
          }
          onImageLoad={() => {
            window.dispatchEvent(new Event("resize"));
          }}
          onCloseRequest={() => setIsLightboxOpen(() => false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + galleryImages.length - 1) % galleryImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryImages.length)
          }
        />
      )}

      {galleryImages.map((galleryItem, index) => {
        return (
          <GalleryItem
            key={index}
            imageSrc={galleryItem.imageSrc}
            imageAlt={galleryItem.imageAlt}
            onClick={() => {
              setIsLightboxOpen(() => true), setPhotoIndex(() => index);
            }}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
