import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className=" h-min  bg-cover bg-no-repeat relative flex flex-nowrap">
      <div className="">
      
        <img src={require("../assets/home/bg 1.jpg")} alt="" />
      </div>
      <div className="absolute inset-0 left-0 top-0 h-full w-full container mx-auto ">
        <div className=" ">
          <div className="text-white font-medium flex gap-4 mt-16 ml-8">
            <div className="flex items-center gap-2">
              Home <IoIosArrowForward className="text-red-600 text-xl mt-1" />
            </div>
            <div className="flex items-center gap-2">
              Treatments{" "}
              <IoIosArrowForward className="text-red-600 text-xl mt-1" />
            </div>
            <div className="flex items-center gap-2">
              Orthopedics{" "}
              <IoIosArrowForward className="text-red-600 text-xl mt-1" />
            </div>
            <div className="">Knee Replacement</div>
          </div>

          <h1 className="absolute inset-0 top-28 text-white text-5xl font-semibold ml-7 ">
            Total Knee Replacement
          </h1>
          <div className="absolute inset-0 top-48 text-white ml-8">
            Total Knee replacement is a surgery to remove and replace the whole{" "}
            <br />
            damaged Knee joint with an artificial joint.
          </div>
        </div>
        <div className="absolute top-72 ml-8">
          <button className="px-5 bg-blue-500 text-white p-2 font-semibold rounded">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
