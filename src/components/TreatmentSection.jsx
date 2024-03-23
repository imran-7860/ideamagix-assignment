import React from "react";

const TreatmentSection = () => {
  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-2 p-10">
        <div className="">
          <h1 className="text-4xl font-semibold">Treatment Overview</h1>
          <div className="mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            beatae illo mollitia placeat, natus assumenda accusantium libero
            ullam consequuntur.
          </div>
          <div className="mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, vero ratione laboriosam temporibus amet eveniet
            veritatis, assumenda quidem at sint maiores consectetur optio nam id
            suscipit asperiores ullam repudiandae nulla! Quam, porro assumenda
            voluptas commodi tenetur necessitatibus quaerat aspernatur libero.
          </div>
          <div className="mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            amet officia sit optio reprehenderit ratione at ab dolor explicabo
            nam commodi consectetur.
          </div>
        </div>
        <div className="px-10">
          <img src={require("../assets/home/treatment.jpg")} alt="" />
        </div>
      </div>

      <div className="border border-blue-500 border-dotted  w-full font-bold"></div>
    </div>
  );
};

export default TreatmentSection;
