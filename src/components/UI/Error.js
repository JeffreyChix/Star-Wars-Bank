import React, { useState } from "react";
import Button from "./Button";

import classes from "./Error.module.css";

const Error = (props) => {
  const [buttonText, setButtonText] = useState("Refresh page");

  const refreshPage = () => {
    setButtonText("Refreshing...");
    window.location.reload();
  };

  return (
    <div className={`container-fluid ${classes.error_container}`}>
      <div className={classes.error_box}>
        <div className={`card ${classes.card}`}>
          <div className={`card-header ${classes["card-header"]}`}></div>
          <div className={`card-body text-center ${classes["card-body"]}`}>
            <div className={`card-text ${classes["card-text"]}`}>
              <h3>Sorry, something went wrong!</h3>
              <p>{props.errorMessage}</p>
            </div>
            <Button className={`btn ${classes.button}`} onClick={refreshPage}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
