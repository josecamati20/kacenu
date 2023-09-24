import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';

// import required modules
import { Pagination } from 'swiper/modules';
import MyCard from '../MyCard';

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><MyCard/></SwiperSlide>
        <SwiperSlide><MyCard/></SwiperSlide>
        <SwiperSlide><MyCard/></SwiperSlide>
        <SwiperSlide><MyCard/></SwiperSlide>
      </Swiper>
    </>
  );
}
