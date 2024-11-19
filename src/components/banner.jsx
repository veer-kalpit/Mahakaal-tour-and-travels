import { useState, useEffect } from "react";
import Bus from "../assets/Images/traveller.png";
import Ertiga from "../assets/Images/ertiga.png";
import I20 from "../assets/Images/i20.png";
import Swift from "../assets/Images/Swift.png";

const Banner = () => {
  const images = [I20, Ertiga, Bus, Swift]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden h-[100%] justify-center items-center self-center text-center">
      <div className="text-center">
        <h1 className="text-[20px] lg:text-[40px] font-Dancing">
          Creating unforgettable{" "}
          <span className=" font-Doto font-bold">Travel experiences</span>
          <br />
          <span className="lg:ml-40">
            {" "}
            Turning moments into{" "}
            <span className=" font-Doto font-bold">lifelong memories</span>
          </span>
        </h1>
      </div>

      <div
        className="flex transition-transform duration-700 "
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
              className="w-full h-full object-contain p-10 "
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href="tel:+918815212323"
          className="h-[70px] w-[150px] rounded-[50px] border-[2px] border-[#cecece] text-center mb-10 p-2 font-Doto font-extrabold flex items-center justify-center self-center"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
