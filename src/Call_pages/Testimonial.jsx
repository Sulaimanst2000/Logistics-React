import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Arrow_Right from "../image/arrow-right.png"
import Arrow_Left from "../image/arrow-left.png" 
import Test_Img from "../image/testimonial.png"
import { Keyboard, Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';


export const Testimonial = () => {

  return (
    <>
    
    <section class="testimonials" data-aos="fade-in">
        <div class="container">
            <div class="heading-test ">
                <h4>TESTIMONIALS</h4>
                <div class="client d-flex align-items-center">
                <h2>What our client say</h2>
                    <div class="arrow d-flex">
                        <div class="arrow-left me-2 ">
                            <img src={Arrow_Left} class="prev" alt="" />
                        </div>
                        <div class="arrow-right ">
                            <img src={Arrow_Right} class="next" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        <div class="row test mx-auto">
        <Swiper
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 300,}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
                clickable: true,
              }}
              navigation={ {
              nextEl: ".arrow-right",
              prevEl: ".arrow-left",
            }}
              modules={[Keyboard, Autoplay,Navigation]}
              className="mySwiper"
              keyboard={{
                enabled: true,
              }}
              
            >
            <SwiperSlide>
                <div class="col-md-3 col-12">
                <div class="testimonial-slider testimonial-box">
                    <div class="test-pic"><h6 class="pb-lg-3"><span><img src={Test_Img} alt="" /></span>- JOHN DOE</h6></div>
                    <p><em>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type."</em></p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="col-md-3 col-12">
                <div class="testimonial-slider testimonial-box">
                    <div class="test-pic"><h6 class="pb-lg-3"><span><img src={Test_Img} alt="" /></span>- JOHN DOE</h6></div>
                    <p><em>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type."</em></p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="col-md-3 col-12">
                <div class="testimonial-slider testimonial-box">
                    <div class="test-pic"><h6 class="pb-lg-3"><span><img src={Test_Img} alt="" /></span>- JOHN DOE</h6></div>
                    <p><em>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type."</em></p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="col-md-3 col-12">
                <div class="testimonial-slider testimonial-box">
                    <div class="test-pic"><h6 class="pb-lg-3"><span><img src={Test_Img} alt="" /></span>- JOHN DOE</h6></div>
                    <p><em>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type."</em></p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="col-md-3 col-12">
                <div class="testimonial-slider testimonial-box">
                    <div class="test-pic"><h6 class="pb-lg-3"><span><img src={Test_Img} alt="" /></span>- JOHN DOE</h6></div>
                    <p><em>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type."</em></p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="col-md-3 col-12">
                <div class="testimonial-slider testimonial-box">
                    <div class="test-pic"><h6 class="pb-lg-3"><span><img src={Test_Img} alt="" /></span>- JOHN DOE</h6></div>
                    <p><em>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type."</em></p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="col-md-3 col-12">
                <div class="testimonial-slider testimonial-box">
                    <div class="test-pic"><h6 class="pb-lg-3"><span><img src={Test_Img} alt="" /></span>- JOHN DOE</h6></div>
                    <p><em>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type."</em></p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide><div class="col-md-3 col-12">
                <div class="testimonial-slider testimonial-box">
                    <div class="test-pic"><h6 class="pb-lg-3"><span><img src={Test_Img} alt="" /></span>- JOHN DOE</h6></div>
                    <p><em>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type."</em></p>
                </div>
            </div>
            </SwiperSlide>
    </Swiper>
            
            
            
            
           
        </div>
        <hr></hr>
        </div>
    </section>
    </>
  )
}


