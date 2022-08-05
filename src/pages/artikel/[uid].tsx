import Image from "next/image";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import React from "react";
import { createClient } from "../../../prismicio";
import { ArtikelType, DestinasiType } from "../../@types/common";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";

const DestinasiPage: NextPage<ArtikelType> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <section className="hero relative w-full h-screen overflow-hidden">
        <Image
          src={data.featuredImage.url}
          alt={data.featuredImage.alt}
          layout="fill"
          objectFit="cover"
        />
      </section>
      <section className="testimoni w-full  bg-white p-8 text-black md:px-80">
        <div className="text-sm text-black back mb-2 transition-all duration-200 w-min hover:font-bold">
          <Link href="/">Kembali</Link>
        </div>
        <div className="w-full mb-4">
          <h2 className="font-bold text-donorojo-darkgreen text-xl md:text-3xl">
            {data.title}
          </h2>
          <h3 className="font-bold text-sm md:text-base">{data.pic}</h3>
        </div>
        <div className="w-full  flex flex-col md:flex-row">
          <div className="body-text mb-4 w-full text-justify md:mb-0">
            {data.bodyText.map((item, index) => {
              return (
                <p className="mb-4" key={index}>
                  {item.text}
                </p>
              );
            })}
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

  const artikelList = (await client.getByUID(
    "artikel_proker",
    uid as string
  )) as unknown as DestinasiType;

  return {
    props: { ...artikelList },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document for our homepage from the CMS.
  const artikelList = (await client.getAllByType("artikel_proker", {
    graphQuery: `{
        artikel_proker{
        uid
      }
    }`,
  })) as unknown as ArtikelType[];

  const paths = artikelList.map((artikel) => ({
    params: {
      uid: artikel.uid,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
