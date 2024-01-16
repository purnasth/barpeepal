import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import testimonialData from "./data/testimonialData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosCloseCircle } from "react-icons/io";
import HeadingStyle from "./HeadingStyle";

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
    // dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
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
    <section className="relative p-4 z-20 overflow-hidden bg-gradient-to-b from-peepal-800 via-peepal-600 to-peepal-300">
      <div className="container mx-auto md:p-20">
        <h2 className="font-bold text-center  text-dark-primary text-[2rem] md:text-[3rem]">
          Testimonials
        </h2>
        <h3 className="text-md lg:text-xl text-center text-dark-primary">
          See why they love their unforgettable stays with us!
        </h3>
        <HeadingStyle />
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="flex items-center gap-8 relative p-8 my-8 shadow-lg hover:shadow-xl transition-all duration-150 ease-linear max-h-80 overflow-y-auto cursor-pointer bg-dark-primary/80"
              onDoubleClick={() => openModal(testimonial)}
            >
              <div className="w-full flex items-center justify-between text-gray-800">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full shadow-lg object-cover"
                />
                <Link
                  to={testimonial.sourceUrl}
                  target="_blank"
                  className="flex items-start justify-center flex-col"
                  rel="noreferrer"
                >
                  <h4 className="text-base md:text-xl text-coffee-800 font-bold text-gray-800">
                    {testimonial.author}
                  </h4>
                  <span className="text-sm italic text-gray-100/80">
                    {testimonial.source}
                  </span>
                </Link>
              </div>
              <h5 className="text-gray-800 text-xl font-bold mt-4">
                {testimonial.contentTitle}
              </h5>
              <p className="text-justify text-gray-800 text-sm md:text-base my-2">
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
              className="bg-gray-100 p-8 rounded-md w-[90%] md:w-[50%] max-h-[70%] z-40 overflow-y-auto relative"
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
                    className="w-20 h-20 rounded-full shadow-lg object-cover mb-4"
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
