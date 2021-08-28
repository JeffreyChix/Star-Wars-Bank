import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`form-control form-control-dark ${props.className} ${classes.input}`}
      onChange={props.onChange}
    />
  );
});

export default Input;
