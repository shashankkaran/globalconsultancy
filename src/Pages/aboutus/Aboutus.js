import React ,{useEffect} from 'react'
import AOS from "aos";

function Aboutus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="about" >
     <h1 class="p-5">About Us</h1>
     
    </div>
  )
}

export default Aboutus