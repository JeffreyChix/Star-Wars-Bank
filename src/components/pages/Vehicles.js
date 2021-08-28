import React from "react";
import Hero from "../Hero";
import Section from "../UI/Section";
import Error from "../UI/Error";

import VehicleItem from "../VehicleItem";
import Paginationv2 from "../Paginationv2";

import useGetID from "../../hooks/useGetID";
import useFetchStarWars from "../../hooks/useFetchStarWars";

const Vehicles = (props) => {
  const getVehicleID = useGetID();
  const {
    loading,
    error,
    resourceData: vehicles,
    resourceCount: totalVehicles,
  } = useFetchStarWars(props, "vehicles");

  return (
    <React.Fragment>
      <Hero
        title="All Vehicles in the Star Wars Universe"
        subText="No hyperdrive capability"
      />
      <Section>
        {!error ? (
          <div>
            <h1 className="heading text-center p-4 mb-2">
              {totalVehicles} Total Vehicles
            </h1>
            <div className="row mb-4">
              {loading ? (
                <div className="text-center fa-3x">
                  <i className="fas fa-cog fa-spin"></i>
                </div>
              ) : (
                vehicles.map((vehicle) => {
                  return (
                    <VehicleItem
                      key={vehicle.name}
                      vehicleName={vehicle.name}
                      vehicleModel={vehicle.model}
                      vehicleManufacturer={vehicle.manufacturer}
                      vehicleLength={vehicle.length}
                      vehicleCargoCapacity={vehicle.cargo_capacity}
                      to={getVehicleID(vehicle.url)}
                    />
                  );
                })
              )}
            </div>
            <div className="container-fluid">
              <div className="col-md-12">
                <Paginationv2
                  total={totalVehicles}
                  page={props.history.location.search}
                  resource="vehicles"
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

export default Vehicles;
