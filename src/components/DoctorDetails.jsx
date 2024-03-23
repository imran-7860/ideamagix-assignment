import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pinkBgImage1 from "../assets/carousel/pink bg.jpg";


const DoctorDetails = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    return (
        <div className='container mx-auto bg-gray-200 mt-10 '>
            <div className="p-4">
                <h1 className='text-center text-red-500 text-4xl mt-10 font-bold'>Doctors</h1>
                <div className="text-2xl font-bold text-center mt-2 ">Top Orthopaedic <span className='text-blue-500'>Doctors</span></div>
            </div>

            <div className="slider-container p-20  ">
                <Slider {...settings}>
                    <div className="">
                        <div className="bg-white w-[300px] p-5 ">
                            <div className='h-60  flex justify-center items-center rounded-t-xl'>
                                <img src={pinkBgImage1} alt="" className="h-[250px] w-[300px] "/>
                            </div>

                            <div className="flex flex-col items-center justify-center m-2">
                                <p className="text-xl font-semibold text-red-500 mt-5">Dr. Faique Falke</p>
                                <p className="text-center font-semibold">Musaffah Industrial - Abu Dhabi</p>
                                <p className="text-center">Doctor Degree & Specialist</p>
                            </div>
                        </div>
                    </div>

                    <div className=" ">
                        <div className="bg-white w-[300px] p-5">
                            <div className='h-60  flex justify-center items-center rounded-t-xl'>
                                <img src={pinkBgImage1} alt="" className="h-[250px] w-[300px] "/>
                            </div>

                            <div className="flex flex-col items-center justify-center m-2">
                                <p className="text-xl font-semibold text-red-500 mt-5">Dr. John Doe</p>
                                <p className="text-center font-semibold">Some City - Some Country</p>
                                <p className="text-center">Specialist in Something</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="bg-white w-[300px] p-5">
                            <div className='h-60  flex justify-center items-center rounded-t-xl'>
                                <img src={pinkBgImage1} alt="" className="h-[250px] w-[300px]"/>
                            </div>

                            <div className="flex flex-col items-center justify-center m-2">
                                <p className="text-xl font-semibold text-red-500 mt-5">Dr. Jane Smith</p>
                                <p className="text-center font-semibold">Another City - Another Country</p>
                                <p className="text-center">Specialist in Something Else</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default DoctorDetails;
