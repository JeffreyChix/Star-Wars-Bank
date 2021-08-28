import React, { useState, useEffect, useCallback } from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";
import Accordion from "../UI/Accordion";

import classes from "./Planet.module.css";

import useGetNames from "../../hooks/useGetNames";

const Planet = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [planet, setPlanet] = useState({});
  const [error, setError] = useState(null);

  const [films, setFilms] = useGetNames();
  const [people, setPeople] = useGetNames();

  const fetchPlanet = useCallback(async () => {
    setLoading(true);
    const planetID = match.params.id;
    try {
      const response = await fetch(`https://swapi.dev/api/planets/${planetID}`);
      const data = await response.json();
      setPlanet(data);
      setFilms(data.films);
      setPeople(data.residents);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [match.params.id, setFilms, setPeople]);

  useEffect(() => {
    fetchPlanet();
  }, [fetchPlanet]);

  return (
    <React.Fragment>
      <Hero title={planet.name} subText={`Diameter: ${planet.diameter}`} />
      <Section>
        {!error ? (
          <div className="container-fluid">
            <div className={`row ${classes.planet_details_box}`}>
              <div className={`col-md-12 ${classes.sidebar}`}>
                <div className={classes.meta_box}>
                  <h3 className="meta_box_heading">General Info</h3>
                  {loading ? (
                    <div className="text-center fa-3x">
                      <i className="fas fa-cog fa-spin"></i>
                    </div>
                  ) : (
                    <React.Fragment>
                      <div>Rotation Period: {planet.rotation_period}</div>
                      <div>Orbital Period: {planet.orbital_period}</div>
                      <div>Diameter: {planet.diameter}</div>
                      <div>Climate: {planet.climate}</div>
                      <div>Gravity: {planet.gravity}</div>
                      <div>Terrain: {planet.terrain}</div>
                      <div>Surface water: {planet.surface_water}</div>
                      <div>Population: {planet.population}</div>
                    </React.Fragment>
                  )}
                </div>
                <Accordion
                  resources={[
                    { name: "People", cat: "people", value: people },
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

export default Planet;
