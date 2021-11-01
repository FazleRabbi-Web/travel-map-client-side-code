import React from "react";
import '../Review/Review.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  return (
    <div className='container'>
      <h1 className="text-center my-3 fw-bold ">
        <span className="text-warning">R</span>EVIEWS
      </h1>
      <div className="card-group">
        <div className="card m-2 p-2  text-center border border-warning">
          <img
            src="https://cdn.discordapp.com/attachments/903990063979974686/903990131449561118/pic2.png"
            className="card-img-top rounded-circle w-50 mx-auto"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">john deo</h5>
            <p className="card-text">
              Our trip to Morocco was truly a once-in-a-lifetime experience and
              we are so grateful to everyone that made it happen seamlessly. Our
              travel planner, Jaouad, was incredible. After reading our initial
              request and speaking with us on the phone, he designed a tour
              perfectly custom to what our interests were.
            </p>
          </div>
        </div>
        <div className="card m-2 p-2  text-center border border-warning">
          <img
            src="https://cdn.discordapp.com/attachments/903990063979974686/903990132573626449/pic3.png"
            className="card-img-top  rounded-circle w-50 mx-auto"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> Isabella</h5>
            <p className="card-text">
              Fantastic! Our Costa Rica travel company took care of everything.
              The owner and his wife met us at the airport with a care package
              of coffee and chocolate. It was such a nice welcome. Our drivers
              to and from the resort were great.
            </p>
          </div>
        </div>
        <div className="card m-2 p-2 text-center border border-warning">
          <img
            src="https://cdn.discordapp.com/attachments/903990063979974686/903990134528147456/pic4.png"
            className="card-img-top rounded-circle w-50 mx-auto"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Jayden</h5>
            <p className="card-text">
              This was a tour that was over two years in the making as it was
              delayed a full year when the world stopped vacation travel due to
              Covid. As it was, Ireland had only opened indoor dining and lifted
              a number of pandemic restrictions only weeks before we arrived in
              early September.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
