import React from "react";
import "./../HeaderMain/HeaderMain.css";
const HeaderMain = () => {
  return (
    <main>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active text-center">
            <h1>Welcome to <br /> <span className='text-uppercase text-warning'>Travel Map</span></h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
