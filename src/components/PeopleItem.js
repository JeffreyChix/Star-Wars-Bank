import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import peopleIcon from "../assets/people.png";
import classes from "./PeopleItem.module.css";
import useGetNames from "../hooks/useGetNames";

const PeopleItem = (props) => {
  const [planetName, setPlanetName] = useGetNames();
  const [speciesName, setSpeciesName] = useGetNames();

  useEffect(() => {
    setPlanetName(props.planet);
    setSpeciesName(props.species);
  }, [props.planet, props.species, setPlanetName, setSpeciesName]);

  const films = props.filmsCount + ` Film(s) | `;
  const starships = props.starshipsCount + ` Starship(s)`;
  let characterPlanet;
  if (planetName.data[0] && planetName.data[0].name !== undefined) {
    characterPlanet = planetName.data[0].name + ` Planet | `;
  } else {
    characterPlanet = "";
  }

  return (
    <div className={`col-md-4 ${classes.wrapper}`}>
      <Link to={`/people/${props.id}`}>
        <div className={`card mb-4 ${classes.card}`}>
          <div className={`card-header ${classes["card-header"]}`}></div>
          <div className={`card-body text-center ${classes["card-body"]}`}>
            <p>
              <img
                src={peopleIcon}
                className="img-fluid"
                alt={props.characterName}
              />
            </p>
            <div className={`card-text text-center ${classes["card-text"]}`}>
              <h4>
                {props.characterName}
                {speciesName.data[0] &&
                  speciesName.data[0].name !== "" &&
                  ` (${speciesName.data[0].name})`}
              </h4>
              <p>{`${films} ${characterPlanet} ${starships}`}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PeopleItem;
