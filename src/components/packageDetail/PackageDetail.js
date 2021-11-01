import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PackageDetail = () => {
  const { packgeId } = useParams();
  const [service, setService] = useState({});
  const { _id, location, wholePrice, priceFraction, description, img } =
    service;
  useEffect(() => {
    fetch(`http://localhost:5000/packges/${packgeId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="container mb-3">
      <div className="text-center">
        <img src={img} className="w-50 text-center mt-3" />
      </div>
      <div className="container">
        <h1 className="text-uppercase text-center">{location}</h1>
        <p>
          <span className="text-uppercase fw-bold text-left">
            About {location}:
          </span>{" "}
          {description}
        </p>
        <p className="fw-bold">
          New Price: ${priceFraction}{" "}
          <del className="text-danger">${wholePrice}</del>
        </p>
        <Link to={`/booking/${_id}`}>
          <button className="btn btn-warning fw-bold text-uppercase">
            Book for {location}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PackageDetail;
