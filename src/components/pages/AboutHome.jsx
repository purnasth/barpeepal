import React from "react";
// import graphicsTree from "/src/assets/graphics/tree.png";
import graphicsTree from "../../assets/graphics/tree.png";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const AboutHome = () => {
  const tree = {
    backgroundImage: `url(${graphicsTree})`,
  };

  return (
    <>
      <div className="my-10 md:my-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-xl gap-4 flex-col md:flex-row">
            <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2">
              <h2 className="text-[2.5rem] md:text-[4rem] my-2 md:my-4">
                About Us
              </h2>
              <p className="text-xl md:text-2xl">
                An Oasis In Pokhara's Most Exciting Location <br />
                "Serving Nepali Taste"
              </p>
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg">
              <p>
                An Exclusive Resort surrounded in 10.5 ropani having 38 Rooms, 1
                Restaurant, 1 Coffee Shop , Infinity Swimming Pool, Spa Sauna &
                Steam and Big Garden. Resort represent Nepali Local house which
                built in Nepali style with Nepali stuffs like local stone and
                wooden. Resort is in Prime Location with best view of Fewa Lake,
                Peace Pagoda and Raniban Forest.
              </p>
              <Link
                to={`/about`}
                className="w-48 px-4 md:px-6 py-2 bg-dark-primary my-3 flex items-center justify-center cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#454722] before:to-[#696935] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:before:left-0 text-[#fff] text-xl lg:text-lg"
              >
                Explore More
                <HiArrowLongRight className="ml-2 text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="w-full h-24 md:h-40 bg-contain bg-repeat-x opacity-90"
          style={tree}
        ></div>
      </div>
    </>
  );
};

export default AboutHome;
