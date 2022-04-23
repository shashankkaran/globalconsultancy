import React from 'react'
import './franchise.css'
import i1 from "./images/Beer-street.jpg";

import i2 from "./images/Natty-cafe.jpg";
import { Carousel ,Container , Row , Col } from 'react-bootstrap';
import i3 from "./images/Dosa-cafe.jpg";

import Button from '@mui/material/Button';


function Franchise() {
    return (
        <div className='fgrid'>




            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={i1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src={i2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src={i3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>







           <div style={{width:"100%",padding:'2rem',textAlign:'center',height:'98%',backgroundColor:'grey',position:'relative',right:'1.7rem',top:'2rem'}}>

                <h1>
                    Make Your Dream Come True ! Apply Now
                </h1>
<br/>
                <p>
                orem ipsum dolor sit amet. Id exercitationem atque in aliquam ducimus ut dolorem doloremque. Et quia quidem aut dolor velit aut dolorem porro. Aut dignissimos nostrum nam molestiae deleniti id beatae unde hic sequi quia aut nisi sint eos cumque temporibus.
                </p>
                <Button variant="contained">Contained</Button>
 
           </div>

        </div>
    )
}

export default Franchise
