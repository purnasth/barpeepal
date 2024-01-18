import React from "react";
import Plx from "react-plx";

const ParallaxExample = () => {
  // Array of parallax effects to be applied
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 0.5,
          endValue: 1,
          property: "scale",
        },
      ],
    },
    {
      start: 200,
      end: 700,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    {
      start: 400,
      end: 1000,
      properties: [
        {
          startValue: 0,
          endValue: 100,
          property: "translateY",
        },
      ],
    },
  ];

  return (
    <div className="min-h-[200vh] max-w-screen overflow-hidden p-12">
      <h1>Scroll down to see the parallax effects</h1>

      {/* Content with parallax */}
      <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
        <div className="h-96 bg-red-600 mb-20 flex items-center justify-center text-black text-4xl">
          Multiple Parallax Effects Applied!
        </div>
      </Plx>
    </div>
  );
};

export default ParallaxExample;
