import React from "react";
import classes from "./CarouselCaption.module.css";
// import { useHistory } from 'react-router-dom' ;
// const history = useHistory();
// import { HashLink } from "react-router-hash-link";

const CaraouselCaption = () => {
  return (
    <div className={classes.container}>
      <h1>
       Global Consultancy
      </h1>
      <p className={classes.content}>
      We will improve <span className={classes.focus}>your</span>
       sales
        <span className={classes.focus}>efficiency</span>
      </p>
      <div className={classes.infoContainer}>
        <button className={`${classes.info} ${classes['info-know']}`}>Know More</button>
        {/* <a href="http://localhost:3000/donation" className={`${classes.info} ${classes['info-donate']}`}>Donate</a> */}
      </div>
    </div>
  );
};

export default CaraouselCaption;
