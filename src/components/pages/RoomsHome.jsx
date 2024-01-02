import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

import styled, { keyframes } from "styled-components";
import HeadingStyle from "../HeadingStyle";

const zoomIn = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const AnimatedImg = styled.img`
  animation: ${zoomIn} 15s linear infinite;
`;

const rooms = [
  {
    id: 1,
    title: "Deluxe Room",
    description: "Experience comfort and luxury in our Deluxe Room.",
    image:
      "https://www.barpeepalresort.com/images/subpackage/image/zC8WP-deluxeroom.jpg",
  },
  {
    id: 2,
    title: "Super Deluxe Room",
    description: "Indulge in the lavishness of our Super Deluxe Room.",
    image:
      "https://www.barpeepalresort.com/images/subpackage/image/JwofR-superdeluxe.jpg",
  },
  {
    id: 3,
    title: "Executive Suite",
    description: "Elevate your stay with our spacious Executive Suite.",
    image:
      "https://www.barpeepalresort.com/images/subpackage/image/su3rj-suite.jpg",
  },
];

const RoomSection = () => {
  const settings = {
    // dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2.65,
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
    <section className="p-4 bg-gradient-to-b from-gray-100 via-[#696935] to-[#454722]">
      <div className="container mx-auto">
        <h2 className="font-bold text-center  text-dark-primary text-[2rem] md:text-[3rem]">
          Our Rooms
        </h2>
        <p className="text-md lg:text-xl text-center">
          Unwind in opulent comfort and modern luxury
        </p>
        <HeadingStyle />
        <Slider {...settings}>
          {rooms.map((room) => (
            <div
              key={room.id}
              className="p-0 md:p-4 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="h-64 relative overflow-hidden rounded-lg">
                <AnimatedImg
                  src={room.image}
                  alt={room.title}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 rounded-lg transition duration-300 ease-in-out"></div>
              </div>
              <div className="ml-2 mt-4">
                <Link
                  to="/"
                  className="flex items-center justify-start text-xl md:text-2xl font-bold mb-2 text-white gap-2"
                  aria-hidden="true"
                >
                  <span aria-hidden="true">Explore</span>
                  <HiArrowLongRight aria-hidden="true" />
                  <h3 aria-hidden="true">{room.title}</h3>
                </Link>
                <p aria-hidden="true" className="text-gray-200">
                  {room.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RoomSection;
