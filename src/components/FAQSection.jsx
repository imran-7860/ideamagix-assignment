import React from "react";
import { RxDividerVertical } from "react-icons/rx";
const FAQSection = () => {
  return (
    <div id="FAQs" className="container mx-auto">
      <div className=" ">
        <div className="p-10">
          <h1 className="text-4xl font-semibold mt-10 ">
            Treatment FAQs<span className="text-red-500 text-3xl">.</span>
          </h1>
          <hr className="mt-4 mb-4 border-[1.8px]" />
          <div className="gap-4 flex items-center mb-4">
            <span className="text-blue-600 text-xl font-semibold">+</span>How so
            I know the clinic I am searching is verified?
          </div>

          <hr className="mb-4 border-[1.8px]" />

          <div className="gap-4 flex items-center mb-4">
            <span className="text-blue-600 text-xl font-semibold ">+</span>I
            can't travel alone so can some family member or friend of mine
            accompany me?
          </div>

          <hr className="mb-4 border-[1.8px]" />
          <div className="gap-4 flex items-center mb-4">
            <span className="text-blue-600 text-2xl font-semibold">-</span>Can I
            see my doctor before I decide and what about my post recovery?
          </div>
          <hr className="mb-4 border-[1.8px] border-blue-500" />
          <div className="mb-4 flex items-center">
            <span className="text-[40px] text-blue-600">
              <RxDividerVertical />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ex dolores adipisci vitae corrupti ut quae quaerat dolorum ea quas?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
            veritatis.
          </div>
          <hr className="mb-4 border-[1.8px] border-blue-500" />
          <div className="gap-4 flex items-center mb-4">
            <span className="text-blue-600 text-xl font-semibold">+</span>How do
            I share my reports and medical cases with the clinic of my choice?
          </div>
          <hr className="border-[1.8px] " />

          <div className="border border-blue-500 border-dotted   w-full font-bold mt-10"></div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default FAQSection;
