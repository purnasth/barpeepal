import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";

const Messenger = () => {
  const openMessenger = () => {
    // Replace the page ID with your Facebook page ID
    const pageId = "your_page_id";
    window.open(`https://m.me/${pageId}`, "_blank");
  };

  return (
    <>
      <div
        id="messenger-icon"
        className="fixed right-5 bottom-5 z-[99] w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-150 ease-in-out p-2"
      >
        <a
          href="#"
          target="_blank"
          className="p-2"
          rel="noopener noreferrer"
          aria-label="messenger-icon"
          onClick={openMessenger}
        >
          <FaFacebookMessenger className="text-[2rem] text-blue-600" />
        </a>
      </div>
    </>
  );
};

export default Messenger;
