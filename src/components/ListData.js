import React from "react";
import Card from "./UI/Card";

const ListData = () => {
  return (
    <React.Fragment>
      <h3 className="heading text-center p-2">All Resources</h3>
      <div className="row">
        <div className="col-md-4">
          <Card
            title="People"
            text="A People resource is an individual person or character within the Star Wars universe."
            to="/people"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Films"
            text="A Film resource is a single film."
            to="/films"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Starships"
            text="A Starship resource is a single transport craft that has hyperdrive capability."
            to="/starships"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Vehicles"
            text="A Vehicle resource is a single transport craft that does not have hyperdrive capability."
            to="/vehicles"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Species"
            text="A Species resource is a type of person or character within the Star Wars Universe."
            to="/species"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Planets"
            text="A Planet resource is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY."
            to="/planets"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListData;
