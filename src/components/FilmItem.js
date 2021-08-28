import React from "react";
import filmIcon from "../assets/film.png";
import { Link } from "react-router-dom";

import classes from "./FilmItem.module.css";

const FilmItem = (props) => {
  return (
    <React.Fragment>
      <div className="col-md-4">
        <div className={`card ${classes.card}`}>
          <div className="card-body">
            <div
              className={`d-flex flex-row justify-content-between align-items-center`}
            >
              <h5 className="card-title">{props.filmTitle} </h5>
              <img src={filmIcon} className="img-fluid" alt={props.filmTitle} />
            </div>
            <div className={classes.meta_box}>
              <div>Episode: {props.filmEpisode}</div>
              <div>Director: {props.filmDirector}</div>
              <div>Release date: {props.filmReleaseDate}</div>
            </div>
            <Link to={`/films/${props.to}`}>Learn more</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FilmItem;
