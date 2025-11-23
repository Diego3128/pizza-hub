"use client";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import { useEffect, useRef, useState } from "react";
import { GalleryImg } from "./GalleryImg";

//todo: come from the server
const sampleImages = [
  {
    name: "2-picada.jpg",
    title: "Chef’s Special Platter",
    description:
      "A hearty mix of grilled meats, fries, and sauces—perfect for sharing.",
  },
  {
    name: "1-burger.jpg",
    title: "Wild Burger",
    description:
      "A juicy, flame-grilled burger loaded with fresh toppings and bold flavor.",
  },
  {
    name: "3-pizza.jpg",
    title: "Smoky Pepper Pizza",
    description:
      "Crispy crust, melted cheese, and smoky pepperoni baked to perfection.",
  },
];

export const Gallery = () => {
  const [showOptions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const timePerImage = 8000;
  const showDetailsAfter = 2000;

  const imgRefs = useRef<HTMLDivElement[]>([]);

  type IntervalType = ReturnType<typeof setInterval>;
  let intervalId = useRef<IntervalType | null>(null);

  const nextIndex = () => {
    setActiveIndex((prevI) => (prevI + 1) % imgRefs.current.length);
  };

  const prevIndex = () => {
    setActiveIndex(
      (prevI) => (prevI - 1 + imgRefs.current.length) % imgRefs.current.length
    );
  };

  const createInterval = () => {
    intervalId.current = setInterval(() => {
      nextIndex();
    }, timePerImage);
  };

  const cleanInterval = () => {
    clearInterval(intervalId.current as IntervalType);
  };
  // start interval
  useEffect(() => {
    createInterval();
    return () => cleanInterval();
  }, []);

  return (
    <div className="relative h-full w-full bg-gray-950  xs:px-5 md:px-10 py-3 transition-all duration-500 overflow-hidden">
      {/* options */}
      {showOptions && (
        <div className="absolute left-0 top-0 h-full w-full  flex justify-center items-center pointer-events-none">
          <div className="w-full flex justify-between px-3 pointer-events-auto">
            <button
              onClick={prevIndex}
              className="bg-amber-500 rounded-full size-6"
            >
              <GrLinkPrevious />
            </button>
            <button
              onClick={nextIndex}
              className="bg-amber-500 rounded-full size-6"
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
      )}

      {/* scrollable content */}
      {sampleImages.map((img, i) => (
        <GalleryImg
          showDetailsTimeout={showDetailsAfter}
          isActive={i === activeIndex}
          ref={(el) => {
            imgRefs.current[i] = el as HTMLDivElement;
          }}
          alt={`${img.title} image`}
          key={img.name}
          src={`/images/hero/gallery/${img.name}`}
          height={1000}
          width={1000}
          description={img.description}
          title={img.title}
        />
      ))}
    </div>
  );
};
