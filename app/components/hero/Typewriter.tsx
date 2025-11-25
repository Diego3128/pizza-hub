"use client";

import TypewriterEffect from "typewriter-effect";

interface Props {
  words?: string[];
}

export const Typewriter = ({ words }: Props) => {
  return (
    <div className="slogan min-h-14 min-[580px]:min-h-10">
      <TypewriterEffect
        options={{
          strings: words,
          autoStart: true,
          loop: true,
          cursor: "",
          cursorClassName: "typewriter-cursor",
          wrapperClassName: "typewriter-text",
          // pauseFor: 3000
        }
      }
      />
    </div>
  );
};
