import React, { useState, useEffect, useCallback } from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";
import Accordion from "../UI/Accordion";

import useGetNames from "../../hooks/useGetNames";

import classes from "./SingleFilm.module.css";

const SingleFilm = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [film, setFilm] = useState({});

  const [characters, setCharacters] = useGetNames();
  const [planets, setPlanets] = useGetNames();
  const [starships, setStarships] = useGetNames();
  const [vehicles, setVehicles] = useGetNames();
  const [species, setSpecies] = useGetNames();

  const fetchFilm = useCallback(async () => {
    setLoading(true);
    const filmID = match.params.id;

    try {
      const response = await fetch(`https://swapi.dev/api/films/${filmID}`);
      const data = await response.json();

      setFilm(data);
      setCharacters(data.characters);
      setPlanets(data.planets);
      setStarships(data.starships);
      setVehicles(data.vehicles);
      setSpecies(data.species);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [
    match.params.id,
    setCharacters,
    setPlanets,
    setStarships,
    setVehicles,
    setSpecies,
  ]);

  useEffect(() => {
    fetchFilm();
  }, [fetchFilm]);

  const generalInfo = loading ? (
    <div className="text-center fa-3x">
      <i className="fas fa-cog-spin fa-spin text-white"></i>
    </div>
  ) : (
    <React.Fragment>
      <div>Episode: {film.episode_id}</div>
      <div>Director: {film.director}</div>
      <div>Producer(s): {film.producer}</div>
      <div>Release Date: {film.release_date}</div>
    </React.Fragment>
  );

  const filmCrawl = loading ? (
    <div className="text-center fa-3x">
      <i className="fas fa-cog fa-spin text-white"></i>
    </div>
  ) : (
    <p>{film.opening_crawl}</p>
  );

  return (
    <React.Fragment>
      <Hero title={film.title} subText={`Directed by ${film.director}`} />
      <Section>
        {!error ? (
          <div className="container-fluid">
            <div className={`row ${classes.film_details_box}`}>
              <div className={`col-md-4 ${classes.sidebar}`}>
                <div className={classes.meta_box}>
                  <h3 className="meta_box_heading">General Info</h3>
                  {generalInfo}
                </div>
                <Accordion
                  resources={[
                    { name: "Characters", cat: "people", value: characters },
                    { name: "Planets", cat: "planets", value: planets },
                    { name: "Starships", cat: "starships", value: starships },
                    { name: "Vehicles", cat: "vehicles", value: vehicles },
                    { name: "Species", cat: "species", value: species },
                  ]}
                />
              </div>
              <div className="col-md-1"></div>
              <div className={`col-md-7 ${classes.content}`}>
                <div className="card-body">{filmCrawl}</div>
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

export default SingleFilm;
