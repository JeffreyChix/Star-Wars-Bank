import React, { useState, useEffect, useCallback } from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";
import Accordion from "../UI/Accordion";

import classes from "./SingleSpecies.module.css";

import useGetNames from "../../hooks/useGetNames";
import usePopulateAccordion from "../../hooks/usePopulateAccordion";

const SingleSpecies = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [species, setSpecies] = useState({});
  const [error, setError] = useState(null);

  const [films, setFilms] = useGetNames();
  const [people, setPeople] = useGetNames();
  const [homeworld, setHomeworld] = useGetNames();

  const formatData = usePopulateAccordion();

  const fetchSpecies = useCallback(async () => {
    setLoading(true);
    const speciesID = match.params.id;
    try {
      const response = await fetch(
        `https://swapi.dev/api/species/${speciesID}`
      );
      const data = await response.json();
      setSpecies(data);
      setFilms(data.films);
      setPeople(data.people);
      setHomeworld(data.homeworld);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [match.params.id, setFilms, setPeople, setHomeworld]);

  useEffect(() => {
    fetchSpecies();
  }, [fetchSpecies]);

  return (
    <React.Fragment>
      <Hero
        title={species.name}
        subText={`Classification: ${species.classification}`}
      />
      <Section>
        {!error ? (
          <div className="container-fluid">
            <div className={`row ${classes.species_details_box}`}>
              <div className={`col-md-12 ${classes.sidebar}`}>
                <div className={classes.meta_box}>
                  <h3 className="meta_box_heading">General Info</h3>
                  {loading ? (
                    <div className="text-center fa-3x">
                      <i className="fas fa-cog fa-spin"></i>
                    </div>
                  ) : (
                    <React.Fragment>
                      <div>Name: {species.name}</div>
                      <div>Classification: {species.classification}</div>
                      <div>Designation: {species.designation}</div>
                      <div>Average Height: {species.average_height}</div>
                      <div>Skin Color: {species.skin_colors}</div>
                      <div>Eye Color: {species.eye_colors}</div>
                      <div>Average Lifespan: {species.average_lifespan}</div>
                      {homeworld.data.length >= 1 ? (
                        <div className={classes.homeworld}>
                          Homeworld: {formatData(homeworld, "planets", false)}
                        </div>
                      ) : (
                        ""
                      )}
                      <div>Language: {species.language}</div>
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

export default SingleSpecies;
