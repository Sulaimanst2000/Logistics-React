import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Header_above = () => {
  return (
    <div class="social-link-bg" data-aos="fade-in">
      <div class="container-fluid">
        <div class="social-link d-flex justify-content-between align-items-center p-2">
          <div class="icon d-flex ">
            <FaFacebook className="me-1"/>
            <FaTwitter className="me-1"/>
            <FaInstagram className="me-1"/>
          </div>
          <div class="email">
            <a href="mailto:info@company.com" class="text-white">
              Email: info@company.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_above;
