import React from 'react'
import bus_waiting from '../image/bus-waiting.png'
export const Storage_Need = () => {
  return (
    <section class="right-need mt-5 " data-aos="fade-in">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column p-0">
                <div class="right-container-heading">
                    <h4>STORAGE CONTAINER SOLUTION INC</h4>
                    <h1>PICK THE RIGHT CONTAINER SOLUTION FOR YOUR NEEDS</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div class="box-need-container">
                    <div class="box-right-needs need-box">
                        <h2>BUY A CONTAINER</h2>
                        <p>Lorem ipsum dolor sit amet elitr, sed diam nonumy eirmod tempor</p>
                    </div>
                    <div class="box-right-needs need-box">
                        <h2>RENT A CONTAINER</h2>
                        <p>Lorem ipsum dolor sit amet elitr, sed diam nonumy eirmod tempor</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 p-0">
                <div class="img-bus-hold ">
                    <img src={bus_waiting} alt=""/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
