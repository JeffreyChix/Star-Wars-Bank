import React, { useState, useEffect, useCallback } from "react";
import classes from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollHandler = useCallback(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  useEffect(() => {
    scrollHandler();
  }, [scrollHandler]);

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  const content = showButton ? (
    <span className={classes["to-top"]} onClick={scrollToTop}>
      <i className="fa fa-angle-up"></i>
    </span>
  ) : (
    <React.Fragment></React.Fragment>
  );
  return content;
};

export default ScrollToTopButton;
