import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Input from "./UI/Input";
import classes from "./Header.module.css";

const Header = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchError, setSearchError] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length < 4) {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
  };

  const handleBlur = () => {
    setSearchError(false);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (searchText.length < 4) {
      return;
    }

    document.getElementById("header-search-form").blur();

    history.push({
      pathname: "/search",
      search: `?search=${searchText}`,
      state: { searchText: searchText },
    });
  };

  useEffect(() => {
    if (location.pathname !== "/search") {
      setSearchText("");
    }
  }, [location.pathname]);

  const error = searchError ? "Enter at least 4 characters to search." : null;

  return (
    <div className={classes["container-fluid"]}>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none"
        >
          STAR WARS BANK &nbsp; <i className="fab fa-galactic-republic"></i>
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className={location.pathname.includes("people") ? classes.active : ""}>
            <Link to="/people" className="nav-link px-2 text-white">
              People
            </Link>
          </li>
          <li className={location.pathname.includes("planets")? classes.active : ""}>
            <Link to="/planets" className="nav-link px-2 text-white">
              Planets
            </Link>
          </li>
          <li className={location.pathname.includes("films") ? classes.active : ""}>
            <Link to="/films" className="nav-link px-2 text-white">
              Films
            </Link>
          </li>
          <li className={location.pathname.includes("species") ? classes.active : ""}>
            <Link to="/species" className="nav-link px-2 text-white">
              Species
            </Link>
          </li>
          <li className={location.pathname.includes("vehicles") ? classes.active : ""}>
            <Link to="/vehicles" className="nav-link px-2 text-white">
              Vehicles
            </Link>
          </li>
          <li className={location.pathname.includes("starships") ? classes.active : ""}>
            <Link to="/starships" className="nav-link px-2 text-white">
              Starships
            </Link>
          </li>
        </ul>

        <form
          className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
          autoComplete="off"
          onSubmit={handleSubmitSearch}
        >
          <Input
            type="search"
            placeholder="Search here..."
            id="header-search-form"
            value={searchText}
            onChange={handleSearch}
            onBlur={handleBlur}
          />
          <p className="text-center text-danger">{error}</p>
        </form>
      </header>
    </div>
  );
};

export default Header;
