import React from "react";
import { ImUserPlus } from "react-icons/im";
const FooterSection = () => {
  return (
    <div className="container mx-auto bg-[#0B2432] relative">
      <div className="flex flex-row justify-between items-center text-white p-10">
        <div>
          <h1 className="text-xl">Important Links</h1>
          <ul className="mt-5 flex flex-col gap-1">
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Home
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>About Us
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>FAQs
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Blog
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Contact Us
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl mt-14">Top Hospitals</h1>
          <ul className="mt-5 flex flex-col gap-1">
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Apollo Hospital
              Delhi
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Medanta Hospital
              Gurgaon
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Max Hospital Delhi
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Jaslok Hospital
              Mumbai
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Artemis Hospital
              Gurgaon
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Fortis Hospital
              Gurgaon
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>View All
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl mt-14">Speciality Treatments</h1>
          <ul className="mt-5 flex flex-col gap-1">
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Knee Replacement
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Urologist
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Spine Surgeon
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>ENT Surgeons
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Orthopaedics
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>Cardiologist
            </li>
            <li>
              <span className="text-[#4992ff] mr-2">-</span>View All
            </li>
          </ul>
        </div>

        <div>
          <div className="absolute rounded inset-0 left-[960px] -top-16 h-40 mr-4 bg-white text-black p-5">
            <div className="flex gap-2">
              <div className="text-4xl">
                <ImUserPlus className="text-blue-500" />
              </div>
              <div>
                Are you doctor / hospital?{" "}
                <span className="text-lg font-bold">Join Mediretreats</span>
              </div>
            </div>
            <div className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              doloremque.
            </div>
          </div>
          <div className="mt-16">
            <h1 className="text-xl">Medical Tourism Destination</h1>
            <ul className="mt-5 flex flex-col gap-1">
              <li>
                <span className="text-[#4992ff] mr-2">-</span>Medical Tourism in
                India
              </li>
              <li>
                <span className="text-[#4992ff] mr-2">-</span>Medical Tourism in
                Sri Lanka
              </li>
              <li>
                <span className="text-[#4992ff] mr-2">-</span>Medical Tourism in
                UAE
              </li>
              <li>
                <span className="text-[#4992ff] mr-2">-</span>View All
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="text-gray-400 text-4xl w-[70%] ml-40" />
      <div className="flex flex-row justify-between items-center text-white p-10 gap-10">
        <div className="">
          <img src={require("../assets/footer/logo.png")} alt="" />
        </div>
        <div className="">
          <div>About Aafiya Mediretreats</div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            vero dolor veritatis, saepe quas commodi autem vitae, earum
            accusantium doloribus aliquid.
          </div>
        </div>
        <div className="">
          <h3>Follow Us On</h3>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div>
              <img
                src={require("../assets/footer/facebook.png")}
                alt=""
                className="h-10 w-10"
              />
            </div>
            <div>
              <img
                src={require("../assets/footer/twitter.png")}
                alt=""
                className="h-10 w-10"
              />
            </div>
            <div>
              <img
                src={require("../assets/footer/instagram.png")}
                alt=""
                className="h-10 w-10"
              />
            </div>
            <div>
              <img
                src={require("../assets/footer/youtube.png")}
                alt=""
                className="h-10 w-10"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="">Customer Service</div>
            <div className="text-[#4992ff] font-semibold">+91 9856555666</div>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 flex text-white justify-between items-center p-5 font-medium">
        <div>
          Copyright &copy; 2020 Aafiya Mediretreats. All Rights Reserved. Design
          By Imran Ansari.
        </div>
        <div>Tearms And Conditions &nbsp; &nbsp; &nbsp; Privacy Policy</div>
      </div>
    </div>
  );
};

export default FooterSection;
