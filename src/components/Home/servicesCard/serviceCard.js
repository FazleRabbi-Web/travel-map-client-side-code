import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faUtensils, faBullhorn, faGlobeAsia, faPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./serviceCard.css";

const ServiceCard = (props) => {
  const { name,img, description,  } = props.service;

  return (
    <div className="mb-5 col-lg-4 col-sm-6 ">
      <div className="card shadow-lg text-center rounded serviceCard">
        <div className="d-flex justify-content-center align-items-center p-2">
          <img src={img} className='img'/>
        </div>
        <div className="card-body">
          <h5 className="card-title text-warning">{name}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
