import React, { useState, useEffect, useCallback } from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";
import Accordion from "../UI/Accordion";

import classes from "./Starship.module.css";

import useGetNames from "../../hooks/useGetNames";

const Starship = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [starship, setStarship] = useState({});
  const [error, setError] = useState(null);

  const [films, setFilms] = useGetNames();
  const [pilots, setPilots] = useGetNames();

  const fetchStarship = useCallback(async () => {
    setLoading(true);
    const starshipID = match.params.id;
    try {
      const response = await fetch(
        `https://swapi.dev/api/starships/${starshipID}`
      );
      const data = await response.json();
      setStarship(data);
      setFilms(data.films);
      setPilots(data.pilots);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [match.params.id, setFilms, setPilots]);

  useEffect(() => {
    fetchStarship();
  }, [fetchStarship]);

  return (
    <React.Fragment>
      <Hero
        title={starship.name}
        subText={`Manufacturer: ${starship.manufacturer}`}
      />
      <Section>
        {!error ? (
          <div className="container-fluid">
            <div className={`row ${classes.starship_details_box}`}>
              <div className={`col-md-12 ${classes.sidebar}`}>
                <div className={classes.meta_box}>
                  <h3 className="meta_box_heading">General Info</h3>
                  {loading ? (
                    <div className="text-center fa-3x">
                      <i className="fas fa-cog fa-spin"></i>
                    </div>
                  ) : (
                    <React.Fragment>
                      <div>Name: {starship.name}</div>
                      <div>Model: {starship.model}</div>
                      <div>Manufacturer: {starship.manufacturer}</div>
                      <div>Cost in Credits: {starship.cost_in_credits}</div>
                      <div>Length: {starship.length}</div>
                      <div>
                        Max Atmosphering Speed:{" "}
                        {starship.max_atmosphering_speed}
                      </div>
                      <div>Crew: {starship.crew}</div>
                      <div>Passengers: {starship.passengers}</div>
                      <div>Cargo Capacity: {starship.cargo_capacity}</div>
                      <div>Consumables: {starship.consumables}</div>
                      <div>Hyperdrive Rating: {starship.hyperdrive_rating}</div>
                      <div>MGLT: {starship.MGLT}</div>
                      <div>Starship Class: {starship.starship_class}</div>
                    </React.Fragment>
                  )}
                </div>
                <Accordion
                  resources={[
                    { name: "Pilots", cat: "people", value: pilots },
                    { name: "Films", cat: "films", value: films },
                  ]}
                />
              </div>
            </div>
          </div>
        ) : (
          <Error errorMessage={error.message} />
        )}
      </Section>
    </React.Fragment>
  );
};

export default Starship;
