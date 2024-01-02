import React from "react";
import { Link } from "react-router-dom";
import forest from "../assets/graphics/forest.webp";
import longtail from "../assets/img/longtail_e-media.svg";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt, FaFacebook, FaHeart } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

const contactDetails = [
  {
    id: 1,
    icon: <IoLocationSharp className="inline-block text-4xl lg:-mr-5" />,
    text: "Manimarg, Street No. 28, Lakeside, Pokhara-6, Nepal",
    link: "https://maps.app.goo.gl/R5pPb1zuN6NmuqeQ6",
  },
  {
    id: 2,
    icon: <FaPhoneAlt className="inline-block text-xl" />,
    text: "+977 61 590193, +977 61 590194",
    link: "tel:+97761590193",
  },
  {
    id: 3,
    icon: <IoIosMailUnread className="inline-block text-2xl" />,
    text: "info@barpeepalresort.com",
    link: "mailto:info@barpeepalresort.com",
  },
];

const socialMediaDetails = [
  {
    id: 1,
    icon: <FaFacebook className="text-2xl" />,
    link: "https://www.facebook.com/barpeepalresort2020/",
    label: "Visit our Facebook page",
  },
  {
    id: 2,
    icon: <BsInstagram className="text-2xl" />,
    link: "https://www.instagram.com/barpeepalresort/",
    label: "Visit our Instagram page",
  },
  {
    id: 3,
    icon: (
      <img
        src="https://www.barpeepalresort.com/template/web/assets/img/silver.png"
        alt="Silver Oaks Inn"
        className="w-40 h-auto object-contain"
      />
    ),
    link: "https://www.hotelpokhara.com/",
    label: "Visit our Sister Concern",
  },
];

const otaLinks = [
  {
    id: 1,
    name: "Booking.com",
    image: "src/assets/OTA/bookingcom.svg",
    link: "https://www.booking.com/hotel/np/bar-peepal-resort.en-gb.html",
  },
  {
    id: 2,
    name: "Tripadvisor",
    image: "src/assets/OTA/tripadvisor.svg",
    link: "https://www.tripadvisor.com/Hotel_Review-g293891-d21025792-Reviews-Bar_Peepal_Resort-Pokhara_Gandaki_Zone_Western_Region.html",
  },
  {
    id: 3,
    name: "MakeMyTrip",
    image: "src/assets/OTA/makemytrip.svg",
    link: "https://www.makemytrip.com/hotels-international/nepal/pokhara-hotels/bar_peepal_resort-details.html",
  },

  {
    id: 4,
    name: "Agoda",
    image: "src/assets/OTA/agoda.svg",
    link: "https://www.agoda.com/bar-peepal-resort/hotel/pokhara-np.html",
    customClass: "w-32 h-8 object-cover scale-75 md:scale-75",
  },

  {
    id: 5,
    name: "Expedia",
    image: "src/assets/OTA/expedia.svg",
    link: "https://www.expedia.com/Pokhara-Hotels-Bar-Peepal-Resort.h66466180.Hotel-Information",
    customClass: "object-cover",
  },

  {
    id: 6,
    name: "Trivago",
    image: "src/assets/OTA/trivago.svg",
    link: "https://www.trivago.com/pokhara-101736/hotel/bar-peepal-resort-10325146",
  },
];

const paymentMethods = [
  { id: 1, name: "Visa", image: "src/assets/visa/visa.webp" },
  { id: 2, name: "MasterCard", image: "src/assets/visa/mastercard.webp" },
  { id: 3, name: "American Express", image: "src/assets/visa/amex.webp" },
  { id: 4, name: "Union", image: "src/assets/visa/union.webp" },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  const forestTreeStyle = {
    backgroundImage: `url(${forest})`,
  };

  return (
    <footer className="bg-dark-primary text-white relative overflow-hidden z-10 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
          <div className="grid justify-items-center w-full">
            <h5 className="text-2xl mb-8 underline">Contact Details</h5>
            <ul className="text-lg md:text-xl flex items-center justify-center flex-col gap-4">
              {contactDetails.map((contact) => (
                <li key={contact.id}>
                  <Link
                    to={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-center"
                  >
                    {contact.icon}
                    {contact.text}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center gap-4 mt-5 z-20">
              {socialMediaDetails.map((social) => (
                <li key={social.id}>
                  <Link
                    to={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center flex-col z-20">
            <h5 className="flex items-center justify-center gap-2 text-xl lg:text-2xl z-20 text-center">
              Developed with <FaHeart className="animate-bounce text-4xl" /> by
            </h5>
            <Link
              to="https://longtail.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={longtail}
                alt="Longtail e-media, Partner in Promotion"
                data-size="medium"
                className="w-48 h-auto object-contain mix-blend-hard-light bg-white p-2 rounded-xl my-2"
              />
            </Link>
          </div>

          <div className="grid w-full justify-items-center z-20">
            <h5 className="text-2xl mb-4 md:mb-0 underline">Book Online</h5>

            <ul className="grid grid-cols-3 gap-4 w-full">
              {otaLinks.map((ota) => (
                <li key={ota.id}>
                  <Link
                    to={ota.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 flex items-center justify-center bg-white rounded-xl"
                  >
                    <img
                      src={ota.image}
                      className={`w-32 h-8 object-contain ${ota.customClass}`}
                      alt={ota.name}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between gap-4 mt-5 lg:mt-0">
              <h5 className="text-xs md:text-base uppercase font-bold">
                We accept
              </h5>
              <ul className="flex items-center justify-between gap-4">
                {paymentMethods.map((method) => (
                  <li key={method.id}>
                    {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
                    <img
                      src={method.image}
                      className="w-12 h-auto object-contain"
                      alt={method.name}
                    />
                    {/* </a> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="line border-[0.5px] border-dotted border-white mt-4"></div>

        <div className="flex items-center justify-center lg:justify-between flex-col lg:flex-row gap-4 mt-4 text-base">
          <p className="text-center">
            Copyright © Bar Peepal Resort {currentYear}. All rights reserved.
          </p>
          <div className="flex gap-4 z-20">
            <Link to="/" className="underline hover:no-underline">
              Terms & Conditions
            </Link>
            <Link to="/" className="underline hover:no-underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-40 bg-contain bg-repeat-x opacity-10"
        style={forestTreeStyle}
      ></div>
    </footer>
  );
};

export default Footer;
