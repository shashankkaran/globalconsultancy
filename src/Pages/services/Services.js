import React from 'react'
import Slider from "react-slick";
function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div id="services" >
     <h1 class="p-2">Our Services</h1>
       
      <div className="card" style={{width:"18rem"}}>
        <img src="https://wallpapercave.com/wp/wp1902307.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default Services