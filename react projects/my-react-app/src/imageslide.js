import React, { useState } from 'react';
import Image1 from './1.jpg';
import Image2 from './2.jpg';
import Image3 from './3.jpg';
import Image4 from './4.jpg';
import Image5 from './5.jpg';
import Image6 from './6.png';
import './App.css'; // Import CSS file

const ImageSlider = () => {
  const images = [
    { id: 1, url: Image1 },
    { id: 2, url: Image2 },
    { id: 3, url: Image3 },
    { id: 4, url: Image4 },
    { id: 5, url: Image5 },
    { id: 6, url: Image6 },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="image-slider">
      <h1>Image Slider</h1>
      <button className="button" onClick={handlePrev}>Previous</button>
      <img src={images[activeIndex].url} alt={`Slide ${activeIndex + 1}`} />
      <button className="button" onClick={handleNext}>Next</button>
     {/*  <div className="option-circles">
        {images.map((image, index) => (
          <span
            key={image.id}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
