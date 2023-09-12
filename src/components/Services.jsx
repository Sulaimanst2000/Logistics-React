import React from 'react'
import box_container from '../image/box-container.png'
import { Product_Container } from '../Call_pages/Product_Container'
import container_svg from '../image/only-container.svg'
import { FaArrowRight } from "react-icons/fa";

export const Services = () => {
  return (
    <>
    <div class="about-banner-services pb-md-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 col-12 ">
                    <div class="about-heading-services">
                        <h4>LOGISTICS SERVICES</h4>
                        <h2>Storage Container Solution INC</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s. when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</p>
                        <button class="get-started-btn">GET STARTED</button>
                    </div>
                </div>
                <div class="col-md-4 col-12 p-0">
                    <div class="only-bus-services w-100">
                        <img src={box_container} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Product_Container/>
    <section class="container-services pt-3" data-aos="fade-in">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 col-12 p-0">
                <div class="only-container ">
                    <img src={container_svg} alt="" class="w-100" />
                </div>
            </div>
            <div class="col-md-6 col-12 ">
                <div class="container-services-para-head ul-w">
                    <h4>WE’LL HELP YOU WITH</h4>
                    <h2>Other services</h2>
                    <ul class="m-0 p-0">
                        <li class="d-flex justify-content-between border-bottom pb-3 pt-2">Full truckload Less than
                            Truckload <FaArrowRight/></li>
                        <li class="d-flex justify-content-between border-bottom pb-3 pt-2">Drayage <FaArrowRight/></li>
                        <li class="d-flex justify-content-between border-bottom pb-3 pt-2">Warehousing / cross docking
                        <FaArrowRight/></li>
                        <li class="d-flex justify-content-between border-bottom pb-3 pt-2">Expedited <FaArrowRight/></li>
                        <li class="d-flex justify-content-between border-bottom pb-3 pt-2">Specialized <FaArrowRight/></li>
                        <li class="d-flex justify-content-between border-bottom pb-3 pt-2">Export <FaArrowRight/></li>
                        <li class="d-flex justify-content-between border-bottom pb-3 pt-2">Import<FaArrowRight/></li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}
export default Services