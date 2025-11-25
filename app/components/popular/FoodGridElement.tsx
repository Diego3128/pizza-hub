"use client";

import { PopularFood } from "@/app/config/data/popularFoods";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { headingFont } from "@/app/config/fonts/fonts";

interface Props {
  food: PopularFood;
}

export const FoodGridElement = ({ food }: Props) => {
  const toggleSound = useRef<null | HTMLAudioElement>(null);

  const [isActive, setIsActive] = useState(false);
  //   card-active class triggers the card flip

  const playSound = () => {
    if (toggleSound.current) {
      toggleSound.current.volume = 0.5;
      toggleSound.current.play();
    }
  };

  const handleClick = () => {
    setIsActive((prev) => !prev);
    playSound();
  };

  useEffect(() => {
    const sound = new Audio("/sounds/whoosh.mp3");
    if (sound) {
      toggleSound.current = sound;
    }
  }, []);
  return (
    // grid item styles
    <div className="w-[46%] h-60 md:w-3/12 md:h-64  lg:w-full lg:h-full rounded-xl">
      {/* card element below */}
      <div
        onClick={handleClick}
        className={`card group hover:cursor-pointer ${
          isActive ? "card-active" : ""
        }`}
      >
        <div className="content">
          <div className="back">
            <div className="back-content overflow-hidden">
              <h1
                className={`absolute bottom-0 left-0 w-full bg-slate-800/50  text-center  px-1 py-3 z-20 group-hover:-translate-y-1 transition-transform duration-500 ${headingFont.className} md:text-xl`}
              >
                {food.title}
              </h1>
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={`/images/popular/${food.name}`}
                alt={`${food.title} image`}
                height={1000}
                width={1000}
              />
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>
            {/* front content */}
            <div className="front-content absolute @container">
              <Image
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-30"
                src={`/images/popular/${food.name}`}
                alt={`${food.title} image`}
                height={1000}
                width={1000}
              />
              <div className=" absolute flex justify-center items-center inset-0 z-40  w-full overflow-hidden ">
                <div className="w-11/12 p-2 backdrop-blur-xs bg-yellow-500/5 rounded-2xl text-center">
                  <h3
                    className={` text-pretty mb-2  text-[16px] @[250px]:text-xl @md:text-xl  ${headingFont.className}`}
                  >
                    {food.title}
                  </h3>
                  <p className="text-balance text-xs @[250px]:text-[16px] @md:text-lg">
                    {food.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
