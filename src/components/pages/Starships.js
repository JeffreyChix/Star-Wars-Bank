import React from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import StarshipItem from "../StarshipItem";
import Error from "../UI/Error";

import Paginationv2 from "../Paginationv2";

import useGetID from "../../hooks/useGetID";
import useFetchStarWars from "../../hooks/useFetchStarWars";

const Starships = (props) => {
  const getStarshipID = useGetID();
  const {
    loading,
    error,
    resourceData: starships,
    resourceCount: totalStarships,
  } = useFetchStarWars(props, "starships");

  return (
    <React.Fragment>
      <Hero
        title="All Starships in the Star Wars Universe"
        subText="Hyperdrive capability"
      />
      <Section>
        {!error ? (
          <div>
            <h1 className="heading text-center p-4 mb-2">
              {totalStarships} Total Starships
            </h1>
            <div className="row mb-4">
              {loading ? (
                <div className="text-center fa-3x">
                  <i className="fas fa-cog fa-spin"></i>
                </div>
              ) : (
                starships.map((starship) => {
                  return (
                    <StarshipItem
                      key={starship.name}
                      starshipName={starship.name}
                      starshipModel={starship.model}
                      starshipHyperdriveRating={starship.hyperdrive_rating}
                      starshipClass={starship.starship_class}
                      starshipConsumables={starship.consumables}
                      to={getStarshipID(starship.url)}
                    />
                  );
                })
              )}
            </div>
            <div className="container-fluid">
              <div className="col-md-12">
                <Paginationv2
                  total={totalStarships}
                  page={props.history.location.search}
                  resource="starships"
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

export default Starships;
