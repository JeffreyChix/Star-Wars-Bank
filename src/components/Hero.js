import React from "react";
import classes from "./Hero.module.css";

const Hero = ({ title, subText }) => {
  const homeSubText = (
    <React.Fragment>
      All the Star Wars data you've ever wanted now structured:
      <br />
      <cite>Planets, Spaceships, Vehicles, People, Films and Species.</cite><br />
      Have Fun Searching.
    </React.Fragment>
  );

  return (
    <div className={`px-4 py-5 text-center ${classes.hero}`}>
      <h1 className="display-5 fw-bold">
        {title ? title : "Welcome to Star Wars Bank"}
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{subText ? subText : homeSubText}</p>
      </div>
    </div>
  );
};

export default Hero;
