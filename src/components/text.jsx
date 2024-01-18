import React from "react";
import { ParallaxProvider, Parallax } from "react-plx";
import graphicsTree from "../../assets/graphics/tree.webp";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const AboutHome = () => {
  const tree = {
    backgroundImage: `url(${graphicsTree})`,
  };

  // Define your parallax data
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: "scale",
        },
      ],
    },
  ];

  return (
    <ParallaxProvider>
      <>
        <div className="my-10 md:my-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center text-xl gap-4 flex-col md:flex-row">
              {/* ... your existing code ... */}
            </div>
          </div>
          {/* Add Parallax component to the div */}
          <Parallax className="w-full h-24 md:h-40 bg-contain bg-repeat-x opacity-20" data={parallaxData}>
            <div style={tree}></div>
          </Parallax>
        </div>
      </>
    </ParallaxProvider>
  );
};

export default AboutHome;
