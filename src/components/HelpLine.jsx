import React from "react";
import { RxDividerVertical } from "react-icons/rx";

const HelpLine = () => {
  return (
    <div className="container mx-auto bg-blue-500">
      <div className="text-white text-center p-10">
        <div className="text-lg">Stay healthy and strong to enjoy life</div>
        <h1 className="text-4xl font-semibold ">
          We have team of healthcare experts
        </h1>
        <div className="mt-5 flex items-center justify-center font-semibold">
          <button className="bg-blue-700 p-2 px-10 rounded">
            Get in Touch
          </button>
          <span className="text-[40px] ">
            <RxDividerVertical />
          </span>
          <div className="">+91 898 777 9999</div>
        </div>
      </div>
    </div>
  );
};

export default HelpLine;
