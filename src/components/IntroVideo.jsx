import React, { useRef } from "react";
import bgVideo from "../assets/video/Bar_Peepal_Resort_Exclusive_Resort_Best_Lake_View_Resort_Resort_Promo_Video.mp4";

const IntroVideo = () => {
  const videoRef = useRef(null);

  function startVideo() {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  return (
    <section className="relative w-full h-full lg:h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster=""
        onClick={startVideo}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default IntroVideo;
