import React from "react";
import { Link } from "react-router-dom";

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`card ${classes.card}`}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <Link to={props.to}>View resource</Link>
      </div>
    </div>
  );
};

export default Card;
