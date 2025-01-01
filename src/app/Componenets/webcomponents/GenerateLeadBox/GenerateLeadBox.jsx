'use client'
import H4 from "../../landing/Typography/H4";
import H5 from "../../landing/Typography/H5";
import Para from "../../landing/Typography/Para";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
export default function GenerateLeadBox(data) {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel]}
        className="scrollSwiper"
        style={{
          height: "210px",
        }}
      >
           {data.data.map((items, index) => {
            return(
              <>
        <SwiperSlide key={index}>
          <div className="generateLead-left">
            <H4 title="Here's how we do it:" />
            <span>{items.number}</span>
          </div>
          <div className="generateLead-right">
            <H5 title={items.title} />
            <Para title={items.para} />
          </div>
        </SwiperSlide>
              </>
            )
           })} 
      </Swiper>

    </>

  );
}
