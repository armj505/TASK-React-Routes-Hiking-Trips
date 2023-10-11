import React, { useState } from "react";
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";
import { useSearchParams } from "react-router-dom";

function TripsList() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get(`filter`);
  console.log(filter);

  const searchedTrips =
    query !== ""
      ? tripsData.filter((trip) =>
          trip.name.toLowerCase().includes(query.toLowerCase())
        )
      : tripsData;
  console.log(searchedTrips);

  const trips =
    filter !== null
      ? searchedTrips
          .filter((trip) => trip.difficulty.includes(filter))
          .map((trip, index) => <TripItem trip={trip} key={index} />)
      : searchedTrips.map((trip, index) => (
          <TripItem trip={trip} key={index} />
        ));
  console.log(trips);

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <center>
          <button
            onClick={() => {
              setSearchParams({ filter: "easy" });
            }}
            className="btn btn-primary btn-xl"
          >
            Easy
          </button>
          <button
            onClick={() => {
              setSearchParams({ filter: "moderate" });
            }}
            className="btn btn-primary btn-xl"
          >
            Moderate
          </button>
          <button
            onClick={() => {
              setSearchParams({ filter: "hard" });
            }}
            className="btn btn-primary btn-xl"
          >
            Hard
          </button>
        </center>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">{trips}</div>
      </div>
    </section>
  );
}

export default TripsList;
