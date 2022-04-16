import React from 'react'
import CaraouselCaption from '../../components/carousel/CarouselCaption';
import banner from '../../assets/homebanner.mp4';
function SubHome() {
  return (
    // <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    //   <div class="carousel-indicators">
    //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //   </div>
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img src="https://wallpapercave.com/wp/wp1902307.jpg" class="d-block w-100" alt="..." />
    //       <CaraouselCaption />
    //     </div>
    //     <div class="carousel-item">
    //       <img src="https://wallpapercave.com/wp/wp1902307.jpg" class="d-block w-100" alt="..." />
    //       <CaraouselCaption />
    //     </div>
    //     <div class="carousel-item">
    //       <img src="https://wallpapercave.com/wp/wp1902307.jpg" class="d-block w-100" alt="..." />
    //       <CaraouselCaption />
    //     </div>
    //   </div>
    //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
    <>
       <div>
                <video style={{ width: "100%" }} autoPlay muted loop>
                    <source src={banner} />
                </video>
            </div>

    </>
  )
}

export default SubHome