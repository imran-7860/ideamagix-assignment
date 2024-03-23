import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="bg-blue-500 mx-auto flex justify-start items-center  text-white  w-full">
        <div className="flex gap-6 text-lg font-medium">
          <div className="ml-8">Home</div>
          <div className="">About Us</div>
          <div className="">Treatments +</div>
          <div className="">Destinations +</div>
          <div className="">Hospitals</div>
          <div className="">FAQS</div>
          <div className="">Blog</div>
          <div className="">Request A Quote</div>
        </div>

        <div className="flex items-center p-4 bg-blue-700 ml-20  gap-1 text-lg">
          <CiSearch className="text-xl " />
          <input
            type="text"
            placeholder="Search"
            className="bg-blue-700 placeholder:text-gray-100 outline-none"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
