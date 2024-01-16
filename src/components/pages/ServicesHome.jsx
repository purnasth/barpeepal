import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaSwimmingPool, FaSpa, FaUtensils, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  animation: ${zoomIn} 60s linear infinite;
`;

const services = [
  {
    id: 1,
    image: "https://www.barpeepalresort.com/images/services/blQaU-pool.jpg",
    title: "Swimming Pool",
    link: "/swimming",
    subtitle: "Relax and unwind in our luxurious swimming pool.",
    description:
      "Enjoy the serene atmosphere of our swimming pool, designed for your relaxation and pleasure. Dive into the crystal-clear waters and let the worries of the day melt away. Our poolside service ensures you have everything you need, from refreshing beverages to delicious snacks. Whether you're swimming laps or lounging by the pool, our attentive staff is here to make your experience truly enjoyable.",
  },
  {
    id: 2,
    title: "Wellness & SPA",
    link: "/wellness",
    subtitle:
      "Indulge in our rejuvenating spa services and yoga sessions for ultimate relaxation.",
    image: "https://www.barpeepalresort.com/images/services/I7d4X-spa.jpg",
    description:
      "Bar Peepal Resort offers a wide range of wellness and spa services to help you relax and rejuvenate. Our spa services include a variety of massages, facials, body treatments, and more. We also offer yoga sessions to help you find inner peace and balance.",
  },
  {
    id: 3,
    title: "Restaurant & Bar",
    link: "/restaurant",
    subtitle:
      "Experience exquisite dining at our Lamjung Restaurant and Chautari Restro and Bar.",
    image: "https://www.barpeepalresort.com/images/services/m6CU7-lamgunj.jpg",
    description:
      "Immerse yourself in a culinary delight at our Lamjung Restaurant and Chautari Restro and Bar. Our diverse menu offers a range of delicious dishes to satisfy your taste buds.",
  },
  {
    id: 4,
    image: "https://www.barpeepalresort.com/images/services/H6msV-hall.jpg",
    title: "Meeting & Events",
    link: "/meeting",
    subtitle: "Host successful meetings and events in our versatile spaces.",
    description:
      "Bar Peepal Resort offers two unique conference and event venues - Shree Manjang Hall with 250 to 300 occupancy. Each is set in superb surroundings to bring peace and relaxation to the business minds that meet in our hall.",
  },
];

const ServicesHome = () => {
  const [activeService, setActiveService] = useState(0);
  const serviceRefs = useRef(services.map(() => React.createRef()));
  const observer = useRef(null);
  const navigate = useNavigate();

  const icons = [FaSwimmingPool, FaSpa, FaUtensils, FaBriefcase];

  const handleNavClick = (index) => {
    setActiveService(index);
    const targetRef = serviceRefs.current[index];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLinkClick = (link, index) => {
    navigate(link);
    setActiveService(index);
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = serviceRefs.current.findIndex(
          (ref) => ref.current === entry.target
        );
        if (index !== -1) {
          setActiveService(index);
        }
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    serviceRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.current.observe(ref.current);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div className="bg-dark-primary">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section with Small Sections */}
          <div className="sticky top-5 w-full lg:w-1/4 h-screen overflow-y-auto bg-dark-primary px-4 text-white-primary transition-all duration-300 ease-in-out">
            <h2 className="mt-16 font-bold text-[2rem] md:text-[3rem]">
              Our Services
            </h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui vel
              minus aut temporibus deleniti impedit magnam suscipit at rem,
              aperiam esse. Deserunt libero blanditiis fugiat rerum?
            </p>

            <ul className="my-8">
              {services.map((service, index) => (
                <li className="py-2" key={service.id}>
                  <a
                    href={`#${service.title}`}
                    onClick={() => handleNavClick(index)}
                    className={`text-lg font-semibold ${
                      activeService === index
                        ? "bg-white-primary text-dark-primary"
                        : "hover:bg-white-primary hover:text-dark-primary"
                    } w-full py-4 px-4 rounded-xl flex items-center transition-all duration-300 ease-in-out`}
                  >
                    {React.createElement(icons[index], {
                      size: 20,
                      className: "mr-4",
                    })}
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-3/4 overflow-y-auto z-20 bg-dark-primary">
            {services.map((service, index) => (
              <div
                id={service.title.toLowerCase().replace(/\s/g, "-")}
                className="service-section flex items-center justify-center flex-col px-4 pt-16 my-4"
                key={service.id}
                ref={serviceRefs.current[index]}
              >
                <div className="overflow-hidden rounded-xl mt-8">
                  <AnimatedImg
                    src={service.image}
                    alt={service.title}
                    className="mb-4 rounded-2xl"
                  />
                </div>
                <div className="bg-white-primary w-[300px] lg:w-3/5 p-4 rounded-2xl -translate-y-20 transition-all duration-300 ease-in-out">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHome;
