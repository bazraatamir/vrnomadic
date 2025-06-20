"use client";

import React, {JSX} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import {Autoplay, FreeMode, Pagination} from "swiper/modules";
import NatureCard from "./card";

export default function Carousel(): JSX.Element {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      freeMode={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className='mySwiper p-4'>
      <SwiperSlide>
        <NatureCard />
      </SwiperSlide>

      <SwiperSlide>
        <NatureCard />
      </SwiperSlide>
      <SwiperSlide>
        <NatureCard />
      </SwiperSlide>
      <SwiperSlide>
        <NatureCard />
      </SwiperSlide>
      <SwiperSlide>
        <NatureCard />
      </SwiperSlide>
      <SwiperSlide>
        <NatureCard />
      </SwiperSlide>
      <SwiperSlide>
        <NatureCard />
      </SwiperSlide>
      <SwiperSlide>
        <NatureCard />
      </SwiperSlide>
      <SwiperSlide>
        <NatureCard />
      </SwiperSlide>
    </Swiper>
  );
}
