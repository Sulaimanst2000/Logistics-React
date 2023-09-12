import React from 'react'
import Only_Container from '../image/only-container.svg'
import { Carousel } from '../Call_pages/Carousel'
import { Testimonial } from '../Call_pages/Testimonial'
import { Blog } from '../Call_pages/Blog'
import Boxes from '../image/boxes.png'
import Bus from '../image/bus.svg'

export const About = () => {
  return (
    <>
      <div class="about-banner pb-md-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 col-12 ">
              <div class="about-heading">
                <h4>ABOUT US</h4>
                <h2>Lorem Ipsum is not simply random text</h2>
              </div>
            </div>
            <div class="col-md-6 col-12 p-0">
              <div class="only-bus w-100">
                <img src={Only_Container} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <section class="about-section pt-md-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="about-section-content">
                <h2>Who We Are</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                  leap
                  into electronic typesetting, remaining essentially unchanged.
                  <br></br>
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="img-bus-about w-100">
                <img src={Bus} alt="" />
              </div>
            </div>
          </div>
          </div>
      </section>
      <section class="about-work-us mt-5 mb-5" data-aos="fade-in">
        <div class="container ">
          <div class="about-work-container d-flex justify-content-between align-items-center w-100">
            <div class="row ">
              <div class="col-md-6 col-12 ">
                <div class="about-img-work">
                  <img src={Boxes} alt="" />
                </div>
              </div>
              <div class="col-md-6 col-12 d-md-flex justify-content-md-center align-items-md-center">
                <div class="about-heading-work">
                  <h4>What We Do</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. <br></br>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Blog/>
        </>
        )
}
export default About