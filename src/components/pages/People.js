import React from "react";
import Hero from "../Hero";
import PeopleItem from "../PeopleItem";
import Section from "../UI/Section";
import Error from "../UI/Error";

import Paginationv2 from "../Paginationv2";
import useGetID from "../../hooks/useGetID";
import useFetchStarWars from "../../hooks/useFetchStarWars";

const People = (props) => {
  const getPersonID = useGetID();
  const {
    loading,
    error,
    resourceData: people,
    resourceCount: totalPeople,
  } = useFetchStarWars(props, "people");

  return (
    <React.Fragment>
      <Hero title="All Star Wars Characters" subText="From 1977" />
      <Section>
        {!error ? (
          <div>
            <h1 className="heading text-center p-4 mb-2">
              {totalPeople} Total Characters
            </h1>
            <div className="row mb-4">
              {loading ? (
                <div className="text-center fa-3x">
                  <i className="fas fa-cog fa-spin"></i>
                </div>
              ) : (
                people.map((person) => {
                  var personID = getPersonID(person.url);
                  return (
                    <PeopleItem
                      key={personID}
                      id={personID}
                      characterName={person.name}
                      planet={person.homeworld}
                      filmsCount={person.films.length}
                      starshipsCount={person.starships.length}
                      species={person.species}
                    />
                  );
                })
              )}
            </div>
            <div className="container-fluid">
              <div className="col-md-12">
                <Paginationv2
                  total={totalPeople}
                  page={props.history.location.search}
                  resource="people"
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

export default People;
