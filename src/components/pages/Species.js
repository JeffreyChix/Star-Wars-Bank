import React from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";

import SpeciesItem from "../SpeciesItem";
import useFetchStarWars from "../../hooks/useFetchStarWars";
import useGetID from "../../hooks/useGetID";

import Paginationv2 from "../Paginationv2";

const Species = (props) => {
  const getSpeciesID = useGetID();

  const {
    loading,
    error,
    resourceData: species,
    resourceCount: totalSpecies,
  } = useFetchStarWars(props, "species");

  return (
    <React.Fragment>
      <Hero
        title="All Species in the Star Wars Universe"
        subText="Uniqueness"
      />
      <Section>
        {!error ? (
          <div>
            <h1 className="heading text-center p-4 mb-2">
              {totalSpecies} Total Species
            </h1>
            <div className="row mb-4">
              {loading ? (
                <div className="text-center fa-3x">
                  <i className="fas fa-cog fa-spin"></i>
                </div>
              ) : (
                species.map((specie) => {
                  return (
                    <SpeciesItem
                      key={specie.name}
                      speciesName={specie.name}
                      classification={specie.classification}
                      designation={specie.designation}
                      averageHeight={specie.average_height}
                      to={getSpeciesID(specie.url)}
                    />
                  );
                })
              )}
            </div>
            <div className="container-fluid">
              <div className="col-md-12">
                <Paginationv2
                  total={totalSpecies}
                  page={props.history.location.search}
                  resource="species"
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

export default Species;
