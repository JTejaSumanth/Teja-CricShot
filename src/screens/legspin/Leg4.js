import React, { useEffect } from "react";
import styled from "styled-components";

const Leg4 = () => {
  const videoUrl = "https://www.youtube.com/embed/mrq15Ofqi3o";
  useEffect(() => {
    const iframe = document.getElementById("youtube-iframe");
    iframe.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    iframe.addEventListener("mozfullscreenchange", handleFullscreenChange);
    iframe.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      iframe.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      iframe.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      iframe.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);
  const handleFullscreenChange = () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
    const iframe = document.getElementById("youtube-iframe");
    if (fullscreenElement === iframe) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  };

  return (
    <Video>
      <iframe id="youtube-iframe" width="665" height="375" src={videoUrl} title="l4" frameborder="0" allowFullScreen></iframe>
    </Video>
  );
};

const Video = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  padding-top: 2%;
  iframe {
    width: 65%;
    height: 77%;
    border: 3px solid grey;
  }
  @media (max-width: 550px) { 
    height: 100%;
    width: 95%;
    padding-left: 1%;
    iframe {
      width: 100%;
      height: 50vh;
    }
  } 
`;

export default Leg4;