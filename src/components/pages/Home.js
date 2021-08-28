import React from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import ListData from "../ListData";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Section>
        <ListData />
      </Section>
    </React.Fragment>
  );
};

export default Home;
