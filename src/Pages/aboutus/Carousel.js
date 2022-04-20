import React, { Component } from "react";
import Slider from "react-slick";
import img from "../../assets/MAIL.png";
import "./Cstyle.css"
function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className="carousel">
        <Slider {...settings}>
          <div>
           <img src={img}/>
          </div>
          <div>
           <img src={img}/>
          </div>
          <div>
           <img src={img}/>
          </div>
          <div>
           <img src={img}/>
          </div>
          <div>
           <img src={img}/>
          </div>
          <div>
           <img src={img}/>
          </div>
        </Slider>
      </div>
    );
  
}

export default Carousel