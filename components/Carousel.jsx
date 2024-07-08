"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./styles.css";

// import required modules
import { EffectCreative, Pagination, Navigation } from "swiper/modules";

export const Carousel = () => {
  const imageStyles = `w-[100vw] h-[150px] relative
  min-[400px]:h-[200px]
  min-[500px]:h-[250px]
  min-[600px]:h-[280px]
  min-[700px]:h-[310px]
  min-[800px]:h-[340px]
  min-[900px]:h-[370px]
  min-[1000px]:h-[400px]
  min-[1100px]:h-[440px]
  min-[1200px]:h-[480px]
  min-[1300px]:h-[520px]
  min-[1400px]:h-[550px]
  min-[1450px]:h-[580px]
  min-[1500px]:h-[610px]
  min-[1600px]:h-[640px]
  min-[1700px]:h-[670px]
  min-[1800px]:h-[700px]
  min-[1900px]:h-[730px]
  `;

  return (
    <>
      <Swiper
        autoHeight={true}
        className="mySwiper"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-110%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["110%", 0, -500],
          },
        }}
        effect={"creative"}
        grabCursor={true}
        modules={[Navigation, Pagination, EffectCreative]}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        <SwiperSlide>
          <div className={imageStyles}>
            <Image
              alt="TAIPAN Logo"
              fill={true}
              priority={true}
              src="/01.png"
              // sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={imageStyles}>
            <Image
              alt="TAIPAN Logo"
              fill={true}
              priority={true}
              src="/02.jpg"
              // sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
