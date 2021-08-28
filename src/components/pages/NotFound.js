import React from "react";
import Hero from "../Hero";
import Section from "../UI/Section";

const NotFound = () => {
  return (
    <React.Fragment>
      <Hero title="Page Not Found" subText="This page does not exist." />
      <Section>
          <div className="container-fluid">
              <div className="row py-5 text-center">
                  <h2>Sorry, this page does not exist.</h2>
              </div>
          </div>
      </Section>
    </React.Fragment>
  );
};

export default NotFound;
