import React, { useEffect, useState } from "react";
import GalleryCard from "../galleryCard/GalleryCard";


const Gallery = () => {
  const [photos, setPhoto] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => setPhoto(data));
  }, []);
  return (
    <div className="container my-5">
      <h2 className=" mt-5 text-warning text-center mb-5">Gallery</h2>
      <div className="package-container">
        {photos.map(photo => (
          <GalleryCard key={photo.key} photo={photo}></GalleryCard>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
