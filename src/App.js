import React, { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import ScrollToTopButton from "./components/UI/ScrollToTopButton";

import Home from "./components/pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const People = React.lazy(() => import("./components/pages/People"));
const Films = React.lazy(() => import("./components/pages/Films"));
const SingleFilm = React.lazy(() => import("./components/pages/SingleFilm"));
const Species = React.lazy(() => import("./components/pages/Species"));
const SingleSpecies = React.lazy(() =>
  import("./components/pages/SingleSpecies")
);
const Planets = React.lazy(() => import("./components/pages/Planets"));
const Planet = React.lazy(() => import("./components/pages/Planet"));
const Vehicles = React.lazy(() => import("./components/pages/Vehicles"));
const Vehicle = React.lazy(() => import("./components/pages/Vehicle"));
const Starships = React.lazy(() => import("./components/pages/Starships"));
const Starship = React.lazy(() => import("./components/pages/Starship"));
const Person = React.lazy(() => import("./components/pages/Person"));
const Search = React.lazy(() => import("./components/pages/Search"));
const About = React.lazy(() => import("./components/pages/About"));
const AboutCreator = React.lazy(() =>
  import("./components/pages/AboutCreator")
);
const Contact = React.lazy(() => import("./components/pages/Contact"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));

const App = () => {
  return (
    <ErrorBoundary>
      <div className="project-wrapper">
        <Router>
          <ScrollToTop />
          <Header />
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route path="/" exact component={Home} />

              <Route path="/people" exact component={People} />
              <Route path="/people/:id" exact component={Person} />

              <Route path="/films" exact component={Films} />
              <Route path="/films/:id" exact component={SingleFilm} />

              <Route path="/species" exact component={Species} />
              <Route path="/species/:id" exact component={SingleSpecies} />

              <Route path="/planets" exact component={Planets} />
              <Route path="/planets/:id" exact component={Planet} />

              <Route path="/vehicles" exact component={Vehicles} />
              <Route path="/vehicles/:id" exact component={Vehicle} />

              <Route path="/starships" exact component={Starships} />
              <Route path="/starships/:id" exact component={Starship} />

              <Route path="/about" exact component={About} />

              <Route path="/about-the-creator" exact component={AboutCreator} />

              <Route path="/contact" exact component={Contact} />

              <Route path="/search" exact component={Search} />

              <Route path="*" component={NotFound} />
            </Switch>
          </Suspense>
          <div className="footer-wrapper">
            <Footer />
          </div>
        </Router>
        <ScrollToTopButton />
      </div>
    </ErrorBoundary>
  );
};

export default App;
