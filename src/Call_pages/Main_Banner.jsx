import React from 'react'
import illustration from "../image/illustration.svg"

export const Main_Banner = () => {
  return (
    <section class="main-banner" >
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-12 d-flex flex-column align-items-center justify-content-center p-0">
          <div class="storage-container ">
            <h3>STORAGE CONTAINER SOLUTION INC</h3>
            <h1>Rent or Buy a Shipping Container Today!</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
            </p>
            <button class="get-started-btn">GET STARTED</button>
          </div>
        </div>
        <div class="col-md-6 col-12 p-0">
          <div class="storage-container-img ">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
