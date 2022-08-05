export type DestinasiType = {
  uid: string;
  data: {
    namaDestinasi: string;
    namaDesa: string;
    namaDusun: string;
    heroImage: {
      url: string;
      alt: string;
    };
    embedMapsSrc: string;
  };
};

export type TestimoniType = {
  uid: string;
  data: {
    destinationName: string;
    name: string;
    highlightText: string;
    bodyText: string;
    featuredImage: {
      url: string;
      alt: string;
    };
  };
};
