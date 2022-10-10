import React from "react";
import "../components/homepage.css";
import { NavLink } from "react-router-dom";
import Carouselpage from "./Carouselpage";
import Productinfo from "./Productinfo";
import mob from "../logo/mobile.png";
import lap from "../logo/laptop.jpg";
import cam from "../logo/camera.jpg";
import About from "./About";
import Contactus from "./Contactus";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <>
      <Carouselpage />
      <Productinfo />
      <div className="our-product">
        <div className="mb-5 mt-2">
          <h1 className="text-center">Our Products</h1>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4">
              <NavLink to="/card">
                <img className="img-fluid  mb-3 img1" src={mob} alt="phone" />
              </NavLink>
            </div>
            <div className="col-md-4">
            <NavLink to="/laptop">
              <img className="img-fluid  mb-3 img1" src={lap} alt="phone" />
              </NavLink>
            </div>
            <div className="col-md-4">
            <NavLink to="/camera">
              <img className="img-fluid  mb-3 img1" src={cam} alt="phone" />
            </NavLink>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Contactus/>
      <Footer/>
    </>
  );
}
