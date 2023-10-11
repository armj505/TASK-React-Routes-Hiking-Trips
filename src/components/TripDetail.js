import React from "react";
import tripsData from "../tripsData";
import { useParams, Navigate } from "react-router-dom";

function TripDetail() {
  const { tripSlug } = useParams();
  const trips = tripsData.find((trip) => {
    return trip.slug === tripSlug;
  });
  if (!trips) {
    return <Navigate to="/Home" replace />;
  }
  return (
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {trips.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={trips.img}
                  alt="..."
                />
                <p className="mb-4">
                  City : {trips.city}
                  <br />
                  Length : {trips.length1}Km
                  <br />
                  Rating : {trips.rating}
                  <br />
                  Difficulty : {trips.difficulty}
                  <br />
                  Details : {trips.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
