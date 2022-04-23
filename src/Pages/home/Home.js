import React from 'react'
import Aboutus from '../aboutus/Aboutus'
import Services from '../services/Services'
import SubHome from './SubHome'
import Franchise from '../franchise/Franchise'
function Home() {
  return (
    <div>
         <SubHome/>
        <Franchise/><br/>
        <Services/> 
        <Aboutus/>
    </div>
  )
}

export default Home