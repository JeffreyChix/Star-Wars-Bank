import React, { useState, useEffect, useCallback } from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";
import Accordion from "../UI/Accordion";

import classes from "./Person.module.css";
import useGetNames from "../../hooks/useGetNames";
import usePopulateAccordion from "../../hooks/usePopulateAccordion";

const Person = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [person, setPerson] = useState({});

  const [homeworld, setHomeworld] = useGetNames();
  const [species, setSpecies] = useGetNames();
  const [films, setFilms] = useGetNames();
  const [vehicles, setVehicles] = useGetNames();
  const [starships, setStarships] = useGetNames();

  const formatData = usePopulateAccordion();

  const fetchPerson = useCallback(async () => {
    setLoading(true);
    const personID = match.params.id;
    
    try {
      const response = await fetch(`https://swapi.dev/api/people/${personID}`);
      const data = await response.json();

      setPerson(data);
      setHomeworld(data.homeworld);
      setSpecies(data.species);
      setVehicles(data.vehicles);
      setFilms(data.films);
      setStarships(data.starships);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  }, [
    match.params.id,
    setHomeworld,
    setFilms,
    setSpecies,
    setVehicles,
    setStarships,
  ]);

  useEffect(() => {
    fetchPerson();
  }, [fetchPerson]);

  return (
    <React.Fragment>
      <Hero title={person.name} subText="Star Wars Character" />
      <Section>
        {!error ? (
          <div className="container-fluid">
            <div className={`row ${classes.person_details_box}`}>
              <div className={`col-md-12 ${classes.sidebar}`}>
                <div className={classes.meta_box}>
                  <h3>General Info</h3>
                  {loading ? (
                    <div className="text-center fa-3x">
                      <i className="fas fa-cog-spin fa-spin text-white"></i>
                    </div>
                  ) : (
                    <React.Fragment>
                      <div>Height: {person.height}</div>
                      <div>Mass: {person.mass}</div>
                      <div>Hair color: {person.hair_color}</div>
                      <div>Skin Color: {person.skin_color}</div>
                      <div>Eye Color: {person.eye_color}</div>
                      <div>Birth Year: {person.birth_year}</div>
                      <div>Gender: {person.gender}</div>
                      <div className={classes.homeworld}>
                        Homeworld: {formatData(homeworld, "planets", false)}
                      </div>
                    </React.Fragment>
                  )}
                </div>
                <Accordion
                  resources={[
                    { name: "Films", cat: "films", value: films },
                    { name: "Starships", cat: "starships", value: starships },
                    { name: "Vehicles", cat: "vehicles", value: vehicles },
                    { name: "Species", cat: "species", value: species },
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

export default Person;
