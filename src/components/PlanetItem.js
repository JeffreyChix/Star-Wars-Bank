import React from "react";
import planetIcon from "../assets/planet.png";

import { Link } from "react-router-dom";

import classes from "./PlanetItem.module.css";

const PlanetItem = (props) => {
  return (
    <React.Fragment>
      <div className="col-md-4">
        <div className={`card ${classes.card}`}>
          <div className="card-body">
          <div
              className={`d-flex flex-row justify-content-between align-items-center`}
            >
              <h5 className="card-title">{props.planetName} </h5>
              <img src={planetIcon} className="img-fluid" alt={props.planetName} />
            </div>
            <div className={classes.meta_box}>
              <div>Residents: {+props.planetResidents === 1 ? props.planetResidents + ' person' : props.planetResidents + ' people'}</div>
              <div>Climate: {props.planetClimate}</div>
              <div>Population: {props.planetPopulation}</div>
            </div>
            <Link to={`/planets/${props.to}`}>Go to planet</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlanetItem;
