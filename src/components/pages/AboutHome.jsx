import React from "react";
// import graphicsTree from "/src/assets/graphics/tree.png";
import graphicsTree from "../../assets/graphics/tree.png";

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
            <p className="w-full md:w-1/2 text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              voluptates quisquam dolore corporis architecto quaerat sequi ex
              accusamus velit nostrum, assumenda vero obcaecati eum quo iste.
              Reiciendis eos similique amet mollitia natus facere temporibus eum
              ullam, corporis quaerat! Obcaecati necessitatibus blanditiis vero
              repellat eaque exercitationem dolorum suscipit est labore iure.
            </p>
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
