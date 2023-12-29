import React from "react";
import styled, { keyframes } from "styled-components";

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

const services = [
  {
    id: 1,
    title: "Swimming Pool",
    description: "Relax and unwind in our luxurious swimming pool.",
    image: "https://www.barpeepalresort.com/images/services/blQaU-pool.jpg",
  },
  {
    id: 2,
    title: "SPA",
    description:
      "Indulge in our rejuvenating spa services for ultimate relaxation.",
    image: "https://www.barpeepalresort.com/images/services/I7d4X-spa.jpg",
  },
  {
    id: 3,
    title: "Yoga",
    description: "Discover inner peace and balance through our yoga sessions.",
    image: "https://www.barpeepalresort.com/images/services/SooKh-yoga.jpg",
  },
  {
    id: 4,
    title: "Lamjung Restaurant",
    description: "Experience exquisite dining at our Lamjung Restaurant.",
    image: "https://www.barpeepalresort.com/images/services/m6CU7-lamgunj.jpg",
  },
  {
    id: 5,
    title: "Chautari Restro and Bar",
    description:
      "Enjoy a variety of drinks and cuisines at our Chautari Restro and Bar.",
    image: "https://www.barpeepalresort.com/images/services/OPTBs-bar.jpg",
  },
  {
    id: 6,
    title: "Meeting & Events",
    description: "Host successful meetings and events in our versatile spaces.",
    image: "https://www.barpeepalresort.com/images/services/H6msV-hall.jpg",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 p-4 py-16 bg-gradient-to-t from-gray-100 via-[#696935] to-[#454722]">
      <div className="container mx-auto">
        <h2 className="font-bold text-center  text-gray-100 text-[2rem] md:text-[3rem]">
          Our Services
        </h2>
        <p className="text-md lg:text-xl mb-12 text-center text-gray-200">
          Where hospitality meets excellence in every detail
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="relative rounded-lg shadow-md">
              <div className="w-full h-80 object-cover overflow-hidden rounded-xl">
                <AnimatedImg
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="scroller absolute bottom-0 p-6 h-28 hover:h-full transition-all duration-500 ease-in-out overflow-hidden text-white bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,0.90)] overflow-y-auto">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white">{service.description}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  nobis velit beatae doloremque voluptatibus vero deleniti totam
                  cupiditate. Hic atque perspiciatis omnis eligendi veniam
                  doloremque dolorum assumenda quasi nemo. Nisi magnam, culpa
                  iusto accusantium expedita cupiditate ab alias doloremque
                  nostrum esse! Minima doloremque corrupti excepturi. Pariatur
                  deserunt distinctio minus nisi.
                </p>
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black -z-10"></div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
