'use client'
import React, { useState } from 'react';
import Banner from "../Componenets/webcomponents/Banner/Banner";
import "@/css/widget.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./blog.css";
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Data from "../db.json";
import H2 from '../Componenets/landing/Typography/H2';
import Card from '../Componenets/webcomponents/Home page Cards/Card';
import CallToAction from '../Componenets/webcomponents/CallToAction/Calltoaction';
import Para from '../Componenets/landing/Typography/Para';

export default function Blog() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex + 1);
    };

    return (
        <>
            <section className="banner2">
                <Banner classname="banner2-wrapper">
                    <div className="container">
                        <Banner.BannerContent classname="banner2-content">
                            <Banner.BannerBody classname="banner2-body">
                                <Banner.Heading title="Blog" titleclassname="banner2-heading text-center" />
                                <Banner.Para title="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." paraclassname="text-center expert-para" />
                            </Banner.BannerBody>
                        </Banner.BannerContent>
                    </div>
                </Banner>
            </section>
            <section className="blogswiper">
                <div className="blogswiper-wrapper">
                    <div className="container">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.custom-prev',
                                nextEl: '.custom-next',
                            }}
                            onSlideChange={handleSlideChange} // Handle slide change
                        >
                            {Data.blogpageslider.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="blog-slide">
                                            <figure>
                                                <Image
                                                    src={item.img}  // Ensure image is in public/assets/images
                                                    alt="Blog 1"
                                                    width={500}
                                                    height={500}
                                                />
                                            </figure>
                                            <div className="blog-content">
                                                <h3>{item.title}</h3>
                                                <p>{item.para}</p>
                                                <a href="#" className="read-more">
                                                    Read More →
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className="custom-navigation">
                            <button className="custom-prev">&larr;</button>
                            <span className="current-slide">{currentSlide} /{Data.blogpageslider.length}</span> {/* Display current slide */}
                            <button className="custom-next">&rarr;</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Blog">
                <div className="Blog-wrapper">
                    <div className="container">
                        <div className="Blog-content">
                            <H2 title="Our Latest Blog" className="text-center" />
                            <div className="Blog-parent">
                                {Data.blog.map((items, index) => {
                                    return (
                                        <>
                                            <Card classname="blog-card" index={index}>
                                                <Card.Image src={items.img} alt="" />
                                                <Card.Body cardbody="blog-card-content">
                                                    <Card.Title title={items.title} />
                                                    <Card.Para para={items.para} />
                                                    <Card.Button button="Read More →" buttonclass="blogreadmore" />
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                })}
                                {Data.blog.map((items, index) => {
                                    return (
                                        <>
                                            <Card classname="blog-card" index={index}>
                                                <Card.Image src={items.img} alt="" />
                                                <Card.Body cardbody="blog-card-content">
                                                    <Card.Title title={items.title} />
                                                    <Card.Para para={items.para} />
                                                    <Card.Button button="Read More →" buttonclass="blogreadmore" />
                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                })}
                            </div>
                            <a href='' className="viewbtn">View More →</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="foresight">
                <div className="foresight-wrapper">
                    <div className="container">
                        <div className="foresight-content">
                            <H2 title="Get Foresight on the go" className='text-center' />
                            <Para title="At Fourth Industrial Revolution Inc., we are dedicated to guiding businesses through the transformative power of artificial intelligence. With a team of seasoned experts at the helm, specializing in AI consulting and product solutions, we provide tailored AI solutions that propel your business into the future. Our mission is simple yet ambitious: to empower organizations to thrive in the dynamic landscape of the Fourth Industrial Revolution." className='text-center' />
                        <button className='btn'>Get Foresight</button>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />
        </>
    );
}
