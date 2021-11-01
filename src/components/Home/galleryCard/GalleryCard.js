import React from "react";
import '../galleryCard/GalleryCard.css'
const GalleryCard = ({ photo }) => {
  const { name, description, img} = photo;
  return (
    <div>
      <div class="card-columns">
        <div class="card">
          <img class="card-img-top" src={img}/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
