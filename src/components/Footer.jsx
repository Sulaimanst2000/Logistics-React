import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram,FaTwitter,FaFacebook,FaPaperPlane} from "react-icons/fa";
import Foot_logo from "../image/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <div className="social-footer">
              <div className="logo logo-footer">
                <img src={Foot_logo} alt="" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took.
              </p>
            </div>
            <div className="social-icons-foot">
              <div className="icon-foot">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="quick-links">
              <h3>Quick links</h3>
              <ul>
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/services"}>Services</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="quick-links">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <Link to={"/home"}>LTL Freight</Link>
                </li>
                <li>
                  <Link to={"/services"}>Shared Truckload</Link>
                </li>
                <li>
                  <Link to={"/about"}>Full Truckload</Link>
                </li>
                <li>
                  <Link to={"/contact"}>View More</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="quick-links">
              <h3>Newsletter</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <form className="email-box d-flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  id="email-input"
                  name="email"
                />
                <span>
                  <FaPaperPlane />
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end-line">
        <p className="text-white p-0 m-0">
          © 2022
          <strong className="text-white p-0 me-1">
            Storage Container Solution inc
          </strong>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer