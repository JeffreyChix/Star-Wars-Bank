import React from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import creatorImage from "../../assets/creator.png";

import classes from "./AboutCreator.module.css";

const AboutCreator = () => {
  return (
    <React.Fragment>
      <Hero title="About the Creator" subText="Jeffrey Nwankwo" />
      <Section>
        <div className="container-fluid">
          <div className={`row align-items-center ${classes.row}`}>
            <div className="col-md-7">
              <div className={classes.creator_box}>
                <p>
                  Jeffrey Nwankwo is a developer who builds and manages
                  websites, web and mobile applications for businesses but in
                  his spare time, builds stuff for fun and learning purposes. He
                  is a self-taught programmer who is highly obesessed with tech
                  while making efforts to contribute to the world
                  of technology.
                  <br />
                  <br />
                  He is a lover of robots and has built some for himself and
                  loved ones to keep his passion alive. He has led some great
                  teams in the past and is open to opportunities to explore
                  technology in better ways.
                </p>
                <h4>Contact details</h4>
                <div>
                  <p>
                    Email:{" "}
                    <a href="mailto:chiedoziejeffrey@gmail.com">
                      chiedoziejeffrey@gmail.com
                    </a>
                  </p>
                  <p>
                    Socials:{" "}
                    <a
                      href="https://www.linkedin.com/in/jeffsalive/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://twitter.com/JeffreySunny1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/jeffcodey/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram-square"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className={classes.creator_image}>
                <img
                  src={creatorImage}
                  className="img-fluid"
                  alt="Jeffrey Nwankwo"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default AboutCreator;
