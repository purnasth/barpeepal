import React from "react";

const RoomsHome = () => {
  return (
    <>
      <section className="px-4">
        <div className="container mx-auto">
          <div className="flex items-start flex-col md:flex-row gap-5">
            <div className="w-full">
              <div>
                <img
                  src="https://www.barpeepalresort.com/template/web/assets/img/text-block/02.jpg"
                  alt=""
                  className="w-full h-64 md:h-96 object-cover object-top"
                  style={{
                    clipPath: "polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0 0)",
                  }}
                />
              </div>
              <div
                className="grid grid-cols-3 gap-2"
                style={{
                  clipPath:
                    "polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0 0, 50% 15%)",
                }}
              >
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
              </div>
            </div>
            <div className="w-full">hmmm</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomsHome;
