import React from "react";
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

const Services = () => {
  const services = [
    {
      id: 1,
      image: "https://www.barpeepalresort.com/images/services/blQaU-pool.jpg",
      title: "Swimming Pool",
      subtitle: "Relax and unwind in our luxurious swimming pool.",
      description:
        "Enjoy the serene atmosphere of our swimming pool, designed for your relaxation and pleasure. Dive into the crystal-clear waters and let the worries of the day melt away. Our poolside service ensures you have everything you need, from refreshing beverages to delicious snacks. Whether you're swimming laps or lounging by the pool, our attentive staff is here to make your experience truly enjoyable.",
    },
    {
      id: 2,
      title: "Wellness & SPA",
      subtitle:
        "Indulge in our rejuvenating spa services and yoga sessions for ultimate relaxation.",
      image: "https://www.barpeepalresort.com/images/services/I7d4X-spa.jpg",
      description:
        "Bar Peepal Resort offers a wide range of wellness and spa services to help you relax and rejuvenate. Our spa services include a variety of massages, facials, body treatments, and more. We also offer yoga sessions to help you find inner peace and balance.",
    },
    {
      id: 3,
      title: "Restaurant & Bar",
      subtitle:
        "Experience exquisite dining at our Lamjung Restaurant and Chautari Restro and Bar.",
      image:
        "https://www.barpeepalresort.com/images/services/m6CU7-lamgunj.jpg",
      description:
        "Immerse yourself in a culinary delight at our Lamjung Restaurant and Chautari Restro and Bar. Our diverse menu offers a range of delicious dishes to satisfy your taste buds.",
    },
    {
      id: 4,
      image: "https://www.barpeepalresort.com/images/services/H6msV-hall.jpg",
      title: "Meeting & Events",
      subtitle: "Host successful meetings and events in our versatile spaces.",
      description:
        "Bar Peepal Resort offers two unique conference and event venues - Shree Manjang Hall with 250 to 300 occupancy. Each is set in superb surroundings to bring peace and relaxation to the business minds that meet in our hall.",
    },
  ];

  return (
    <section className="bg-gray-100 p-4 py-16 bg-gradient-to-t from-gray-100 via-[#696935] to-[#454722]">
      <div className="container mx-auto">
        <h2 className="font-bold text-center text-gray-100 text-[2rem] md:text-[3rem]">
          Our Services
        </h2>
        <p className="text-md lg:text-xl text-center text-gray-200">
          Where hospitality meets excellence in every detail
        </p>
        <HeadingStyle />

        <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
          <div className="lg:col-span-5 rounded-xl relative">
            <div className="overflow-hidden rounded-xl">
              <AnimatedImg
                src={services[0].image}
                alt={services[0].title}
                className="w-full h-64 lg:h-[600px] object-cover rounded-xl"
              />
            </div>
            <div className="scroller absolute bottom-0 p-6 lg:px-0 h-20 lg:h-48 hover:h-1/2 lg:hover:h-48 transition-all duration-500 ease-in-out overflow-hidden text-white lg:text-dark-primary bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,0.90)] lg:bg-none overflow-y-auto pt-0 mt-0 lg:mt-4 ">
              <h3 className="text-xl lg:text-2xl font-bold my-2">
                {services[0].title}
              </h3>
              <p className="text-base lg:text-xl">{services[0].description}</p>
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black -z-10"></div> */}
            </div>
          </div>
          <div className="overflow-hidden flex items-center justify-center gap-5 flex-col lg:h-[800px] lg:col-span-3">
            {services.slice(1).map((service) => (
              <div
                key={service.id}
                className="overflow-hidden w-full h-full rounded-xl relative"
              >
                <AnimatedImg
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 lg:h-full object-cover rounded-xl"
                />
                <div className="scroller absolute bottom-0 p-6 h-20 hover:h-40 transition-all duration-500 ease-in-out overflow-hidden text-white bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,0.90)] overflow-y-auto pt-0 mt-0">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white">
                    {service.description || service.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
