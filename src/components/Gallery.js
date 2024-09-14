import React, { useState } from "react";
import staffImage from "../assets/images/staff.png";
import staffImage02 from "../assets/images/staff02.png";
import "../styles/components/Gallery.css";

const Gallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (index) => {
    if (expandedImage === index) {
      setExpandedImage(null); // Collapse the image if already expanded
    } else {
      setExpandedImage(index); // Expand the clicked image
    }
  };

  const images = [
    { src: staffImage, alt: "Image 1 description" },
    { src: staffImage02, alt: "Image 2 description" },
  ];

  return (
    <div className="gallery-container">
      <h1>ギャラリー</h1>
      <p>店内や料理の写真をご覧ください。</p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-item ${expandedImage === index ? "expanded" : ""}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
      {expandedImage !== null && (
        <div className="overlay" onClick={() => setExpandedImage(null)}></div>
      )}
    </div>
  );
};

export default Gallery;
