import React from 'react'
import {
    useParams,
  } from "react-router-dom";
  
  // console.log(fid);
  
  function SubService() {
    let { sid } = useParams();
  return (
    <div>
    {sid}
    </div>
  )
}

export default SubService