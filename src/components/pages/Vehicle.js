import React, { useState, useEffect, useCallback } from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";
import Accordion from "../UI/Accordion";

import classes from "./Vehicle.module.css";

import useGetNames from "../../hooks/useGetNames";

const Vehicle = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [vehicle, setVehicle] = useState({});
  const [error, setError] = useState(null);

  const [films, setFilms] = useGetNames();
  const [pilots, setPilots] = useGetNames();

  const fetchVehicle = useCallback(async () => {
    setLoading(true);
    const vehicleID = match.params.id;
    try {
      const response = await fetch(
        `https://swapi.dev/api/vehicles/${vehicleID}`
      );
      const data = await response.json();
      setVehicle(data);
      setFilms(data.films);
      setPilots(data.pilots);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [match.params.id, setFilms, setPilots]);

  useEffect(() => {
    fetchVehicle();
  }, [fetchVehicle]);

  return (
    <React.Fragment>
      <Hero
        title={vehicle.name}
        subText={`Manufacturer: ${vehicle.manufacturer}`}
      />
      <Section>
        {!error ? (
          <div className="container-fluid">
            <div className={`row ${classes.vehicle_details_box}`}>
              <div className={`col-md-12 ${classes.sidebar}`}>
                <div className={classes.meta_box}>
                  <h3 className="meta_box_heading">General Info</h3>
                  {loading ? (
                    <div className="text-center fa-3x">
                      <i className="fas fa-cog fa-spin"></i>
                    </div>
                  ) : (
                    <React.Fragment>
                      <div>Name: {vehicle.name}</div>
                      <div>Model: {vehicle.model}</div>
                      <div>Manufacturer: {vehicle.manufacturer}</div>
                      <div>Cost in Credits: {vehicle.cost_in_credits}</div>
                      <div>Length: {vehicle.length}</div>
                      <div>
                        Max Atmosphering Speed: {vehicle.max_atmosphering_speed}
                      </div>
                      <div>Crew: {vehicle.crew}</div>
                      <div>Passengers: {vehicle.passengers}</div>
                      <div>Cargo Capacity: {vehicle.cargo_capacity}</div>
                      <div>Consumables: {vehicle.consumables}</div>
                      <div>Vehicle Class: {vehicle.vehicle_class}</div>
                    </React.Fragment>
                  )}
                </div>
                <Accordion
                  resources={[
                    { name: "Pilots", cat: "people", value: pilots },
                    { name: "Films", cat: "films", value: films },
                  ]}
                />
              </div>
            </div>
          </div>
        ) : (
          <Error errorMessage={error.message} />
        )}
      </Section>
    </React.Fragment>
  );
};

export default Vehicle;
