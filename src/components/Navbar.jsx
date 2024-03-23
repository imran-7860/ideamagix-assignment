import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <nav className="container mx-auto flex justify-between items-center  text-white  w-full">
        <div className="flex gap-6 text-lg font-medium">
          <Link to="/" className="ml-8">Home</Link>
          <Link to="/about" className="">About Us</Link>
          <Link to="/treatments" className="">Treatments +</Link>
          <Link to="/destination" className="">Destinations +</Link>
          <Link to="/hospitals" className="">Hospitals</Link>
          <Link to="/faq" className="">FAQS</Link>
          <Link to="/blog" className="">Blog</Link>
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
