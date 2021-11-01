import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import "../Book/Book.css";
import useAuth from "../../../hooks/useAuth";

const Book = () => {
  const { user } = useAuth();
  const { packgeId } = useParams();
  const [service, setService] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { _id, location, wholePrice, priceFraction, description, img } =
    service;
  useEffect(() => {
    fetch(`http://localhost:5000/packges/${packgeId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/book", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset()
      }
    });
  };
  return (
    <div>
      <div className='mb-3 py-3 text-center'>
      <h2>
        Book Your Trip to go{" "}
        <span className="text-warning text-uppercase">{location}</span>
      </h2>
      <img className="w-50" src={img} alt="" />
      </div>
      <div className='book-form container'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label className='me-2 fw-bold'>Your Email:</label> <br />
        <input type="email" value={user.email} /> <br />
        <label className='me-2 fw-bold'>Your Name:</label> <br />
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Your Name"
        /> <br />
        <label className='me-2 fw-bold'>Tell us About you:</label> <br />
        <textarea {...register("description")} placeholder="Tell Us About you" /> <br />
        <label className='me-2 fw-bold'>Tour Cost: $</label> <br />
        <input type="text" {...register("price")} placeholder="price" value={priceFraction}/> <br />
        <label className='me-2 fw-bold'>Your Photo URL</label> <br />
        <input {...register("img")} placeholder="image url" /> <br />
        <input type="submit" value='Confirm Your Booking' className='border bg-warning p-1 fw-bold'/>
      </form>
      </div>
    </div>
  );
};

export default Book;
