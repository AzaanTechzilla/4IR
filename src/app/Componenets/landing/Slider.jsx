import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// import "./widgets.css";

const Slider = ({ SliderData }) => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={3}
      spaceBetween={40}
      loop={true} // Ensures the slides will loop and maintain center
      pagination={{
        clickable: true,
      }}
      centeredSlides={true} // Ensures the active slide is centered
      modules={[Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true, // Ensure it’s centered on smaller screens
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true, // Centered slide for tablet screens
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true, // Center the active slide for medium screens
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
          centeredSlides: true, // Keep centered slide behavior for large screens
        },
      }}
    >
      {SliderData?.map((item, index) => {
        return(
        <SwiperSlide key={index} className="custom-slide">
          <div className={`testimonial-card`}>
            <div className="d-flex align-items-center">
                <img
                  src={item.img}
                  className="rounded-5 p-1"
                  alt="Client"
                />
              <div className="ms-4 testimonial-client">
                <h5>{item?.clientName}</h5>
                <h6>{item?.country}</h6>
              </div>
            </div>
            <div className="text-white">
              <p>{item?.testimonial}</p>
            </div>
          </div>
        </SwiperSlide>

        )
})}
    </Swiper>
  );
};

export default Slider;
