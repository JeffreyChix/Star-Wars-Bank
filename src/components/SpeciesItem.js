import React from "react";
import speciesIcon from "../assets/species.png";

import { Link } from "react-router-dom";

import classes from "./SpeciesItem.module.css";

const SpeciesItem = (props) => {
  return (
    <React.Fragment>
      <div className="col-md-4">
        <div className={`card ${classes.card}`}>
          <div className="card-body">
            <div
              className={`d-flex flex-row justify-content-between align-items-center`}
            >
              <h5 className="card-title">{props.speciesName} </h5>
              <img
                src={speciesIcon}
                className="img-fluid"
                alt={props.speciesName}
              />
            </div>
            <div className={classes.meta_box}>
              <div>Classification: {props.classification}</div>
              <div>Designation: {props.designation}</div>
              <div>Average Height: {props.averageHeight}</div>
            </div>
            <Link to={`/species/${props.to}`}>View species</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SpeciesItem;
