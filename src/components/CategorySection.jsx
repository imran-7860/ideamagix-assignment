import React from "react";

const CategorySection = () => {
    return (
        <div className="container mx-auto flex border border-b-gray-300 h-[70px]">
            <div className="">
                <ul id="Active" className="flex items-center gap-14 text-lg font-medium mt-5">
                    <li><a href="#" className="ml-8">Overview</a></li>
                    <li><a href="#" className="">Eligibility</a></li>
                    <li><a href="#" className="">Preparation</a></li>
                    <li><a href="#" className="">About Treatment</a></li>
                    <li><a href="#" className="">Post-Treatment Care</a></li>
                    <li><a href="#" className="">Recovery Tips</a></li>
                    <li><a href="#" className="">FAQs</a></li>
                    <li><a href="#" className="">Patient Stories</a></li>
                </ul>
            </div>
            <hr />
        </div>
    );
};

export default CategorySection;
