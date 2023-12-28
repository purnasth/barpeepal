import React, { useState } from "react";
import Slider from "react-slick";
import testimonialData from "./data/testimonialData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosCloseCircle } from "react-icons/io";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative p-4 z-20 overflow-hidden bg-gradient-to-b from-gray-100 via-[#696935] to-[#454722]">
      <div className="container mx-auto md:p-20">
        <h2 className="font-bold text-center  text-dark-primary text-[2rem] md:text-[3rem]">
          Our Services
        </h2>
        <p className="text-md lg:text-xl mb-12 text-center text-dark-primary">
          Where hospitality meets excellence in every detail
        </p>
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="flex items-center gap-8 relative p-8 my-8 shadow-lg hover:shadow-xl transition-all duration-150 ease-linear max-h-80 overflow-y-auto cursor-pointer "
              onDoubleClick={() => openModal(testimonial)}
            >
              <div className="w-full flex items-center justify-between">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full shadow-lg object-cover"
                />
                <div className="flex items-start justify-center flex-col">
                  <h5 className="text-base md:text-xl text-coffee-800 font-bold">
                    {testimonial.author}
                  </h5>
                  <span className="text-sm italic text-coffee-800/80">
                    {testimonial.source}
                  </span>
                </div>
              </div>
              <p className="text-justify text-black text-sm md:text-base">
                {testimonial.content}
              </p>
            </div>
          ))}
        </Slider>
        {selectedTestimonial && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="bg-white p-8 rounded-md w-[90%] md:w-[50%] max-h-[70%] z-40 overflow-y-auto relative"
              onClick={stopPropagation}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-dark-primary"
              >
                <IoIosCloseCircle className="text-3xl" />
              </button>
              <div>
                <div className="w-full flex items-center justify-between">
                  <img
                    src={selectedTestimonial.avatar}
                    alt={selectedTestimonial.author}
                    className="w-20 h-20 rounded-full shadow-lg object-cover"
                  />
                  <div className="flex items-start justify-center flex-col">
                    <h5 className="text-base md:text-xl text-coffee-800 font-bold">
                      {selectedTestimonial.author}
                    </h5>
                    <span className="text-sm italic text-coffee-800/80">
                      {selectedTestimonial.source}
                    </span>
                  </div>
                </div>
                <p className="text-justify text-black text-sm md:text-base">
                  {selectedTestimonial.content}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
