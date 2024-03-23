import React from "react";

const Form = () => {
  return (
    <div className="">
      <form className="flex flex-col justify-center shadow-xl p-10 rounded-md gap-7 max-w-[360px]  mt-5">
        <h1 className="text-4xl text-blue-500 font-serif">Need Help ?</h1>
        <div>Just let us know. We will be happy to assist you.</div>
        <input
          type="text"
          required
          placeholder="Full Name"
          className="outline-none border border-gray-200 p-2"
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="outline-none border border-gray-200 p-2"
        />
        <input
          type="tel"
          required
          placeholder="Phone Number"
          className="outline-none border border-gray-200 p-2"
        />
        <button className="bg-blue-500 text-white  rounded p-2 px-10" type="submit">
          Send Enquiry
        </button>
      </form>
    </div>
  );
};

export default Form;
