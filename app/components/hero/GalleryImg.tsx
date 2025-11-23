"use client";

import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

interface Props {
  isActive: boolean;
  showDetailsTimeout?: number;
  src: string;
  alt: string;
  height?: number;
  width?: number;
  title: string;
  description: string;
}

export const GalleryImg = forwardRef<HTMLDivElement, Props>(
  (
    {
      isActive = false,
      showDetailsTimeout = 3000,
      alt,
      height = 400,
      width = 400,
      src,
      title = "sample title",
      description = "Sample description with some text for the gallery card",
    },
    ref
  ) => {
    const [showDetails, setShowDetails] = useState(false);

    type TimeoutType = ReturnType<typeof setTimeout>;
    let timeoutRef = useRef<TimeoutType | null>(null);

    const showImage = () => {
      setShowDetails(true);
    };
    const createTimeOut = () => {
      timeoutRef.current = setTimeout(() => {
        showImage();
      }, showDetailsTimeout);
    };

    const deleteTimeOut = () => {
      clearTimeout(timeoutRef.current as TimeoutType);
    };

    useEffect(() => {
      if (isActive) {
        createTimeOut();
      } else {
        setShowDetails(false);
      }
      return () => deleteTimeOut();
    }, [isActive]);

    return (
      <div
        // onMouseEnter={() => setisActive(true)}
        // onMouseLeave={() => setisActive(false)}
        ref={ref}
        className={`absolute top-0 left-0 h-full w-full flex-none rounded-xl overflow-hidden transition-transform duration-300 ${isActive ? "translate-x-0" : "translate-x-full"}`}
      >
        <Image
          draggable={false}
          className="block w-full h-full object-cover"
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
        {/* backdrop-blur-xs bg-white/5 */}
        <div
          className={`absolute  h-full w-full bottom-0 left-0  transition-all duration-500 `}
        >
          {/* content */}
          <div className="py-2 px-4 flex flex-col justify-between gap-2 h-full">
            <h2
              className={` bg-slate-950/40 backdrop-blur-2xl rounded-bl-xl rounded-tr-xl border-l-8 border-l-amber-500  text-gray-200 text-xl text-center p-2 capitalize text-pretty transition-all duration-700 delay-1000
          ${isActive ? "translate-x-0" : "translate-x-[100vw]"}
            `}
            >
              {title}
            </h2>
            <p
              className={` bg-slate-950/40 backdrop-blur-2xl rounded-bl-xl rounded-tr-xl border-b-8 border-b-amber-500  text-gray-200 text-lg text-center p-2 capitalize text-pretty delay-1000 transition-all duration-700  ${
                showDetails ? "translate-y-0" : "translate-y-[100vw]"
              }
            `}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

// (for React DevTools name)
GalleryImg.displayName = "GalleryImg";
