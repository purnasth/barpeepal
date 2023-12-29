import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const openWhatsApp = () => {
    const phoneNumber = "123456789";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <>
      <div
        id="whatsapp-icon"
        className="fixed right-5 bottom-24 z-[99] w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-150 ease-in-out p-2"
      >
        <a
          href="#"
          target="_blank"
          className="p-2"
          rel="noopener noreferrer"
          aria-label="whatsapp-icon"
          onClick={openWhatsApp}
        >
          <FaWhatsapp className="text-[2.5rem] text-green-600" />
        </a>
      </div>
    </>
  );
};

export default WhatsApp;
