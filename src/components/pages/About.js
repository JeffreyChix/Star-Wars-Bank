import React from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import { Link } from "react-router-dom";

import classes from "./About.module.css";

const About = () => {
  return (
    <React.Fragment>
      <Hero title="About Star Wars Bank" subText="What is it?" />
      <Section>
        <div className="container-fluid">
          <div className={`row ${classes.row}`}>
            <div className="col-md-6">
              <div>
                <h3>What is it?</h3>
                <p>
                  Star Wars Bank is a simple web application built with{" "}
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    React
                  </a>{" "}
                  that lists all the Star Wars data from the first film release date in a structured pattern, contained in beautiful
                  boxes.{" "}
                  <b>
                    It pulls data from the six Star Wars resources (People,
                    Films, Planets, Species, Vehicles and Starships)
                  </b>{" "}
                  and formats them into readable and user-friendly information
                  that is easily accessible.
                </p>
              </div>
              <div>
                <h3>What can I use it for?</h3>
                <p>
                  From statistics, about 70 to 80% of the world's population
                  have seen the Star Wars films. Nearly two-thirds of Americans
                  like Star Wars and{" "}
                  <b>
                    aside from the fun of searching the bank, comparing the data
                    from Star Wars has never been easier
                  </b>
                  . This project was also designed to help you master the basic
                  and advanced concepts of React development or Javascript
                  itself if you are interested in programming.
                  <br />
                  <br />
                  After hours of watching films and trawling through content
                  online, we present to you all the{" "}
                  <b>
                    People, Films, Species, Starships, Vehicles and Planets{" "}
                  </b>{" "}
                  from Star Wars you've ever wanted in a simple web app.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h3>What API is it using?</h3>
                <p>
                  Star Wars Bank fetches data from an API by{" "}
                  <a href="https://swapi.dev" target="_blank" rel="noreferrer">
                    SWAPI DEV
                  </a>{" "}
                  - The Star Wars API. Swapi is a completely open API. No
                  authentication is required to query and get data. That means
                  you are allowed to use it too to make your own Star Wars
                  Project. If you need help, let me know :)
                </p>
              </div>
              <div>
                <h3>Does it support regular updates?</h3>
                <p>
                  Star Wars Bank is regularly maintained and updated based on
                  changes made on the API. The entire user experience is highly
                  important and it is regularly updated for a better one. <br />
                  <br /> If you have any ideas to make Star Wars Bank better
                  than it is now, please contact the{" "}
                  <Link to="/about-the-creator">Creator</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default About;
