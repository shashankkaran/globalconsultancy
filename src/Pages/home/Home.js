import React from 'react'
import Aboutus from '../aboutus/Aboutus'
import Services from '../services/Services'
import SubHome from './SubHome'
function Home() {
  return (
    <div>
         <SubHome/>
        <Services/> 
        <Aboutus/>
    </div>
  )
}

export default Home