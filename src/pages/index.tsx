import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Gallery from "../components/Gallery";
import { OutlinedButton } from "../components/Button";

import ArrowIcon from "../assets/icons/icon-arrow.svg";
import { DestinasiCard, PengembanganCard } from "../components/Card";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home: NextPage = () => {
  // TODO: Create PrismicIo CustomType for Destinasi, Pengembangan, and Galeri

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
        <h2 className="font-bold text-donorojo-darkgreen text-3xl mb-4">
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

      <section className="pengembangan-masyarakat w-full bg-white p-8 md:px-32">
        <h2 className="font-bold text-donorojo-darkgreen text-3xl mb-4">
          Pengembangan Masyarakat
        </h2>
        <div className="pengembangan-list">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
            className={clsx(
              "child:child:justify-center child:child:flex child:child:w-min",
              "swiper-prev-button:bg-donorojo-yellow swiper-prev-button:h-8 swiper-prev-button:w-8 swiper-prev-button:rounded-full swiper-prev-button:text-donorojo-darkgreen swiper-prev-button-after:text-base swiper-prev-button-after:font-bold",
              "swiper-next-button:bg-donorojo-yellow swiper-next-button:h-8 swiper-next-button:w-8 swiper-next-button:rounded-full swiper-next-button:text-donorojo-darkgreen swiper-next-button-after:text-base swiper-next-button-after:font-bold"
            )}
          >
            <SwiperSlide>
              <PengembanganCard />
            </SwiperSlide>
            <SwiperSlide>
              <PengembanganCard />
            </SwiperSlide>
            <SwiperSlide>
              <PengembanganCard />
            </SwiperSlide>
            <SwiperSlide>
              <PengembanganCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="galeri w-full bg-white p-8 md:px-32">
        <h2 className="font-bold text-donorojo-darkgreen text-3xl mb-4">
          Galeri
        </h2>
        <div className="gallery">
          <Gallery />
        </div>
      </section>

      <section className="testimoni w-full bg-white p-8 md:px-32">
        <h2 className="font-bold text-donorojo-darkgreen text-3xl mb-4">
          Apa Kata Mereka?
        </h2>
        <div className="testimoni-list w-full">
          <div className="w-full flex flex-col sm:flex-row sm:justify-between">
            <div className="image-part relative aspect-square w-full h-auto mb-4 rounded-xl overflow-hidden main-drop-shadow sm:w-1/2 sm:h-min sm:mr-10">
              <Image
                src="/images/dummy-card-bg.png"
                alt="alt text"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-part w-full text-donorojo-darkgreen bg-donorojo-cream p-8 rounded-xl main-drop-shadow sm:w-1/2 sm:aspect-square sm:h-min">
              <h2 className="font-bold font-inter mb-2 text-lg sm:text-2xl">
                Gua Luweng Ombo sangat menakjubkan!
              </h2>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse quis quam nisi. Curabitur dignissim rutrum egestas.
                Quisque varius purus vitae est tincidunt, sit amet tempor ipsum
                commodo. Donec euismod porttitor sodales. Vivamus a sapien est.
                Aenean sit amet nibh ut ex facilisis eleifend. Vestibulum et
                aliquet eros.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimoni w-full bg-white p-8 md:px-32">
        <h2 className="font-bold text-donorojo-darkgreen text-3xl mb-4">
          Peta Lokasi
        </h2>
        <div className="peta">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126386.04379099111!2d110.88912895386532!3d-8.14580200794246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bda0edfc0b5a3%3A0x4c62ca22c88ccf1f!2sKec.%20Donorojo%2C%20Kabupaten%20Pacitan%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1659440198493!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl main-drop-shadow"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Home;
