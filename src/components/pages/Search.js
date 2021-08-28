import React, { useEffect, useState, useCallback } from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";

import PeopleItem from "../PeopleItem";
import SpeciesItem from "../SpeciesItem";
import FilmItem from "../FilmItem";
import PlanetItem from "../PlanetItem";
import VehicleItem from "../VehicleItem";
import StarshipItem from "../StarshipItem";

import useGetID from "../../hooks/useGetID";
import classes from "./Search.module.css";

const Search = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState({
    people: [],
    species: [],
    planets: [],
    films: [],
    vehicles: [],
    starships: [],
  });

  const searchedText = props.location.state && props.location.state.searchText;
  const API_ROOT = "https://swapi.dev/api";
  const searchQuery = props.location.search;
  const getResourceID = useGetID();

  const searchStarWars = useCallback(async () => {
    if (searchQuery !== "" && searchedText) {
      setLoading(true);

      try {
        let peopleFetch = await fetch(`${API_ROOT + "/people"}${searchQuery}`);
        let peopleData = await peopleFetch.json();
        setSearchResults((prevState) => {
          return { ...prevState, people: peopleData.results };
        });

        let speciesFetch = await fetch(
          `${API_ROOT + "/species"}${searchQuery}`
        );
        let speciesData = await speciesFetch.json();
        setSearchResults((prevState) => {
          return { ...prevState, species: speciesData.results };
        });

        let planetsFetch = await fetch(
          `${API_ROOT + "/planets"}${searchQuery}`
        );
        let planetsData = await planetsFetch.json();
        setSearchResults((prevState) => {
          return { ...prevState, planets: planetsData.results };
        });

        let filmsFetch = await fetch(`${API_ROOT + "/films"}${searchQuery}`);
        let filmsData = await filmsFetch.json();
        setSearchResults((prevState) => {
          return { ...prevState, films: filmsData.results };
        });

        let vehiclesFetch = await fetch(
          `${API_ROOT + "/vehicles"}${searchQuery}`
        );
        let vehiclesData = await vehiclesFetch.json();
        setSearchResults((prevState) => {
          return { ...prevState, vehicles: vehiclesData.results };
        });

        let starshipsFetch = await fetch(
          `${API_ROOT + "/starships"}${searchQuery}`
        );
        let starshipsData = await starshipsFetch.json();
        setSearchResults((prevState) => {
          return { ...prevState, starships: starshipsData.results };
        });
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }
  }, [searchQuery, searchedText]);

  useEffect(() => {
    searchStarWars();
  }, [searchStarWars]);

  const totalResults =
    searchResults.people.length +
    searchResults.planets.length +
    searchResults.species.length +
    searchResults.starships.length +
    searchResults.vehicles.length +
    searchResults.films.length;

  return (
    <React.Fragment>
      <Hero
        title="Let's find it"
        subText={
          searchedText
            ? `You searched for '${searchedText}'`
            : "What are you looking for?"
        }
      />
      <Section>
        {!error ? (
          loading ? (
            <div className="text-center fa-3x">
              <i className="fas fa-cog fa-spin"></i>
            </div>
          ) : (
            <div>
              <h1 className="heading text-center p-4 mb-2">
                We found {totalResults} result(s)
              </h1>
              <div className="">
                <div className={`row ${classes.searchResource}`}>
                  <h3>People ({searchResults.people.length})</h3>
                  {searchResults.people &&
                    searchResults.people.map((person) => {
                      return (
                        <PeopleItem
                          key={person.name}
                          characterName={person.name}
                          filmsCount={person.films.length}
                          starshipsCount={person.starships.length}
                          planet={person.homeworld}
                          species={person.species}
                          id={getResourceID(person.url)}
                        />
                      );
                    })}
                </div>

                <div className={`row ${classes.searchResource}`}>
                  <h3>Films ({searchResults.films.length})</h3>
                  {searchResults.films &&
                    searchResults.films.map((film) => {
                      return (
                        <FilmItem
                          key={film.title}
                          filmTitle={film.title}
                          filmEpisode={film.episode_id}
                          filmDirector={film.director}
                          filmReleaseDate={film.release_date}
                          to={getResourceID(film.url)}
                        />
                      );
                    })}
                </div>

                <div className={`row ${classes.searchResource}`}>
                  <h3>Planets ({searchResults.planets.length})</h3>
                  {searchResults.planets &&
                    searchResults.planets.map((planet) => {
                      return (
                        <PlanetItem
                          key={planet.name}
                          planetName={planet.name}
                          planetResidents={planet.residents.length}
                          planetClimate={planet.climate}
                          planetPopulation={planet.population}
                          to={getResourceID(planet.url)}
                        />
                      );
                    })}
                </div>

                <div className={`row ${classes.searchResource}`}>
                  <h3>Species ({searchResults.species.length})</h3>
                  {searchResults.species &&
                    searchResults.species.map((specie) => {
                      return (
                        <SpeciesItem
                          key={specie.name}
                          speciesName={specie.name}
                          classification={specie.classification}
                          designation={specie.designation}
                          averageHeight={specie.average_height}
                          to={getResourceID(specie.url)}
                        />
                      );
                    })}
                </div>

                <div className={`row ${classes.searchResource}`}>
                  <h3>Vehicles ({searchResults.vehicles.length})</h3>
                  {searchResults.vehicles &&
                    searchResults.vehicles.map((vehicle) => {
                      return (
                        <VehicleItem
                          key={vehicle.name}
                          vehicleName={vehicle.name}
                          vehicleModel={vehicle.model}
                          vehicleManufacturer={vehicle.manufacturer}
                          vehicleLength={vehicle.length}
                          vehicleCargoCapacity={vehicle.cargo_capacity}
                          to={getResourceID(vehicle.url)}
                        />
                      );
                    })}
                </div>

                <div className={`row ${classes.searchResource}`}>
                  <h3>Starships ({searchResults.starships.length})</h3>
                  {searchResults.starships &&
                    searchResults.starships.map((starship) => {
                      return (
                        <StarshipItem
                          key={starship.name}
                          starshipName={starship.name}
                          starshipModel={starship.model}
                          starshipHyperdriveRating={starship.hyperdrive_rating}
                          starshipClass={starship.starship_class}
                          starshipConsumables={starship.consumables}
                          to={getResourceID(starship.url)}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          )
        ) : (
          <Error errorMessage={error.message} />
        )}
      </Section>
    </React.Fragment>
  );
};

export default Search;
