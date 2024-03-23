import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hospitalImage1 from "../assets/carousel/hospital 1.1.jpg";
import hospitalImage2 from "../assets/carousel/hospital 2.1.jpg";
import hospitalImage3 from "../assets/carousel/hospital 3.1.jpg";

const HospitalDetail = () => {
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
    <div className='container mx-auto bg-white mt-10 '>
            <div className="p-4">
                <h1 className='text-center text-red-500 text-4xl mt-10 font-bold'>Hospitals</h1>
                <div className="text-2xl font-bold text-center mt-2 ">Recommended  <span className='text-blue-500'>Hospitals</span></div>
            </div>

            <div className="slider-container p-10  ">
                <Slider {...settings}>
                    <div className="">
                        <div className="bg-white  p-5 border border-dotted border-red-500">
                            <div className='h-60  flex justify-center items-center rounded-t-xl'>
                                <img src={hospitalImage1} alt="" className="h-[250px] w-[700px] "/>
                            </div>

                            <div className="flex flex-col items-center justify-center m-2">
                                <p className="text-xl font-semibold  mt-5">Apollo Hospital</p>
                                
                                <p className="text-center mt-3 text-red-500 font-semibold">Bangalore</p>
                            </div>
                        </div>
                    </div>

                    <div className=" ">
                        <div className="bg-white ml-2 p-5 border border-dotted border-red-500">
                            <div className='h-60 w-full  flex justify-center items-center rounded-t-xl'>
                                <img src={hospitalImage2} alt="" className="h-[250px]  "/>
                            </div>

                            <div className="flex flex-col items-center justify-center m-2">
                            <p className="text-xl font-semibold  mt-5">Medanta Hospital</p>
                                
                                <p className="text-center mt-3 text-red-500 font-semibold">Gurgaon</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="bg-white ml-2 p-5 border border-dotted border-red-500">
                            <div className='h-60  flex justify-center items-center rounded-t-xl'>
                                <img src={hospitalImage3} alt="" className="h-[250px] w-[300px]"/>
                            </div>

                            <div className="flex flex-col items-center justify-center m-2">
                            <p className="text-xl font-semibold  mt-5">Jaslok Hospital</p>
                                
                                <p className="text-center mt-3 text-red-500 font-semibold ">Mumbai</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            <div className='text-center font-semibold mt-10'>Don't hesitate, contact us for better help and services. <span className="text-red-500 underline">Explore all Hospitals</span></div>
            </div>
        </div>
  )
}

export default HospitalDetail