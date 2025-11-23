"use client";

import { useEffect, useRef, useState } from "react";

type BurguerMenuProps = {
  isMenuOpen: boolean;
};

export const BurguerMenu = ({ isMenuOpen }: BurguerMenuProps) => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  const openSound = useRef<HTMLAudioElement | null>(null);
  const closeSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // set sounds
    openSound.current = new Audio("/sounds/pop-in.mp3");
    closeSound.current = new Audio("/sounds/pop-out.mp3");
  }, []);

  //   play sound when menu is closed or opened
  useEffect(() => {
    if (isFirstTime) {
      // do not play it on first render
      setIsFirstTime(false);
      return;
    }
    if (isMenuOpen) {
      openSound.current?.play();
    } else {
      closeSound.current?.play();
    }
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col gap-1 cursor-pointer w-7">
      <span
        className={`h-1 w-full bg-gray-200 rounded transition-all duration-300 ${
          isMenuOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`h-1 w-full bg-gray-200 rounded transition-all duration-300 ${
          isMenuOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`h-1 w-full bg-gray-200 rounded transition-all duration-300 ${
          isMenuOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </div>
  );
};
