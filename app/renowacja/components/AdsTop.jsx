'use client';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";

import { slides } from "../data/AdsTopData";

const RenovationAdsBottom = () => {
  const breakpoints = {
    600: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">  </span>';
    },
  };

  return (
    <section className="RenovationPageInfoAdvantages">
      <h4 className="RenovationMainHeading h4">Odnów swoje grzejniki w 4&nbsp; prostych krokach</h4>
      <div className="RenovationPageInfoParentWrapper">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          slidesOffsetBefore={40}        
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={breakpoints}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="RenovationPageInfoParent">
                <div>
                  <Image src={slide.image} alt="cube" />
                  <h6 className="h6-600">{slide.title}</h6>
                  <h6 className="h6">{slide.description}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default RenovationAdsBottom;
