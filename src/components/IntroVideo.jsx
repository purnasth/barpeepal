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
      {/* <div className="overlay absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.25)]"></div> */}
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
        A video of Bar Peepal Resort where you can see the beautiful infrastructure of the resort.
      </video>
    </section>
  );
};

export default IntroVideo;
