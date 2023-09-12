import React from "react";
import Box_right from '../image/boxes.png'

export const Contact = () => {
  return (
    <>
      <div class="contact-page">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="contact-heading">
                <h4>CONTACT US</h4>
                <h2>How can we help you?</h2>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="img-box-right d-flex align-items-end justify-content-end">
                <img src={Box_right} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="contact-form">
        <div class="container">
          <h2>Just write a message!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div class="col-md-9 col-12 mx-auto">
            <form action="" class="input-class-form">
              <div class="d-flex pb-3">
                <input
                  type="text"
                  placeholder="Your name"
                  name=""
                  class="input-box me-2"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email address"
                  class="input-box"
                />
              </div>
              <div class="pb-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Subject"
                  class="input-box"
                />
              </div>
              <div class="pb-3">
                <textarea
                  rows="10"
                  cols="20"
                  name=""
                  id=""
                  placeholder="Message"
                  class="input-box"
                ></textarea>
              </div>
              <button type="submit" class="form-btn ">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
      <section class="information mb-5 pt-3">
        <div class="container ">
          <div class="information-back">
            <div class="row mx-auto">
              <div class="para-contact">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div class="info d-flex w-75 mx-auto justify-content-between">
                <div class="phone-details">
                  <h3>+ (012) 345 6789</h3>
                </div>
                <div class="email-details">
                  <h3>info@Storagecontainersolution.com</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
