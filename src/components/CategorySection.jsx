import React from "react";

const CategorySection = () => {
    return (
        <div className="border-b border-b-gray-300">
        <div className="container mx-auto flex  py-6">
            <div className="">
                <ul  className="flex items-center gap-14 text-lg font-medium ">
                    <li><a href="#" className="ml-8 cursor-pointer hover:underline ">Overview</a></li>
                    <li><a href="#Eligibility" className="">Eligibility</a></li>
                    <li><a href="#Preparation" className="">Preparation</a></li>
                    <li><a href="#About" className="">About Treatment</a></li>
                    <li><a href="#Treatment" className="">Post-Treatment Care</a></li>
                    <li><a href="#Recovery" className="">Recovery Tips</a></li>
                    <li><a href="#FAQs" className="">FAQs</a></li>
                    <li><a href="#Patient" className="">Patient Stories</a></li>
                </ul>
            </div>
            <hr />
        </div>
        </div>
    );
};

export default CategorySection;
