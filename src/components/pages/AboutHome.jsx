// import React from "react";
// // import graphicsTree from "/src/assets/graphics/tree.png";
// import graphicsTree from "../../assets/graphics/tree.webp";
// import { Link } from "react-router-dom";
// import { HiArrowLongRight } from "react-icons/hi2";

// const AboutHome = () => {
//   const tree = {
//     backgroundImage: `url(${graphicsTree})`,
//   };

//   return (
//     <>
//       <div className="my-10 md:my-20">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-center text-xl gap-4 flex-col md:flex-row">
//             <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2">
//               <h2 className="text-[2.5rem] md:text-[4rem] my-2 md:my-4">
//                 About Us
//               </h2>
//               <p className="text-xl md:text-2xl">
//                 An Oasis In Pokhara's Most Exciting Location <br />
//                 "Serving Nepali Taste"
//               </p>
//             </div>
//             <div className="w-full md:w-1/2 text-base md:text-lg">
//               <p className="hidden md:block">
//                 An Exclusive Resort surrounded in 10.5 ropani having 38 Rooms, 1
//                 Restaurant, 1 Coffee Shop , Infinity Swimming Pool, Spa Sauna &
//                 Steam and Big Garden. Resort represent Nepali Local house which
//                 built in Nepali style with Nepali stuffs like local stone and
//                 wooden. Resort is in Prime Location with best view of Fewa Lake,
//                 Peace Pagoda and Raniban Forest.
//               </p>
//               <Link
//                 to={`/about`}
//                 className="w-60 pr-4 hover:px-4 md:pr-6 hover:md:px-6 py-2 bg-none my-3 flex items-center justify-start cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#454722] before:to-[#696935] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:before:left-0 text-black hover:text-peepal-300 text-xl lg:text-2xl"
//               >
//                 Explore More
//                 <HiArrowLongRight className="ml-2 text-2xl" />
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div
//           className="w-full h-24 md:h-40 bg-contain bg-repeat-x opacity-20"
//           style={tree}
//         ></div>
//       </div>
//     </>
//   );
// };

// export default AboutHome;

import React from "react";
import Plx from "react-plx";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const AboutHome = () => {
  const parallaxDataLeft = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: -100,
          endValue: 0,
          property: "translateX",
        },
        {
          startValue: 1.2,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ];

  const parallaxDataRight = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "translateX",
        },
        {
          startValue: 1.2,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ];
  const parallaxButton = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "translateX",
        },
        {
          startValue: 0.8,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ];

  return (
    <>
      <div className="my-10 md:my-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-xl gap-4 flex-col md:flex-row">
            <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2">
              <Plx
                className="text-[2.5rem] md:text-[4rem] my-2 md:my-4"
                parallaxData={parallaxDataLeft}
              >
                <h2>About Us</h2>
              </Plx>
              <Plx
                className="text-xl md:text-2xl"
                parallaxData={parallaxDataLeft}
              >
                <p>
                  An Oasis In Pokhara's Most Exciting Location <br />
                  "Serving Nepali Taste"
                </p>
              </Plx>
            </div>
            <div className="w-full md:w-1/2">
              <Plx parallaxData={parallaxDataRight}>
                <p className="text-lg md:text-xl">
                  An Exclusive Resort surrounded in 10.5 ropani having 38 Rooms,
                  1 Restaurant, 1 Coffee Shop, Infinity Swimming Pool, Spa,
                  Sauna & Steam, and Big Garden. The resort represents Nepali
                  Local house which built in Nepali style with Nepali stuffs
                  like local stone and wood. The resort is in a Prime Location
                  with the best view of Fewa Lake, Peace Pagoda, and Raniban
                  Forest.
                </p>
              </Plx>
              <Plx parallaxData={parallaxButton}>
                <Link
                  to={`/about`}
                  className="w-60 pr-4 hover:px-4 md:pr-6 hover:md:px-6 py-2 bg-none my-3 flex items-center justify-start cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#454722] before:to-[#696935] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:before:left-0 text-black hover:text-peepal-300 text-xl lg:text-2xl"
                >
                  Explore More
                  <HiArrowLongRight className="ml-2 text-2xl" />
                </Link>
              </Plx>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
