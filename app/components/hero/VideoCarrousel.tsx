"use client";

import { useRef, useState } from "react";

interface Props {
  videos: string[];
  showOptions?: boolean;
}

export const VideoCarrousel = ({ videos, showOptions = true }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [index, setIndex] = useState(0);

  const handleVideoEnd = () => {
    // loop in the videos array
    setIndex((prevI) => (prevI + 1) % videos.length);
  };

  const playSpecific = (index: number) => {
    setIndex(index);
  };

  return (
    <div className="relative h-full w-full">
      <video
        className="absolute inset-0 h-full w-full object-cover rounded-xl"
        onEnded={handleVideoEnd}
        ref={videoRef}
        key={index}
        playsInline
        autoPlay
        muted
        src={`/videos/${videos[index]}`}
      ></video>
      <div className="absolute flex justify-center bottom-2 left-0 z-10 w-full">
        <div className="flex gap-3 py-3 px-4 backdrop-blur-xs bg-white-200/5 max-w-10/12 mx-auto rounded-xl">
          {videos.map((vid, i) => (
            <button
              onClick={() => playSpecific(i)}
              className={`carrousel-btn ${i === index ? "-translate-y-1.5" : ""}`}
              key={vid}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
