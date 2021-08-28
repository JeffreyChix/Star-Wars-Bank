import React from "react";
import vehicleIcon from "../assets/vehicle.png";

import { Link } from "react-router-dom";

import classes from "./VehicleItem.module.css";

const VehicleItem = (props) => {
  return (
    <React.Fragment>
      <div className="col-md-4">
        <div className={`card ${classes.card}`}>
          <div className="card-body">
            <div
              className={`d-flex flex-row justify-content-between align-items-center`}
            >
              <h5 className="card-title">{props.vehicleName} </h5>
              <img
                src={vehicleIcon}
                className="img-fluid"
                alt={props.vehicleName}
              />
            </div>
            <div className={classes.meta_box}>
              <div>Model: {props.vehicleModel}</div>
              <div>Manufacturer: {props.vehicleManufacturer}</div>
              <div>Length: {props.vehicleLength}</div>
              <div>Cargo capacity: {props.vehicleCargoCapacity}</div>
            </div>
            <Link to={`/vehicles/${props.to}`}>View vehicle</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VehicleItem;
