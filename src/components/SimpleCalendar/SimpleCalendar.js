import React from 'react';
import "swiper/swiper-bundle.css";
import SwiperCore, {Swiper, SwiperSlide, Scrollbar} from 'swiper';

const settings = {
  slidesPerView: 1.45,
  spaceBetween: 25,
  speed: 500,
  wrapperTag: 'ul',
  threshold: 20,
};

function SimpleCalender() {
  console.log('##');
  return (
    <div>
      <Swiper {...settings}>
        {[...Array(10)].map((_, idx) =>
          <SwiperSlide tag='li' key={`${idx + 1}`} virtualIndex={idx}>안</SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}