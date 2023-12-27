import React from "react";
import Slider from "react-slick";
import testimonialData from "./data/testimonialData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
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
    <section className="relative p-4">
      <div className="container mx-auto z-10 p-20">
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="flex items-center gap-8 relative p-8 my-8 shadow-lg hover:shadow-xl transition-all duration-150 ease-linear max-h-80 overflow-y-auto"
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
      </div>
    </section>
  );
};

export default Testimonials;
