import React from "react";
import logo from "../image/logo.png";
import close from "../image/close.png";
import menu from "../image/menu.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="main-bg" data-aos="fade-in">
    <div className="container-fluid">
      <div className="row">
        <div className="header-nav-bar d-lg-flex w-100 justify-content-md-center align-items-md-center">
          <div className="logo w-100">
            <img src={logo} />
          </div>
          <div class="header-navigation d-flex ">
            <ul className="d-lg-flex  justify-md-content-between align-items-md-center p-0 m-0 un-list-ul">
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/contact"} class="pe-4">
                  Contact
                </Link>
              </li>
            </ul>
            <img src={close} className="closeBar" alt="image" />
          </div>
          <div class="buttons-header d-flex justify-content-between">
            <div class="login ">
              <button onclick="" className="login-btn">
                LOGIN
              </button>
            </div>
            <div class="started ">
              <button onclick="" className="get-started-btn">
                GET STARTED
              </button>
            </div>
          </div>
          <div class="toggle-icon">
            <img src={menu} className="menuBar" alt="image" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Navbar

    