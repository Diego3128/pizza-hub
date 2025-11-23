"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export const Logo = () => {
  const hoverSound = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    try {
      hoverSound.current?.play();
    } catch{}
  };

  useEffect(() => {
    const sound = new Audio("/sounds/hover.mp3");
    hoverSound.current = sound;
    hoverSound.current.volume = 0.2;
  }, []);

  return (
    <div className="relative flex justify-center items-center gap-1">
      <Image
        onMouseOver={playSound}
        className="fill-transparent animate-pulse logo-img hover:scale-105 duration-300 transition-transform"
        alt="pizzahub logo"
        src="/icons/logo.png"
        height={50}
        width={50}
      />
      <h1 className="w-fit whitespace-nowrap  rounded-2xl bottom-0 left-0 capitalize text-gray-100">
        pizza{" "}
        <span className="bg-yellow-500 rounded-xl p-2 text-slate-950">hub</span>
      </h1>
    </div>
  );
};
