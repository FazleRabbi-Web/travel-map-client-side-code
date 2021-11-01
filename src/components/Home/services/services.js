import React, { useEffect, useState } from "react";
import ServiceCard from "../servicesCard/serviceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <section id="book-ride" className="mt-5 container">
      <h2 className="text-center fw-bolder mb-3">
        Our <span className='text-warning'>Services</span>
      </h2>
    
      <div className="row">
        {services.map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
