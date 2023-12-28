import React from "react";

const Services = () => {
  return (
    <>
      <section className="relative">
        <div
          className="bg-[url('https://barpeepalresort.com/images/services/m6CU7-lamgunj.jpg')] w-full h-64 md:h-[80vh] bg-fixed bg-top lg:bg-top xl:bg-bottom bg-no-repeat bg-contain xl:bg-cover"
          style={{
            clipPath: "polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)",
          }}
        >
          {/* <img
            src="https://barpeepalresort.com/images/services/m6CU7-lamgunj.jpg"
            alt="Lamjung Restaurant"
            className="w-full h-1/2 lg:h-screen object-cover"
          /> */}
          <div className="overlay"></div>
        </div>
        <div className="md:-translate-y-24 text-center text-white">
          <h2 className="text-xl md:text-4xl text-center uppercase text-white">
            Services
          </h2>
          <h4 className="text-base md:text-xl">
            <a href="/">Home</a> |{" "}
            <span className="bg-dark-primary">Services</span>
          </h4>
        </div>

        <div className="container mx-auto bg-transparent px-4">
          <div
            className="w-full h-full md:-translate-y-[6.7rem]"
            style={{
              clipPath:
                "polygon(50% 10%, 100% 0, 100% 100%, 50% 90%, 0 100%, 0 0)",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="overflow-hidden">
                <img
                  src="https://www.barpeepalresort.com/images/services/blQaU-pool.jpg"
                  alt="Swimming Pool"
                  // className="col-span-2 md:col-span-1 row-span-2 md:row-span-1"
                  className="w-full h-full object-cover block hover:scale-150 hover:-rotate-6 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="https://www.barpeepalresort.com/images/services/I7d4X-spa.jpg"
                  alt="spa"
                  className="w-full h-full object-cover block hover:scale-150 hover:-rotate-6 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="https://www.barpeepalresort.com/images/services/SooKh-yoga.jpg"
                  alt="yoga"
                  className="w-full h-full object-cover block hover:scale-150 hover:-rotate-6 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="https://www.barpeepalresort.com/images/services/m6CU7-lamgunj.jpg"
                  alt="Lamjung Restaurant"
                  className="w-full h-full object-cover block hover:scale-150 hover:rotate-6 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="https://www.barpeepalresort.com/images/services/OPTBs-bar.jpg"
                  alt="Bar"
                  className="w-full h-full object-cover block hover:scale-150 hover:rotate-6 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="https://www.barpeepalresort.com/images/services/H6msV-hall.jpg"
                  alt="Hall"
                  className="w-full h-full object-cover block hover:scale-150 hover:rotate-6 transition-all duration-300 ease-linear"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
