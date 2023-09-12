import React from 'react'
import logo1 from "../image/logo-1.png"
import logo2 from "../image/logo-2.png"
import logo3 from "../image/logo-3.png"
import logo4 from "../image/logo-4.png"
import logo5 from "../image/logo5.png"
import logo6 from "../image/logo-6.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

export const Carousel = () => {
    return (
            
            <section class="carousel-slider pt-lg-5 pb-lg-5 mx-auto" data-aos="fade-in">
                <div className="container">
                <div class="row test mx-auto">
<Swiper
                spaceBetween={0}
                slidesPerView={6}
                loop={true}
                autoplay={{
                    delay: 300,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Autoplay]}
                className="mySwiper"

            >
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo1} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo2} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo3} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo4} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo5} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo6} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo5} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo2} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo3} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo1} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo5} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo3} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo4} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="col-md-2 col-12">
                        <div class="logo-img carousel-boxes">
                            <img src={logo6} alt="logo" class="w-100" />
                        </div>
                    </div>
                    </SwiperSlide>
                    </Swiper>
                    </div>
                    </div>
            </section>
    )
}
