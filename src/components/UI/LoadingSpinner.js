import React from "react";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.loading_spinner}>
      <div className="text-center fa-4x">
        <i className="fas fa-circle-notch fa-spin"></i>
      </div>
    </div>
  );
};

export default LoadingSpinner;
