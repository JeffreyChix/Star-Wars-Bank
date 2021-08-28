import React from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";

import Paginationv2 from "../Paginationv2";

import PlanetItem from "../PlanetItem";
import useGetID from "../../hooks/useGetID";
import useFetchStarWars from "../../hooks/useFetchStarWars";

const Planets = (props) => {
  const getPlanetID = useGetID();
  const {
    loading,
    error,
    resourceData: planets,
    resourceCount: totalPlanets,
  } = useFetchStarWars(props, "planets");

  return (
    <React.Fragment>
      <Hero
        title="All Planets in the Star Wars Universe"
        subText="Large mass, planet or planetoid"
      />
      <Section>
        {!error ? (
          <div>
            <h1 className="heading text-center p-4 mb-2">
              {totalPlanets} Total Planets
            </h1>
            <div className="row mb-4">
              {loading ? (
                <div className="text-center fa-3x">
                  <i className="fas fa-cog fa-spin"></i>
                </div>
              ) : (
                planets.map((planet) => {
                  return (
                    <PlanetItem
                      key={planet.name}
                      planetName={planet.name}
                      planetResidents={planet.residents.length}
                      planetClimate={planet.climate}
                      planetPopulation={planet.population}
                      to={getPlanetID(planet.url)}
                    />
                  );
                })
              )}
            </div>
            <div className="container-fluid">
              <div className="col-md-12">
                <Paginationv2
                  total={totalPlanets}
                  page={props.history.location.search}
                  resource="planets"
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

export default Planets;
