import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteRight } from "react-icons/bi";

const PatientStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    
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
    <div id="Patient" className="container mx-auto ">
      <div className="">
        <div className="p-10 ">
          <h1 className="text-4xl font-semibold mt-5">
            Patient Stories & Videos
            <span className="text-red-500 text-3xl">.</span>
          </h1>

          <div className="slider-container mt-10  ">
            <Slider {...settings}>
              <div className="p-4 max-w-lg border border-indigo-300 rounded-2xl shadow-lg flex flex-col items-center mr-2 ">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-lg">
                    Underwent procedure for retinal detachment
                  </h5>
                  <span className="text-4xl text-red-500">
                    <BiSolidQuoteRight />
                  </span>
                </div>
                <img
                  src="https://assets-global.website-files.com/60ad50e031bca68c427426f9/61df04af2e50f74aac5e3ad7_recovery-p-500.jpg"
                  alt=""
                  className="mt-4"
                />

                <div className="flex items-center gap-4  mt-4">
                  <img
                    src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
                    alt=""
                    className="rounded-full h-[70px] "
                  />
                  <p>
                    Luke Olfert <br />
                    <small>Sydney, Australia</small>
                  </p>
                </div>
              </div>

              <div className="p-4 h-[425px] max-w-lg border border-indigo-300 rounded-2xl shadow-lg flex flex-col items-center">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-lg">
                    Underwent procedure for retinal detachment
                  </h5>
                  <span className="text-4xl text-red-500">
                    <BiSolidQuoteRight />
                  </span>
                </div>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, quam voluptas, voluptatem ad quos unde distinctio
                  blanditiis repellat pariatur, laudantium eaque numquam minima
                  voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Mollitia magnam doloribus ipsam omnis iusto totam
                  quaerat, nesciunt numquam nemo, perspiciatis eos dolores id
                  perferendis ullam.
                </div>
                <div className="flex items-center gap-4 mt-5  ">
                  <img
                    src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
                    alt=""
                    className="rounded-full h-[70px] "
                  />
                  <p>
                    Luke Olfert <br />
                    <small>Sydney, Australia</small>
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default PatientStories;
