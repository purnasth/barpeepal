import React from "react";
import bgVideo from "../assets/video/video.mp4";

const IntroVideo = () => {
  function startVideo() {
    var backgroundVideo = document.getElementById("backgroundVideo");
    backgroundVideo.play();
  }

  return (
    <section
      className="w-full h-full lg:h-[100vh] overflow-hidden"
      onClick={startVideo}
    >
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        playsInline
        id="backgroundVideo"
        poster=""
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default IntroVideo;
