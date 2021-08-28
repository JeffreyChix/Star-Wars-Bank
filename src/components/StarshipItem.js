import React from "react";
import { Link } from "react-router-dom";
import starshipIcon from "../assets/starship.png";

import classes from "./StarshipItem.module.css";

const StarshipItem = (props) => {
  return (
    <React.Fragment>
      <div className="col-md-4">
        <div className={`card ${classes.card}`}>
          <div className="card-body">
            <div
              className={`d-flex flex-row justify-content-between align-items-center`}
            >
              <h5 className="card-title">{props.starshipName} </h5>
              <img src={starshipIcon} className="img-fluid" alt={props.starshipName} />
            </div>
            <div className={classes.meta_box}>
              <div>Model: {props.starshipModel}</div>
              <div>Hyperdrive rating: {props.starshipHyperdriveRating}</div>
              <div>Starship class: {props.starshipClass}</div>
              <div>Consumables: {props.starshipConsumables}</div>
            </div>
            <Link to={`/starships/${props.to}`}>View starship</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StarshipItem;
