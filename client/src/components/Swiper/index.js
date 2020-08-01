import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";


import show1 from "../../assets/swiper_slices_img/baner-show1.png";
import show2 from "../../assets/swiper_slices_img/baner-show2.png";
import show3 from "../../assets/swiper_slices_img/baner-show3.png";
import show4 from "../../assets/swiper_slices_img/baner-show4.png";

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
    >
      <SwiperSlide>
        <img src={show1} alt="Carrousel1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={show2} alt="Carrousel1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={show3} alt="Carrousel1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={show4} alt="Carrousel1" />
      </SwiperSlide>
    </Swiper>

  );
};

export default Carousel;
