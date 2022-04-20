import React, { useEffect } from 'react';
import AOS from "aos";
import img from "../../assets/OUR SERVICES.png";
import Carousel from "./Carousel.js";
function Aboutus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
    <h1 class="p-5">About Us</h1>
    <div id="about" className='d' >
      <Carousel/>
      <h3>Hello!</h3>
    </div>
    </div>
  )
}

export default Aboutus