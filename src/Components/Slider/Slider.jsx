// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "./swiperjs.css";

export default () => {
  return (
    <div className="container">
      <div className="slider__father">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img
              src="https://assets.asaxiy.uz/uploads/banner/desktop/63ce8fee9cba5.jpg.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
