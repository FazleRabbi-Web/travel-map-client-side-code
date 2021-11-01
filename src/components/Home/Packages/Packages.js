import React from "react";
import "./Packages.css";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SinglePackage = ({ packge }) => {
  const { _id, location, wholePrice, priceFraction, rating, img } = packge;
  return (
    <div className="package pb-3">
      <img src={img} className="packageImg" />
      <div className="p-3">
        <h2 className="text-warning fw-bold text-center text-uppercase">
          {location}
        </h2>
        <div className="d-flex">
          <h5>Price:${priceFraction}</h5>
          <h5>
            <del className="text-danger ms-1">${wholePrice}</del>
          </h5>
        </div>
        <Rating
          initialRating={rating}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly
        ></Rating>
        <br />
        <Link to={`/packges/${_id}`}>
          <button className="btn btn-warning fw-bold ">
            Book for {location.toLowerCase()}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePackage;
