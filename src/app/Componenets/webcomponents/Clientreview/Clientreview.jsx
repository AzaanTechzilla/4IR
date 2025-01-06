import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import H5 from '../../landing/Typography/H5';
import Para from '../../landing/Typography/Para';
import H6 from '../../landing/Typography/H6';
export default function Clientreview({ data }) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={4}
                loop={true}
                breakpoints={{
                    320:{

                        slidesPerView:1,
                        spaceBetween:0
                    },
                    768:{
                        slidesPerView:2,
                        spaceBetween:20
                    },
                    992:{
                        slidesPerView:4,
                        spaceBetween:30
                    }
                }}
                className="mySwiper"
            >
                {data.map((item, index) => {
                    return (

                        <SwiperSlide key={index} className='clientreview-slide'>
                            <div className="clientreview">
                                <div className="clientreview-head d-flex align-items-center flex-wrap gap-3">
                                    <figure>
                                        <img src={item.img} alt='client review' />
                                    </figure>
                                    <div className="clientreview-rating d-flex flex-column align-items-center">
                                        <H6 title={item.title} />
                                        <Para title={item.subtitle} />
                                        <div className="star d-flex gap-2">
                                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                        </div>
                                    </div>
                                    <Para title={item.para} />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}