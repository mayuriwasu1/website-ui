import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
const userData = [
  {
    src: "/images/leady.png",
    name: "Leady Alpha",
    role: "Manager",
    jobTitle: "Project Manager",
    description: "A diligent project manager who ensures that all projects are delivered on time and within scope. Leady Alpha has over 10 years of experience leading cross-functional teams and implementing effective project management strategies. With a keen eye for detail, she is known for her ability to mitigate risks before they become issues and streamline processes to improve efficiency. In her free time, she mentors junior managers and contributes to industry blogs.",
  },
  {
    src: "/images/leady5.jpg",
    name: "Leady Beta",
    role: "Developer",
    jobTitle: "Lead Developer",
    description: "An expert developer with a passion for clean code and innovative solutions. Leady Beta has been instrumental in leading large-scale projects, consistently delivering robust, scalable code. As a team leader, he encourages collaborative problem-solving and fosters an environment of continuous learning. Outside of work, he contributes to open-source projects and frequently speaks at tech conferences about the latest in full-stack development. He’s also a big advocate for clean architecture and sustainable development practices.",
  },
  {
    src: "/images/leady6.jpg",
    name: "Leady Gamma",
    role: "Designer",
    jobTitle: "UX Designer",
    description: "A creative UX designer focused on creating intuitive and user-friendly designs. Leady Gamma excels at turning complex requirements into simple, elegant user interfaces. She has designed for various industries, from tech startups to Fortune 500 companies, always keeping the user at the center of the design process. With strong skills in both research and visual design, Leady Gamma ensures that every design choice is backed by data. In her downtime, she enjoys writing about design trends and teaching design workshops to aspiring designers.",
  },
];



const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1 === userData.length ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + userData.length) % userData.length
    );
  };

  return (
    <div className=" mx-auto max-w-7xl px-6 lg:px-8 mt-16 sm:mt-28">
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
            <ArrowRightIcon class="h-5 w-5 font-bold" />
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
          {userData.map((item, index) => (
            <div
              className={`image-slide flex gap-[30px] ${
                currentIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div className="silderImage ">
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[20rem] sm:h-full"
                />
              </div>
              <div className="relative pb-24">
                <p className="text-sm sm:text-xl text-medium text-gray-700">
                 {item.description}
                </p>
                <div className="absolute bottom-2 w-8/12 hidden sm:block">
                  <p className="text-2xl font-bold">
                    {item.name} <span className="text-base">{item.role}</span>
                  </p>
                  <p className="uppercase text-gray-500">
                    {item.jobTitle}
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