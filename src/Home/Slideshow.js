import React, { useState, useEffect } from "react";
import Image1 from "../FullSizeRender.png";
import Image2 from "../IMG_6568.png";
import Image3 from "../IMG_2659.png";
import Image4 from "../IMG_5204.png";
import Image5 from "../IMG_5043.png";

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [Image1, Image2, Image3, Image4, Image5];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Automatically move to the next slide every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2500);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  });

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition-transform duration-500 ease-in-out transform -translate-x-full ${
          currentSlide === 0 ? "translate-x-0" : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-[calc(100vh-72px)] flex-shrink-0 object-cover"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="text-[#DDE6ED] bg-[#352F44] p-4 rounded-full absolute top-1/2 left-2 transform -translate-y-1/2 text-5xl"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="text-[#DDE6ED] bg-[#352F44] p-4 rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 text-5xl"
      >
        ❯
      </button>
    </div>
  );
};

export default SlideShow;
