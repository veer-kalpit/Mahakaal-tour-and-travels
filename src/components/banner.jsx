import { useState, useEffect } from "react";
import Bus from "../../public/Bus.png";
import Ertiga from "../../public/ertiga.png";
import I20 from "../../public/i20.png";

const Banner = () => {
  const images = [Bus, Ertiga, I20]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden h-[400px]">
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((Image, index) => (
          <div
            key={index}
            className="min-w-full h-[50vh] flex justify-center items-center"
          >
            <img
              src={Image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
