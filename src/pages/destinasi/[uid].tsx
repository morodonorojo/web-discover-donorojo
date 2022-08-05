import Image from "next/image";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import React from "react";
import { createClient } from "../../../prismicio";
import { DestinasiType } from "../../@types/common";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";

const DestinasiPage: NextPage<DestinasiType> = ({ data }) => {
  return (
    <div>
      <section className="hero relative w-full h-screen overflow-hidden">
        <Image
          src={data.heroImage.url}
          alt={data.heroImage.alt}
          layout="fill"
          objectFit="cover"
        />
      </section>
      <section className="testimoni w-full  bg-white p-8 text-black md:px-32">
        <div className="text-sm text-black back mb-2 transition-all duration-200 w-min hover:font-bold">
          <Link href="/">Kembali</Link>
        </div>
        <div className="w-full mb-4">
          <h2 className="font-bold text-donorojo-darkgreen text-xl md:text-3xl">
            {data.namaDestinasi}
          </h2>
          <h3 className="font-bold text-sm md:text-base">
            {data.namaDusun}, {data.namaDesa}
          </h3>
        </div>
        <div className="w-full  flex flex-col md:flex-row">
          <div className="body-text mb-4 md:w-2/3 md:mb-0">
            {data.article.map((item, index) => {
              return (
                <p className="mb-4" key={index}>
                  {item.text}
                </p>
              );
            })}
          </div>
          <div className="maps md:aspect-video md:w-1/3 md:ml-4">
            <iframe
              src={data.embedMapsSrc}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl main-drop-shadow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinasiPage;

interface Params extends ParsedUrlQuery {
  uid: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { uid } = context.params!;
  const client = createClient();

  const destinasiList = (await client.getByUID(
    "destinasi",
    uid as string
  )) as unknown as DestinasiType;

  return {
    props: { ...destinasiList },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const destinasiList = (await client.getAllByType("destinasi", {
    graphQuery: `{
      destinasi{
        uid
      }
    }`,
  })) as unknown as DestinasiType[];

  const paths = destinasiList.map((destinasi) => ({
    params: {
      uid: destinasi.uid,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
