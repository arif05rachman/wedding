import React from "react";
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Carousel = ({ wishes }) => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
      >
        {wishes &&
          wishes.map((wish) => {
            return (
              <SwiperSlide className="text-center">{wish?.post}</SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Carousel;
