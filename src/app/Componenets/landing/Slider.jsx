import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Slider = ({ SliderData }) => {
  const [showFullText, setShowFullText] = useState(
    SliderData.map(() => false) 
  );

  const toggleText = (index) => {
    setShowFullText((prev) =>
      prev.map((item, i) => (i === index ? !item : item)) 
    );
  };

  const maxLength = 37; 

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={40}
      loop={true} 
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true, 
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true, 
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true, 
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
          centeredSlides: true, 
        },
      }}
    >
      {SliderData?.map((item, index) => (
        <SwiperSlide key={index} className="custom-slide">
          <div className="testimonial-card">
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
              <p>
                {showFullText[index]
                  ? item?.testimonial
                  : `${item?.testimonial.slice(0, maxLength)}...`}
              </p>
              <button
                onClick={() => toggleText(index)}
                className="text-primary border-0 bg-transparent"
              >
                {showFullText[index] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
