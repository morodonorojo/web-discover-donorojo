import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { OutlinedButton } from "../components/Button";

import ArrowIcon from "../assets/icons/icon-arrow.svg";
import { DestinasiCard } from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Discover Donorojo | Moro Donorojo 2022</title>
        <meta
          name="description"
          content="KKN-PPM (Kuliah Kerja Nyata - Pembelajaran Pemberdayaan Masyarakat) UGM adalah salah  satu bentuk  nyata  komitmen  kerakyatan  dan kebangsaan Universitas Gadjah Mada. KKN-PPM UGM ini  merupakan  mata  kuliah  wajib  yang mempunyai  sejarah  panjang;  rintisannya  telah dimulai  sejak  tahun  1951. KKN-PPM UGM 2022 Moro Donorojo menyasar dua desa yang terdapat di Kecamatan Donorojo, Kabupaten Pacitan, yaitu Desa Sendang dan Desa Kalak. KKN-PPM UGM 2022 Moro Donorojo memiliki tema 'Peningkatan Ekonomi Desa Kalak dan Sendang yang Berkelanjutan Melalui Konsep Ekowisata' yang bertujuan untuk mengembangkan potensi pariwisata dan meningkatkan ekonomi masyarkat pada Desa Sendang dan Desa Kalak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero h-screen w-full">
        <div className="absolute w-full h-screen">
          <Image
            src="/images/bg-hero.webp"
            alt="Background hero section"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="header-text relative text-white text-center z-10 h-1/3">
            <h1 className="text-3xl font-bold tracking-wider mb-4 md:text-8xl">
              Discover Donorojo
            </h1>
            <p className="text-sm font-light ">
              TEMUKAN BERLIAN TERSEMBUNYI DI DONOROJO
            </p>
          </div>
          <div className="button-scroll z-10">
            <OutlinedButton text="Selengkapnya" Icon={ArrowIcon} />
          </div>
        </div>
      </section>

      <section className="destinasi w-full bg-white p-8 md:px-32">
        <h2 className="font-bold text-donorojo-darkgreen text-2xl mb-4">
          Temukan Destinasimu
        </h2>
        <div className="destinasi-list">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                centeredSlides: false,
              },
            }}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="child:child:justify-center child:child:flex child:child:w-min !pb-10"
          >
            <SwiperSlide>
              <DestinasiCard />
            </SwiperSlide>
            <SwiperSlide>
              <DestinasiCard />
            </SwiperSlide>
            <SwiperSlide>
              <DestinasiCard />
            </SwiperSlide>
            <SwiperSlide>
              <DestinasiCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default Home;
