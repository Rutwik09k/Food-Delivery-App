import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Hero() {
  const imgData = [
    {
      url: "https://imgs.search.brave.com/zxZY5AHV1-8MFZqxHtk4EOVTT0WI407DK3vfRSyGTSk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MC8wOS8xOS8yOS9l/YXQtMjgzNDU0OV82/NDAuanBn",
    },
    {
      url: "https://imgs.search.brave.com/kkuoXnzhX1sUGLTJeXTKUW-UQFq9uMPucwSlTUZdiS0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8x/MS8wNS8xNS81Ny9z/YWxtb24tNTE4MDMy/XzY0MC5qcGc",
    },
    {
      url: "https://imgs.search.brave.com/Q8mhBQH7OnVYZvdlWGi0ac3wHhFq20yMdGBeH-oOD5k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93aGl0ZS1wbGF0/ZS13aXRoLWRlbGlj/aW91cy1hc3NvcnRt/ZW50LW1lYXQtdmVn/ZXRhYmxlcy1wZXJm/ZWN0LWZvb2QtYmxv/Z3MtcmVzdGF1cmFu/dC1tZW51c18xMjcw/NjMzLTMxMzgyLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
    },
  ];

  const [slider, setSlider] = useState(0);

  const handlePlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  const handleMinus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const sliderClear = setInterval(() => {
      handlePlus();
    }, 3000);

    return () => clearInterval(sliderClear);
  }, [slider]);

  return (
    <div className="relative w-full h-[80vh] my-4 md:my-10">
      {imgData.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-500 ${slider === i ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={item.url}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
        </div>
      ))}
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-semibold text-xl md:text-3xl">
        Welcome to the World of Tasty & Fresh Food
      </p>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex justify-between w-full px-4 md:px-8 text-white">
        <FaChevronLeft
          className="cursor-pointer"
          size={"30px"}
          onClick={handleMinus}
        />
        <FaChevronRight
          className="cursor-pointer"
          size={"30px"}
          onClick={handlePlus}
        />
      </div>
    </div>
  );
}

export default Hero;
