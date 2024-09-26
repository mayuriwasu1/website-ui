import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
const images = [
  "/images/leady.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/152229/slider-img-2.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/152229/slider-img-3.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1 === images.length ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className=" mx-auto max-w-7xl px-6 lg:px-8">
      <div class="relative text-sm mb-8">
        <p class="bg-white px-2 text-lg text-[#EE011C] flex gap-4 items-center">
          <p className="w-12 h-px bg-[#EE011C]"></p>
          TESTIMONY FROM OUR PARTNERS
        </p>
      </div>
      <div className="image-slider-outer w-full">
        <div className="absolute bottom-8 right-32">
          <button
            className="prev py-2 px-5 hover:bg-red-600"
            onClick={nextSlide}
          >
            <ArrowRightIcon class="h-5 w-5 hover:h-5 hover:w-4" />
          </button>
          <button
            className="next py-2 px-5 hover:bg-red-600 hover:text-white"
            onClick={prevSlide}
          >
            <ArrowLeftIcon class="h-5 w-5 " />
          </button>
        </div>
        <div
          className="image-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              className={`image-slide flex gap-[30px] ${
                currentIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div className="silderImage ">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-72 sm:h-full"
                />
              </div>
              <div className="relative pb-24">
                <p className="text-sm sm:text-xl text-medium text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non
                </p>
                <div className="absolute bottom-2 w-8/12 hidden sm:block">
                  <p className="text-2xl font-bold">
                    Lissa Smith, <span className="text-base">VYMO</span>
                  </p>
                  <p className="uppercase text-gray-500">
                    Director of Marketing and Communications
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider