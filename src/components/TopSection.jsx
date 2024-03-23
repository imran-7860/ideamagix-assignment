import React from "react";

const TopSection = () => {
  return (
    <div className="container mx-auto flex justify-between items-center bg-white  gap-4 ">
      <div className="">
        <img
          src={require("../assets/topsection/aafiya m.png")}
          alt=""
          className="w-[100%] max-w-[300px]"
        />
      </div>
      <div className="">
        <img
          src={require("../assets/topsection/dr Img.webp")}
          alt=""
          className="h-[100%] w-[50px]"
        />
      </div>
      <div className="flex items-center gap-2">
        <img
          src={require("../assets/topsection/logo2.png")}
          alt=""
          className="h-[50px] w-[50px]"
        />
        <div className="">
          <div>Second Medical Opinion</div>
          <div className="font-semibold">Book Consultation</div>
        </div>
      </div>

      <div className="flex items-center gap-2 ">
        <img
          src={require("../assets/topsection/callLogo.png")}
          alt=""
          className="h-[40px] w-[40px]"
        />
        <div className="">
          <div>Call Us On</div>
          <div className="font-semibold">985 896 2222</div>
        </div>
      </div>

      <div className="flex items-center gap-2 ">
        <img
          src={require("../assets/topsection/email.png")}
          alt=""
          className="h-[40px] w-[40px]"
        />
        <div className="">
          <div>Email Us On</div>
          <div className="font-semibold">info@mediretreats.com</div>
        </div>
      </div>

    
    </div>
  );
};

export default TopSection;
