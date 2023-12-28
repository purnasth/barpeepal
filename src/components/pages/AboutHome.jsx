import React from "react";
// import graphicsTree from "/src/assets/graphics/tree.png";
import graphicsTree from "../../assets/graphics/tree.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                optio, quam odio consequatur deserunt mollitia fugit iste
              </p>
            </div>
            <div className="w-full md:w-1/2 text-base ">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                voluptates quisquam dolore corporis architecto quaerat sequi ex
                accusamus velit nostrum, assumenda vero obcaecati eum quo iste.
                Reiciendis eos similique amet mollitia natus facere temporibus
                eum ullam, corporis quaerat! Obcaecati necessitatibus blanditiis
                vero repellat eaque exercitationem dolorum suscipit est labore
                iure.
              </p>
              <Link
                to={`/about`}
                className="w-48 px-4 md:px-6 py-2 bg-dark-primary my-3 flex items-center justify-center cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#454722] before:to-[#696935] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:before:left-0 text-[#fff] text-xl lg:text-lg"
              >
                Explore More
                <IoIosArrowRoundForward className="ml-2 text-2xl" />
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
